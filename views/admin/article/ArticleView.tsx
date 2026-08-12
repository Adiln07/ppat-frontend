"use client";

import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";
import PopAlert from "@/components/alert/Alert";
import ArticleTabel from "@/components/admin/article/ArticleTabel";
import { useState } from "react";
import { useAdminArticleStore } from "@/stores/admin/article/AdminArticleStore";
import ModalAddArticle from "@/components/admin/article/ModalAddArticle";
import ModalEditArticle from "@/components/admin/article/ModalEditArticle";
import ModalDeleteArticle from "@/components/admin/article/ModalDeleteArticle";

const ArticleView = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const isAddArticle = useAdminArticleStore((state) => state.isAddArticle);
  const isEditArticle = useAdminArticleStore((state) => state.isEditArticle);
  const isDeleteArticle = useAdminArticleStore(
    (state) => state.isDeleteArticle,
  );
  const popAlert = useAdminArticleStore((state) => state.popAlert);
  const popAlertVisibled = useAdminArticleStore(
    (state) => state.popAlertVisibled,
  );

  return (
    <AdminLayout>
      <PopAlert />
      <div className="bg-[#F8F9FF] h-[92vh]">
        <div className="w-full p-8">
          <ArticleTabel
            search={search}
            setSearch={setSearch}
            page={page}
            setPage={setPage}
            limit={limit}
          />
        </div>
      </div>

      {isAddArticle && (
        <ModalAddArticle search={search} page={page} limit={limit} />
      )}
      {isEditArticle && (
        <ModalEditArticle search={search} page={page} limit={limit} />
      )}

      {isDeleteArticle && (
        <ModalDeleteArticle search={search} page={page} limit={limit} />
      )}
    </AdminLayout>
  );
};

export default ArticleView;
