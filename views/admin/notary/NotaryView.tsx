"use client";

import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";
import { useState, useEffect } from "react";
import PopAlert from "@/components/alert/Alert";
import { useAdminNotaryStore } from "@/stores/admin/notary/AdminNotaryStore";
import NotaryTabel from "@/components/admin/Notary/NotaryTabel";
import ModalAddNotary from "@/components/admin/Notary/ModalAddNotary";
import ModalEditCity from "@/components/admin/city/ModalEditCity";
import ModalEditNotary from "@/components/admin/Notary/ModalEditNotary";
import ModalDeleteCity from "@/components/admin/city/ModalDeleteCity";
import ModalDeleteNotary from "@/components/admin/Notary/ModalDeleteNotary";

const NotaryView = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const isAddNotary = useAdminNotaryStore((state) => state.isAddNotary);
  const isEditNotary = useAdminNotaryStore((state) => state.isEditNotary);
  const isDeleteNotary = useAdminNotaryStore((state) => state.isDeleteNotary);
  const popAlert = useAdminNotaryStore((state) => state.popAlert);
  const popAlertVisibled = useAdminNotaryStore(
    (state) => state.popAlertVisibled,
  );
  useEffect(() => {
    if (!popAlert.isVisible) return;
    const timer = setTimeout(() => {
      popAlertVisibled();
    }, 3500);
    return () => clearTimeout(timer);
  }, [popAlert.isVisible]);

  return (
    <AdminLayout>
      <PopAlert />
      <div className="bg-[#F8F9FF] h-[92vh]">
        <div className=" w-full p-8">
          <NotaryTabel
            search={search}
            setSearch={setSearch}
            page={page}
            setPage={setPage}
            limit={limit}
          />
        </div>
      </div>

      {isAddNotary && (
        <ModalAddNotary search={search} page={page} limit={limit} />
      )}
      {isEditNotary && (
        <ModalEditNotary search={search} page={page} limit={limit} />
      )}

      {isDeleteNotary && (
        <ModalDeleteNotary search={search} page={page} limit={limit} />
      )}
    </AdminLayout>
  );
};

export default NotaryView;
