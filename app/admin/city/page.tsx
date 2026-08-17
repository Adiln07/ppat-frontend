import CityView from "@/views/admin/city/CityView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Kota | IPPAT Parepare dan sekitarnya",
  description:
    "Portal resmi Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Parepare - informasi, layanan, dan berita terkini.",
};

const CityPage = () => {
  return <CityView />;
};

export default CityPage;
