"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useAdminCityStore } from "@/stores/admin/city/AdminCityStore";
import { useEffect, useState } from "react";

export default function ModalEditCity({
  search,
  page,
  limit,
}: {
  search: string;
  page: number;
  limit: number;
}) {
  const isEditClose = useAdminCityStore((state) => state.isEditCityClose);
  const editCity = useAdminCityStore((state) => state.editCity);
  const fetchGetAllCity = useAdminCityStore((state) => state.fetchGetAllCity);
  const fetchGetCityId = useAdminCityStore((state) => state.fetchGetCityId);
  const cityId = useAdminCityStore((state) => state.cityId);
  const isEditCity = useAdminCityStore((state) => state.isEditCity);
  const cityById = useAdminCityStore((state) => state.cityById);

  const [name, setName] = useState("");

  useEffect(() => {
    if (cityId && isEditCity) {
      fetchGetCityId(cityId);
    }
  }, [cityId]);

  useEffect(() => {
    if (cityById) {
      setName(cityById.name || "");
    }
  }, [cityById]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
          <h2 className="kanit-font font-semibold text-lg text-slate-800">
            Edit City Modal
          </h2>
          <button
            onClick={isEditClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await editCity(cityId, name);

              await fetchGetAllCity({
                name: search,
                pages: page,
                limit,
              });

              setName("");
            } catch {}
          }}
        >
          <div className="px-6 py-5 space-y-4">
            <div>
              <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
                Name City
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50">
            <button
              type="button"
              onClick={isEditClose}
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
    </div>
  );
}
