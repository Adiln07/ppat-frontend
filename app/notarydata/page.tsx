import NotaryDataView from "@/views/landingPage/NotaryDataView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Notaris | IPPAT Parepare dan sekitarnya",
  description:
    "Portal resmi Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Parepare - informasi, layanan, dan berita terkini.",
};

const page = () => {
  return <NotaryDataView />;
};

export default page;
