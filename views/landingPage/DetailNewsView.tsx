"use client";

import { useAdminArticleStore } from "@/stores/admin/article/AdminArticleStore";
import { useEffect, useState } from "react";
import LandingPageLayout from "@/components/layouts/LandingPageLayout/LandingPageLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { API_BASE_URL } from "@/service/AxiosConfig";

const badgeColors = [
  "bg-red-100 text-[#8F000D]",
  "bg-green-100 text-[#006E21]",
  "bg-slate-200 text-slate-700",
  "bg-amber-100 text-amber-700",
];

const DetailNewsView = ({ id }: { id: number }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 3;

  const articles = useAdminArticleStore((state) => state.publicArticles);
  const pagination = useAdminArticleStore((state) => state.pagination);
  const fetchGetAllPublicArticle = useAdminArticleStore(
    (state) => state.fetchGetAllPublicArticle,
  );

  useEffect(() => {
    fetchGetAllPublicArticle({ name: search, pages: page, limit });
  }, [search, page, limit]);

  const fetchGetPublicArticleById = useAdminArticleStore(
    (state) => state.fetchGetPublicArticleById,
  );

  useEffect(() => {
    fetchGetPublicArticleById(id);
  }, []);

  const publicArticleById = useAdminArticleStore(
    (state) => state.publicArticleById,
  );

  const formatDate = (date: string | undefined) => {
    if (date !== undefined) {
      return new Date(date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } else {
      return date;
    }
  };

  return (
    <LandingPageLayout>
      <div className="px-6 md:px-12 lg:px-24 py-10">
        {/* top */}
        <div className="flex items-center gap-x-1">
          <p className="text-sm text-[#5A403E]">Home</p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-sm text-[#5A403E]"
          />
          <p className="text-sm text-[#5A403E]">News</p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-sm text-[#5A403E]"
          />
          <p className="text-sm text-[#503635] font-semibold">
            {publicArticleById?.title}
          </p>
        </div>
        <div className="flex gap-x-10">
          {/* main left */}
          <div className="py-10">
            {/* tgl dan jenis */}
            <div className="flex gap-x-5 items-center">
              <p
                className={`${badgeColors[Math.floor(Math.random() * badgeColors.length)]} font-medium px-2 py-0.5`}
              >
                {publicArticleById?.theme}
              </p>
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon icon={faCalendar} className="text-[#5A403E]" />
                <p className="text-[#5A403E] font-medium">
                  {formatDate(publicArticleById?.eventDate)}
                </p>
              </div>
            </div>

            {/* isi berita */}
            <div className="py-5 flex flex-col gap-y-10">
              <p className="text-3xl font-extrabold text-[#191C1D]">
                {publicArticleById?.title}
              </p>
              <div className="w-full">
                <Image
                  src={
                    publicArticleById?.imageUrl
                      ? `${API_BASE_URL}${publicArticleById?.imageUrl}`
                      : "/assets/placeholder.jpg"
                  }
                  alt="gambar berita"
                  unoptimized
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-md"
                />
              </div>

              <p className="text-[#191C1D] text-justify">
                {publicArticleById?.description}
              </p>
            </div>
          </div>

          {/* main right */}

          <div>
            <div>
              <p>Berita Terkait</p>
            </div>
            {articles.slice(0, 3).map((row, index) => (
              <div className=" gap-y-4" key={row.id}>
                <div>
                  <Image
                    src={
                      articles[index]?.imageUrl
                        ? `${API_BASE_URL}${articles[index]?.imageUrl}`
                        : "/assets/placeholder.jpg"
                    }
                    alt="gambar berita"
                    unoptimized
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <p>{articles[index]?.theme}</p>
                  <p>{articles[index]?.title}</p>
                  <p>{formatDate(articles[index]?.eventDate)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LandingPageLayout>
  );
};

export default DetailNewsView;
