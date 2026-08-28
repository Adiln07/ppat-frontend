"use client";

import LandingPageLayout from "@/components/layouts/LandingPageLayout/LandingPageLayout";
import Link from "next/link";
import Image from "next/image";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAdminArticleStore } from "@/stores/admin/article/AdminArticleStore";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/service/AxiosConfig";
import { useAdminNotaryStore } from "@/stores/admin/notary/AdminNotaryStore";

const BerandaView = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const article = useAdminArticleStore((state) => state.publicArticles);
  const notary = useAdminNotaryStore((state) => state.publicNotaries);

  const FetchGetAllPublicArticle = useAdminArticleStore(
    (state) => state.fetchGetAllPublicArticle,
  );

  const FetchGetAllPublicNotary = useAdminNotaryStore(
    (state) => state.fetchGetAllPublicNotary,
  );

  useEffect(() => {
    FetchGetAllPublicNotary({ name: search, page: page, limit });
  }, [search, page, limit]);

  useEffect(() => {
    FetchGetAllPublicArticle({ name: search, page: page, limit });
  }, [search, page, limit]);

  return (
    <LandingPageLayout>
      <div className="">
        <section className="flex items-center gap-x-4 md:gap-x-16 py-6 md:py-12 px-4 md:px-24">
          <div className="w-1/2 py-2 md:py-10">
            <div className="flex flex-col gap-y-2 md:gap-y-6">
              <p className="text-[10px] md:text-2xl font-extrabold text-[#191C1D] leading-tight md:leading-normal">
                Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Pengurus Daerah
                Parepare dan Sekitarnya
              </p>
              <p className="text-[7px] md:text-base text-[#5A403E] leading-tight md:leading-normal">
                Mewujudkan pelayanan pertanahan yang profesional, berintegritas,
                dan terpercaya bagi masyarakat Kota Parepare dan sekitarnya.
              </p>
            </div>
            <div className="flex gap-x-2 md:gap-x-4 mt-3 md:mt-8">
              <Link
                href="/beranda"
                prefetch={false}
                className="bg-[#8F000D] px-2 md:px-4 py-1.5 md:py-3 rounded-sm text-white font-semibold text-[7px] md:text-base hover:bg-[#550209] hover:text-[#FFFF]"
              >
                Jelajahi Profil
              </Link>
              <Link
                href="/news"
                prefetch={false}
                className="border md:border-2 border-[#8F000D] px-2 md:px-4 py-1.5 md:py-3 rounded-sm font-semibold text-[#8F000D] text-[7px] md:text-base hover:bg-[#fff2f2]"
              >
                Berita Terkini
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/assets/beranda1.jpeg"
              alt=""
              width={900}
              height={900}
              className="rounded-md md:rounded-lg w-full h-auto object-cover"
            />
          </div>
        </section>

        <section className="bg-[#eff1f3] flex items-center gap-x-4 md:gap-x-16 py-6 md:py-12 px-4 md:px-24">
          <div className="w-1/2">
            <Image
              src="/assets/beranda2.jpeg"
              alt=""
              width={1300}
              height={1000}
              className="rounded-md md:rounded-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-1/2 py-2 md:py-10">
            <div className="flex flex-col gap-y-2 md:gap-y-6">
              <p className="text-[10px] md:text-2xl font-extrabold text-[#191C1D]">
                Tentang IPPAT Parepare dan Sekitarnya
              </p>
              <p className="text-[7px] md:text-base text-[#5A403E] leading-tight md:leading-normal">
                Pengurus Daerah IPPAT Parepare dan Sekitarnya adalah wadah
                berhimpun para Pejabat Pembuat Akta Tanah (PPAT) di wilayah
                kerja Kota Parepare dan sekitarnya. Kami berkomitmen untuk terus
                meningkatkan kualitas pelayanan, menjaga kode etik profesi,
                serta bersinergi dengan pemerintah dan masyarakat dalam urusan
                pertanahan.
              </p>
            </div>
            <div className="mt-2 md:mt-5 flex">
              <Link
                href="/aboutus"
                prefetch={false}
                className="flex items-center gap-x-1 md:gap-x-2"
              >
                <p className="text-[#8F000D] font-semibold text-[7px] md:text-base">
                  Lihat Selengkapnya
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[#8F000D] text-[7px] md:text-base"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-x-4 md:gap-x-16 py-6 md:py-12 px-4 md:px-24">
          <div className="flex justify-center py-2 md:py-5">
            <p className="text-[12px] md:text-2xl font-extrabold text-[#191C1D]">
              Berita Terbaru
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-4xl mx-auto w-full">
            {article.slice(0, 3).map((row) => (
              <Link
                href={`/news/${row.id}`}
                key={row.id}
                prefetch={false}
                className="w-full h-full flex flex-col rounded-md md:rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={`${API_BASE_URL}${row.imageUrl}`}
                    alt="Sosialisasi Peraturan Baru Pertanahan 2024"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>

                <div className="p-2 md:p-4 flex flex-col flex-1">
                  <p className="text-[6px] md:text-xs font-semibold text-[#006E21] mt-0.5 md:mt-1 mb-0.5 md:mb-2 line-clamp-2 uppercase">
                    {row.theme}
                  </p>
                  <p className="font-semibold text-slate-800 text-[8px] md:text-base leading-tight md:leading-normal line-clamp-2">
                    {row.title}
                  </p>
                  <p className="text-[6px] md:text-sm text-slate-500 mt-0.5 md:mt-1 line-clamp-2 md:line-clamp-3 leading-tight md:leading-normal">
                    {row.description}
                  </p>

                  <div className="flex justify-end mt-auto pt-1 md:pt-3">
                    <span className="text-[#8F000D] text-[6px] md:text-sm font-semibold">
                      Selengkapnya
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-4 md:mt-10 mb-2 md:mb-6">
            <Link
              href="/news"
              prefetch={false}
              className="bg-[#8F000D] px-2 md:px-4 py-1.5 md:py-3 rounded-sm text-white font-semibold text-[7px] md:text-base hover:bg-[#550209] hover:text-[#FFFF]"
            >
              Lihat Semua Berita
            </Link>
          </div>
        </section>

        <section className="bg-[#eff1f3] flex flex-col gap-x-4 md:gap-x-16 py-8 md:py-18 px-4 md:px-24">
          <div className="text-center flex flex-col">
            <p className="font-bold text-[12px] md:text-2xl pb-1">
              Direktori Anggota IPPAT
            </p>
            <p className="text-[#5A403E] mb-3 md:mb-5 text-[7px] md:text-base">
              Daftar resmi Pejabat Pembuat Akta Tanah di wilayah kerja Kota
              Parepare dan sekitarnya.
            </p>
          </div>
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
                </tr>
              </thead>
              <tbody className="bg-white">
                {notary.slice(0, 3).map((row) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center pt-4 md:pt-5">
            <Link
              href="/notarydata"
              prefetch={false}
              className="bg-[#8F000D] hover:bg-[#550209] hover:text-[#FFFF] px-2 md:px-4 py-1.5 md:py-3 rounded-sm text-white font-semibold text-[7px] md:text-base"
            >
              Lihat Seluruh Data Notaris
            </Link>
          </div>
        </section>
      </div>
    </LandingPageLayout>
  );
};

export default BerandaView;
