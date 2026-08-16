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
    fetchGetAllPublicArticle({ name: search, pages: page, limit });
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
      <div className="px-6 md:px-12 lg:px-24 py-12">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-y-6">
          <p className="text-[#8F000D] font-extrabold text-2xl md:text-4xl text-center md:text-left border-b-4 pb-2 w-1/3 ">
            Berita & Informasi
          </p>
          <p className="text-sm sm:text-base text-[#5A403E] mt-2 max-w-2xl">
            Stay updated with the latest news, official announcements, and
            procedural updates from IPPAT Parepare. Ensuring transparency and
            legal reliability.
          </p>
        </div>

        {/* grid berita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles?.map((article, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={article.id}
                className={`bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col ${
                  isFirst ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative w-full ${isFirst ? "h-[350px]" : "h-[220px]"}`}
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
                    sizes={
                      isFirst
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />
                </div>

                {/* Content Section */}
                <div
                  className={`flex flex-col grow ${isFirst ? "p-6 md:p-8" : "p-5"}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`${
                        badgeColors[index % badgeColors.length]
                      } px-2.5 py-1 rounded text-xs font-bold tracking-wide uppercase`}
                    >
                      {article.theme}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faCalendar} className="w-3 h-3" />
                      {formatDate(article.createdAt)}
                    </span>
                  </div>

                  <h3
                    className={`font-bold text-gray-900 mb-3 leading-snug line-clamp-2 ${
                      isFirst ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {article.title}
                  </h3>

                  <p
                    className={`text-gray-600 ${
                      isFirst
                        ? "mb-6 text-base line-clamp-3"
                        : "text-sm line-clamp-2"
                    }`}
                  >
                    {article.description}
                  </p>

                  <Link
                    href={`/news/${article.id}`}
                    className="text-[#8F000D] font-bold text-sm hover:text-red-800 transition-colors flex items-center gap-2 mt-auto"
                  >
                    Read More{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-10">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ‹
            </button>

            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
              (n) => (
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
              ),
            )}

            <button
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, pagination.totalPages))
              }
              disabled={page === pagination.totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
