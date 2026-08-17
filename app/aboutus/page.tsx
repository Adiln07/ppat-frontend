import AboutUs from "@/views/landingPage/AboutUsView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang kami | IPPAT Parepare dan sekitarnya",
  description:
    "Portal resmi Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Parepare - informasi, layanan, dan berita terkini.",
};

const page = () => {
  return <AboutUs />;
};

export default page;
