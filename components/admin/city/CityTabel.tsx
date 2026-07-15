"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useAdminCityStore } from "@/stores/admin/city/AdminCityStore";

export default function CityTabel({
  search,
  setSearch,
  page,
  setPage,
  limit,
}: {
  search: string;
  setSearch: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  limit: number;
}) {
  const cities = useAdminCityStore((state) => state.cities);
  const pagination = useAdminCityStore((state) => state.pagination);
  const fetchGetAllCity = useAdminCityStore((state) => state.fetchGetAllCity);
  const isAddCityOpen = useAdminCityStore((state) => state.isAddCityOpen);
  const isEditCityOpen = useAdminCityStore((state) => state.isEditCityOpen);
  const setCityId = useAdminCityStore((state) => state.setCityId);
  const isDeleteCityOpen = useAdminCityStore((state) => state.isDeleteCityOpen);

  useEffect(() => {
    fetchGetAllCity({
      name: search,
      pages: page,
      limit: limit,
    });
  }, [search, page, limit]);

  const openEditCity = (id: number) => {
    isEditCityOpen();
    setCityId(id);
  };

  const openDeleteCity = (id: number) => {
    isDeleteCityOpen();
    setCityId(id);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="kanit-font font-semibold text-2xl">City Management</h1>
        <div>
          <div></div>
          <div
            className="flex items-center gap-2 bg-[#61CE69] text-white py-1 px-2 rounded-lg cursor-pointer drop-shadow-xl"
            onClick={isAddCityOpen}
          >
            <FontAwesomeIcon icon={faAdd} />
            <p className="roboto-font font-medium">Add City</p>
          </div>
        </div>
      </div>
      <div className="w-full py-6 bg-slate-50 min-h-screen ">
        <div className="w-full mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-160 text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500">
                    no
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500">
                    City
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500">
                    Updated At
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cities.map((row, i) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm roboto-font text-slate-500">
                      {i + 1}
                    </td>

                    <td className="px-6 py-4 text-sm roboto-font font-medium text-slate-800">
                      {row.name}
                    </td>
                    <td className="px-6 py-4 text-sm roboto-font text-slate-500">
                      <td>
                        {new Date(row.createdAt).toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </td>{" "}
                    </td>
                    <td className="px-6 py-4 text-sm roboto-font text-slate-500">
                      <td>
                        {new Date(row.updatedAt).toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </td>{" "}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditCity(row.id)}
                          className="px-3 py-1.5 text-sm roboto-font font-medium rounded-md border border-slate-200 text-slate-600 bg-white hover:bg-slate-100 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => openDeleteCity(row.id)}
                          className="px-3 py-1.5 text-sm roboto-font font-medium rounded-md border border-red-200 text-red-600 bg-white hover:bg-red-50 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination footer */}
          <div className="flex items-center kanit-font justify-between px-6 py-3 bg-slate-50 border-t border-slate-200">
            <span className="text-sm text-slate-500">
              Showing {cities.length} of {pagination?.totalItems} Notaries
            </span>

            <div className="flex items-center gap-1.5">
              <button className="px-3 py-1.5 text-sm font-medium rounded-md border border-slate-200 text-slate-600 bg-white hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                Previous
              </button>

              {Array.from(
                { length: pagination?.totalPages ?? 0 },
                (_, i) => i + 1,
              ).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-8 h-8 text-sm font-medium rounded-md border transition-colors ${
                    n === page
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {n}
                </button>
              ))}

              <button className="px-3 py-1.5 text-sm font-medium rounded-md border border-slate-200 text-slate-600 bg-white hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
