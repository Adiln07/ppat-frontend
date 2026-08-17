import NotaryView from "@/views/admin/notary/NotaryView";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Admin Notaris | IPPAT Parepare dan sekitarnya",
//   description:
//     "Portal resmi Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Parepare - informasi, layanan, dan berita terkini.",
// };

const page = () => {
  return <NotaryView />;
};

export default page;
