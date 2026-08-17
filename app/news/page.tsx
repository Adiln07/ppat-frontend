import NewsView from "@/views/landingPage/NewsView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita | IPPAT Parepare dan sekitarnya",
  description:
    "Portal resmi Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Parepare - informasi, layanan, dan berita terkini.",
};

const page = () => {
  return <NewsView />;
};

export default page;
