"use client";

import LandingPageLayout from "@/components/layouts/LandingPageLayout/LandingPageLayout";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useAdminArticleStore } from "@/stores/admin/article/AdminArticleStore";
import { API_BASE_URL } from "@/service/AxiosConfig";

const badgeColors = [
  "bg-[#8F000D] text-white",
  "bg-[#006E21] text-white",
  "bg-slate-700 text-white",
  "bg-amber-600 text-white",
];

const NewsView = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 5;

  const articles = useAdminArticleStore((state) => state.publicArticles);
  const pagination = useAdminArticleStore((state) => state.pagination);
  const fetchGetAllPublicArticle = useAdminArticleStore(
    (state) => state.fetchGetAllPublicArticle,
  );

  useEffect(() => {
    fetchGetAllPublicArticle({ name: search, page: page, limit });
  }, [search, page, limit]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <LandingPageLayout>
      <div className="px-3 sm:px-6 md:px-12 lg:px-24 py-6 md:py-12">
        {/* Header */}
        <div className="mb-6 md:mb-10 flex flex-col gap-y-3 md:gap-y-6">
          <p className="text-[#8F000D] font-extrabold text-lg sm:text-2xl md:text-4xl text-left border-b-2 md:border-b-4 pb-2 w-2/3 md:w-1/3">
            Berita & Informasi
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#5A403E] mt-1 md:mt-2 max-w-2xl">
            Tetap mendapatkan informasi terbaru mengenai berita, pengumuman
            resmi, dan pembaruan prosedur dari IPPAT Parepare dan sekitarnya.
            Memastikan transparansi dan keandalan informasi hukum.
          </p>
        </div>

        {/* grid berita */}
        {/* Ubah grid-cols-1 md:grid-cols-3 menjadi grid-cols-3 agar bentuknya tetap sama di mobile */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {articles?.map((article, index) => {
            const isFirst = index === 0;

            return (
              <Link
                href={`/news/${article.id}`}
                key={article.id}
                className={`bg-white border border-gray-100 rounded-lg md:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col ${
                  isFirst ? "col-span-2" : "col-span-1"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative w-full ${
                    isFirst
                      ? "h-[140px] sm:h-[220px] md:h-[350px]"
                      : "h-[90px] sm:h-[140px] md:h-[220px]"
                  }`}
                >
                  <Image
                    src={
                      article.imageUrl
                        ? `${API_BASE_URL}${article.imageUrl}`
                        : "/assets/placeholder.jpg"
                    }
                    alt={article.title}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes={isFirst ? "66vw" : "33vw"}
                  />
                </div>

                {/* Content Section */}
                <div
                  className={`flex flex-col grow ${
                    isFirst ? "p-3 sm:p-5 md:p-8" : "p-2 sm:p-4 md:p-5"
                  }`}
                >
                  <div className="flex items-center gap-1 md:gap-3 mb-1.5 md:mb-3 flex-wrap">
                    <span
                      className={`${
                        badgeColors[index % badgeColors.length]
                      } px-1.5 py-0.5 md:px-2.5 md:py-1 rounded text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wide uppercase`}
                    >
                      {article.theme}
                    </span>
                    <span className="text-gray-500 text-[8px] sm:text-[10px] md:text-xs flex items-center gap-1 md:gap-1.5 mt-1 sm:mt-0">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="w-2 h-2 md:w-3 md:h-3"
                      />
                      {formatDate(article.createdAt)}
                    </span>
                  </div>

                  <h3
                    className={`font-bold text-gray-900 mb-1 md:mb-3 leading-snug line-clamp-2 ${
                      isFirst
                        ? "text-sm sm:text-xl md:text-3xl"
                        : "text-[10px] sm:text-sm md:text-lg"
                    }`}
                  >
                    {article.title}
                  </h3>

                  <p
                    className={`text-gray-600 ${
                      isFirst
                        ? "mb-2 md:mb-6 text-[10px] sm:text-sm md:text-base line-clamp-2 md:line-clamp-3"
                        : "text-[8px] sm:text-xs md:text-sm line-clamp-2"
                    }`}
                  >
                    {article.description}
                  </p>

                  <span className="text-[#8F000D] font-bold text-[8px] sm:text-[10px] md:text-sm hover:text-red-800 transition-colors flex items-center gap-1 md:gap-2 mt-auto">
                    Read More{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="w-2 h-2 md:w-3 md:h-3"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-6 md:mt-10">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs md:text-sm"
            >
              ‹
            </button>

            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
              (n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-6 h-6 md:w-8 md:h-8 text-xs md:text-sm font-medium rounded-md border transition-colors ${
                    n === page
                      ? "bg-[#8F000D] border-[#8F000D] text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {n}
                </button>
              ),
            )}

            <button
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, pagination.totalPages))
              }
              disabled={page === pagination.totalPages}
              className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-xs md:text-sm"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </LandingPageLayout>
  );
};

export default NewsView;
