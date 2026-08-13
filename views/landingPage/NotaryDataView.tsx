"use client";

import LandingPageLayout from "@/components/layouts/LandingPageLayout/LandingPageLayout";
import { useAdminNotaryStore } from "@/stores/admin/notary/AdminNotaryStore";
import { useEffect, useState } from "react";
import Link from "next/link";

const NotaryDataView = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

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
  const fetchGetAllPublicNotary = useAdminNotaryStore(
    (state) => state.fetchGetAllPublicNotary,
  );

  // useEffect(() => {
  //   fetchGetAllPublicNotary({ name: search, pages: page, limit });
  // }, [search, page, limit]);

  useEffect(() => {
    fetchGetAllPublicNotary({
      name: search,
      pages: page,
      limit,
      kotaId: selectedCityId,
    });
  }, [search, page, limit, selectedCityId]);

  return (
    <LandingPageLayout>
      <div className="px-6 md:px-12 lg:px-24">
        <div className="flex py-10 justify-between items-center">
          <div className="flex flex-col gap-y-3">
            <p className="text-[#8F000D] font-extrabold text-2xl md:text-4xl text-center md:text-left">
              Data Notaris / PPAT
            </p>
            <p className="text-[#5A403E]">
              Direktori resmi Pejabat Pembuat Akta Tanah Kota Parepare dan
              sekitarnya.
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <div>
              <p className="text-[##5A403E] text-sm font-medium">Filter Kota</p>
            </div>
            <div>
              <select
                required
                value={selectedCityId ?? ""}
                onChange={(e) => {
                  setSelectedCityId(
                    e.target.value === "" ? null : Number(e.target.value),
                  );
                  setPage(1);
                }}
                className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
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
        <div className="py-10">
          <div className="overflow-hidden rounded-md md:rounded-lg border border-slate-200 w-full">
            <table className="w-full text-left">
              <thead className="bg-[#F3F4F5]">
                <tr className="text-[#191C1D] font-bold">
                  <th className="px-2 md:px-6 py-1.5 md:py-3 text-[6px] md:text-xs font-semibold uppercase tracking-wide">
                    Nama PPAT
                  </th>
                  <th className="px-2 md:px-6 py-1.5 md:py-3 text-[6px] md:text-xs font-semibold uppercase tracking-wide">
                    Wilayah Kerja
                  </th>
                  <th className="px-2 md:px-6 py-1.5 md:py-3 text-[6px] md:text-xs font-semibold uppercase tracking-wide">
                    SK Pengangkatan
                  </th>
                  <th className="px-2 md:px-6 py-1.5 md:py-3 text-[6px] md:text-xs font-semibold uppercase tracking-wide">
                    Status
                  </th>
                  <th className="px-2 md:px-6 py-1.5 md:py-3 text-[6px] md:text-xs font-semibold uppercase tracking-wide">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {notary.map((row) => (
                  <tr key={row.id}>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-[7px] md:text-sm text-slate-800">
                      {row.name}
                    </td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-[7px] md:text-sm text-slate-800">
                      {row.kota.name}
                    </td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-[7px] md:text-sm text-slate-800">
                      {row.skPpat}
                    </td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-[7px] md:text-sm text-slate-800">
                      <span className="bg-[#8CFB8F] px-1 md:px-2 py-0.5 md:py-1 rounded-sm text-[#007524] text-[5px] md:text-xs">
                        AKTIF
                      </span>
                    </td>
                    <td className="px-2 md:px-6 py-2 md:py-4 text-[7px] md:text-sm text-slate-800">
                      <Link
                        href=""
                        className="border py-2 px-3 rounded-md border-[#8F000D] text-[#5A403E]"
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination footer */}
          <div className="flex items-center kanit-font justify-between px-6 py-3 bg-slate-50 border-t border-slate-200">
            <span className="text-sm text-slate-500">
              Showing {notary.length} of {pagination?.totalItems} Notaries
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
                      ? "bg-[#8F000D] border-[#8F000D] text-white"
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
    </LandingPageLayout>
  );
};

export default NotaryDataView;
