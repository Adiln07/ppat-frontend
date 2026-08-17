"use client";

import LandingPageLayout from "@/components/layouts/LandingPageLayout/LandingPageLayout";
import { useAdminNotaryStore } from "@/stores/admin/notary/AdminNotaryStore";
import { useEffect, useState } from "react";
import Link from "next/link";
import ModalAddNotary from "@/components/admin/Notary/ModalAddNotary";
import ModalDetailsNotary from "@/components/landingPage/ModalDetailsNotary";

const NotaryDataView = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const fetchGetAllPublicNotary = useAdminNotaryStore(
    (state) => state.fetchGetAllPublicNotary,
  );

  const setPublicNotaryId = useAdminNotaryStore(
    (state) => state.setPublicNotaryId,
  );

  // action untuk membuka modal (function, bukan state boolean)
  const isDetailNotaryOpen = useAdminNotaryStore(
    (state) => state.isDetailNotaryOpen,
  );

  const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const fetchGetAllPublicCity = useAdminNotaryStore(
    (state) => state.fetchGetAllPublicCity,
  );
  const cities = useAdminNotaryStore((state) => state.publicCities);

  useEffect(() => {
    fetchGetAllPublicCity();
  }, []);

  // pagination
  const pagination = useAdminNotaryStore((state) => state.pagination);

  const notary = useAdminNotaryStore((state) => state.publicNotaries);

  useEffect(() => {
    fetchGetAllPublicNotary({
      name: search,
      pages: page,
      limit,
      kotaId: selectedCityId,
    });
  }, [search, page, limit, selectedCityId]);

  const openModalDetail = (id: number) => {
    isDetailNotaryOpen();
    setPublicNotaryId(id);
  };

  return (
    <LandingPageLayout>
      <div className="px-3 sm:px-6 md:px-12 lg:px-24">
        {/* Header & Filter */}
        <div className="flex flex-row py-6 md:py-10 justify-between items-center gap-2 md:gap-4">
          <div className="flex flex-col gap-y-1 md:gap-y-3 w-2/3 md:w-auto">
            <p className="text-[#8F000D] font-extrabold text-sm sm:text-2xl md:text-4xl text-left">
              Data Notaris / PPAT
            </p>
            <p className="text-[#5A403E] text-[8px] sm:text-sm md:text-base leading-snug">
              Direktori resmi Pejabat Pembuat Akta Tanah Kota Parepare dan
              sekitarnya.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-end md:items-center gap-1 md:gap-x-3 shrink-0 w-1/3 md:w-auto">
            <div>
              <p className="text-[#5A403E] text-[8px] sm:text-xs md:text-sm font-medium">
                Filter Kota
              </p>
            </div>
            <div className="w-full md:w-auto">
              <select
                required
                value={selectedCityId ?? ""}
                onChange={(e) => {
                  setSelectedCityId(
                    e.target.value === "" ? null : Number(e.target.value),
                  );
                  setPage(1);
                }}
                className="roboto-font w-full border border-slate-200 rounded md:rounded-md px-1 py-1 md:px-3 md:py-2 text-[8px] sm:text-xs md:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
              >
                <option value={0}>Pilih kota</option>
                {cities.map((city, i) => (
                  <option key={i} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="py-4 md:py-10">
          <div className="overflow-hidden rounded-md md:rounded-lg border border-slate-200 w-full">
            <table className="w-full text-left table-fixed md:table-auto">
              <thead className="bg-[#F3F4F5]">
                <tr className="text-[#191C1D] font-bold">
                  <th className="px-1 sm:px-3 md:px-6 py-1.5 md:py-3 text-[6px] sm:text-[8px] md:text-xs font-semibold uppercase tracking-wide truncate">
                    Nama PPAT
                  </th>
                  <th className="px-1 sm:px-3 md:px-6 py-1.5 md:py-3 text-[6px] sm:text-[8px] md:text-xs font-semibold uppercase tracking-wide truncate w-[20%] md:w-auto">
                    Wilayah Kerja
                  </th>
                  <th className="px-1 sm:px-3 md:px-6 py-1.5 md:py-3 text-[6px] sm:text-[8px] md:text-xs font-semibold uppercase tracking-wide truncate w-[25%] md:w-auto">
                    SK Pengangkatan
                  </th>
                  <th className="px-1 sm:px-3 md:px-6 py-1.5 md:py-3 text-[6px] sm:text-[8px] md:text-xs font-semibold uppercase tracking-wide truncate w-[15%] md:w-auto">
                    Status
                  </th>
                  <th className="px-1 sm:px-3 md:px-6 py-1.5 md:py-3 text-[6px] sm:text-[8px] md:text-xs font-semibold uppercase tracking-wide text-center md:text-left w-[15%] md:w-auto">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {notary.map((row) => (
                  <tr key={row.id} className="border-t border-slate-100">
                    <td className="px-1 sm:px-3 md:px-6 py-1.5 md:py-4 text-[7px] sm:text-[10px] md:text-sm text-slate-800 truncate">
                      {row.name}
                    </td>
                    <td className="px-1 sm:px-3 md:px-6 py-1.5 md:py-4 text-[7px] sm:text-[10px] md:text-sm text-slate-800 truncate">
                      {row.kota.name}
                    </td>
                    <td className="px-1 sm:px-3 md:px-6 py-1.5 md:py-4 text-[7px] sm:text-[10px] md:text-sm text-slate-800 truncate">
                      {row.skPpat}
                    </td>
                    <td className="px-1 sm:px-3 md:px-6 py-1.5 md:py-4 text-[7px] sm:text-[10px] md:text-sm text-slate-800">
                      <span className="bg-[#8CFB8F] px-1 md:px-2 py-0.5 md:py-1 rounded-sm text-[#007524] text-[5px] sm:text-[8px] md:text-xs">
                        AKTIF
                      </span>
                    </td>
                    <td className="px-1 sm:px-3 md:px-6 py-1.5 md:py-4 text-[7px] sm:text-[10px] md:text-sm text-slate-800 text-center md:text-left">
                      <button
                        onClick={() => openModalDetail(row.id)}
                        className="border py-1 px-1.5 md:py-2 md:px-3 rounded md:rounded-md border-[#8F000D] text-[#5A403E] text-[6px] sm:text-[9px] md:text-sm hover:bg-[#8F000D] hover:text-[#FFFF] transition-colors"
                      >
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination footer */}
          <div className="flex flex-wrap items-center kanit-font justify-center sm:justify-between px-2 md:px-6 py-2 md:py-3 gap-2 md:gap-3 bg-slate-50 border-t border-slate-200 mt-[-1px] rounded-b-md md:rounded-b-lg border-x">
            <span className="text-[8px] sm:text-xs md:text-sm text-slate-500 w-full sm:w-auto text-center sm:text-left">
              Showing {notary.length} of {pagination?.totalItems} Notaries
            </span>

            <div className="flex items-center gap-1 md:gap-1.5">
              <button className="px-1.5 py-1 md:px-3 md:py-1.5 text-[8px] sm:text-xs md:text-sm font-medium rounded md:rounded-md border border-slate-200 text-slate-600 bg-white hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                Prev
              </button>

              {Array.from(
                { length: pagination?.totalPages ?? 0 },
                (_, i) => i + 1,
              ).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[8px] sm:text-xs md:text-sm font-medium rounded md:rounded-md border transition-colors flex items-center justify-center ${
                    n === page
                      ? "bg-[#8F000D] border-[#8F000D] text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {n}
                </button>
              ))}

              <button className="px-1.5 py-1 md:px-3 md:py-1.5 text-[8px] sm:text-xs md:text-sm font-medium rounded md:rounded-md border border-slate-200 text-slate-600 bg-white hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <ModalDetailsNotary />
    </LandingPageLayout>
  );
};

export default NotaryDataView;
