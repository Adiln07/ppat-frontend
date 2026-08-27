"use client";

import { useAdminArticleStore } from "@/stores/admin/article/AdminArticleStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { faAdd, faLocation, faSearch } from "@fortawesome/free-solid-svg-icons";
import { API_BASE_URL } from "@/service/AxiosConfig";

const ArticleTabel = ({
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
}) => {
  const articles = useAdminArticleStore((state) => state.articles);

  const isAddArticleOpen = useAdminArticleStore(
    (state) => state.isAddArticleOpen,
  );
  const isEditArticleOpen = useAdminArticleStore(
    (state) => state.isEditArticleOpen,
  );
  const isDeleteArticleOpen = useAdminArticleStore(
    (state) => state.isDeleteArticleOpen,
  );

  const pagination = useAdminArticleStore((state) => state.pagination);

  const fetchGetAllArticle = useAdminArticleStore(
    (state) => state.fetchGetAllArticle,
  );

  useEffect(() => {
    fetchGetAllArticle({ name: search, page: page, limit });
  }, [search, page, limit]);

  const setArticleId = useAdminArticleStore((state) => state.setArticleId);

  const openModalEdit = (id: number) => {
    isEditArticleOpen();
    setArticleId(id);
  };

  const openModalDelete = (id: number) => {
    isDeleteArticleOpen();
    setArticleId(id);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="kanit-font font-semibold text-2xl">
          Articles Management
        </h1>
        <div>
          <div></div>
          <div
            className="flex items-center gap-2 bg-[#61CE69] text-white py-1 px-2 rounded-lg cursor-pointer drop-shadow-xl"
            onClick={isAddArticleOpen}
          >
            <FontAwesomeIcon icon={faAdd} />
            <p className="roboto-font font-medium">Add Article</p>
          </div>
        </div>
      </div>
      <div className="w-full py-6 bg-slate-50 min-h-fit ">
        <div className="w-full mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-160 text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500">
                    no
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500">
                    title
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500">
                    theme
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500">
                    event date
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500">
                    image
                  </th>

                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500">
                    Created at
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold kanit-font uppercase tracking-wide text-slate-500 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {articles.map((row, i) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm roboto-font text-slate-500">
                      {i + 1}
                    </td>

                    <td className="px-6 py-4 text-sm roboto-font font-medium text-slate-800">
                      {row.title}
                    </td>
                    <td className="px-6 py-4 text-sm roboto-font font-medium text-slate-800">
                      {row.theme}
                    </td>
                    <td className="px-6 py-4 text-sm roboto-font font-medium text-slate-800">
                      {new Date(row.eventDate).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 text-sm roboto-font font-medium text-slate-800">
                      {row.imageUrl ? (
                        <img
                          src={`${API_BASE_URL}${row.imageUrl}`}
                          alt={row.title}
                          className="h-12 w-12 object-cover rounded-md border border-slate-200"
                        />
                      ) : (
                        <span className="text-slate-400">No image</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm roboto-font text-slate-500">
                      {new Date(row.createdAt).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openModalEdit(row.id)}
                          className="px-3 py-1.5 text-sm roboto-font font-medium rounded-md border border-slate-200 text-slate-600 bg-white hover:bg-slate-100 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => openModalDelete(row.id)}
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
              Showing {articles.length} of {pagination?.totalItems} Articles
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setPage(Math.max(page - 1, 1))}
                disabled={page <= 1}
                className="px-3 py-1.5 text-sm font-medium rounded-md border border-slate-200 text-slate-600 bg-white hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
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

              <button
                onClick={() =>
                  setPage(Math.min(page + 1, pagination?.totalPages ?? 1))
                }
                disabled={page >= (pagination?.totalPages ?? 1)}
                className="px-3 py-1.5 text-sm font-medium rounded-md border border-slate-200 text-slate-600 bg-white hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleTabel;
