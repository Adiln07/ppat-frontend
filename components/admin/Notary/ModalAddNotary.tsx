"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAdminNotaryStore } from "@/stores/admin/notary/AdminNotaryStore";

export default function ModalAddNotary({
  search,
  page,
  limit,
}: {
  search: string;
  page: number;
  limit: number;
}) {
  const [addNotary, setAddNotary] = useState({
    name: "",
    skPpat: "",
    address: "",
    mapUrl: "",
    kotaId: 0,
  });

  const isAddNotaryClose = useAdminNotaryStore(
    (state) => state.isAddNotaryClose,
  );
  const cities = useAdminNotaryStore((state) => state.cities);
  const fetchGetAllCity = useAdminNotaryStore((state) => state.fetchGetAllCity);
  const addNotaryApi = useAdminNotaryStore((state) => state.addNotary);
  const fetchGetAllNotary = useAdminNotaryStore(
    (state) => state.fetchGetAllNotary,
  );

  useEffect(() => {
    fetchGetAllCity();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          await addNotaryApi(addNotary);
          await fetchGetAllNotary({
            name: search,
            pages: page,
            limit,
          });
          try {
          } catch (error) {}
        }}
        className="w-full max-w-lg bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
          <h2 className="kanit-font font-semibold text-lg text-slate-800">
            Add Notary Modal
          </h2>
          <button
            onClick={() => isAddNotaryClose()}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              value={addNotary.name}
              onChange={(e) =>
                setAddNotary((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
                SK PPAT
              </label>
              <input
                type="text"
                required
                value={addNotary.skPpat}
                onChange={(e) =>
                  setAddNotary((prev) => ({
                    ...prev,
                    skPpat: e.target.value,
                  }))
                }
                className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
              />
            </div>

            <div>
              <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
                City
              </label>
              <select
                required
                value={addNotary.kotaId}
                onChange={(e) =>
                  setAddNotary((prev) => ({
                    ...prev,
                    kotaId: Number(e.target.value),
                  }))
                }
                className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
              >
                <option value="">Pilih kota</option>
                {cities.map((city, i) => (
                  <option key={i} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Address
            </label>
            <textarea
              required
              value={addNotary.address}
              onChange={(e) =>
                setAddNotary((prev) => ({
                  ...prev,
                  address: e.target.value,
                }))
              }
              rows={3}
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
          </div>

          <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Map URL
            </label>
            <input
              type="text"
              required
              value={addNotary.mapUrl}
              onChange={(e) =>
                setAddNotary((prev) => ({
                  ...prev,
                  mapUrl: e.target.value,
                }))
              }
              placeholder="https://maps.google.com/?q=..."
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
          </div>

          {/* <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Image URL
            </label>
            <input
              type="text"
              placeholder="https://lh3.googleusercontent.com/..."
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
          </div> */}
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50">
          <button
            onClick={() => isAddNotaryClose()}
            type="button"
            className="roboto-font px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="roboto-font px-4 py-2 text-sm font-medium text-white bg-[#61CE69] hover:brightness-95 rounded-md drop-shadow-sm transition-all"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
