import LoginView from "@/views/admin/login/LoginView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | IPPAT Parepare dan sekitarnya",
  description:
    "Portal resmi Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Parepare - informasi, layanan, dan berita terkini.",
};

const page = () => {
  return <LoginView />;
};

export default page;
