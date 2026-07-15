"use client";

import AdminLayout from "../../../components/layouts/AdminLayout/AdminLayout";

import CityTabel from "@/components/admin/city/CityTabel";
import ModalAddCity from "@/components/admin/city/ModalAddCity";
import { useAdminCityStore } from "@/stores/admin/city/AdminCityStore";
import { useEffect, useState } from "react";
import PopAlert from "@/components/alert/Alert";
import ModalEditCity from "@/components/admin/city/ModalEditCity";
import ModalDeleteCity from "@/components/admin/city/ModalDeleteCity";

const CityView = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const isAddCity = useAdminCityStore((state) => state.isAddCity);
  const isEditCity = useAdminCityStore((state) => state.isEditCity);
  const isDeleteCity = useAdminCityStore((state) => state.isDeleteCity);

  const popAlert = useAdminCityStore((state) => state.popAlert);
  const popAlertVisibled = useAdminCityStore((state) => state.popAlertVisibled);

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
        <div className="w-full p-8">
          <CityTabel
            search={search}
            setSearch={setSearch}
            page={page}
            setPage={setPage}
            limit={limit}
          />
        </div>
      </div>

      {isAddCity && <ModalAddCity search={search} page={page} limit={limit} />}
      {isEditCity && (
        <ModalEditCity search={search} page={page} limit={limit} />
      )}
      {isDeleteCity && (
        <ModalDeleteCity search={search} page={page} limit={limit} />
      )}
    </AdminLayout>
  );
};

export default CityView;
