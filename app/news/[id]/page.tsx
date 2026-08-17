import DetailNewsView from "@/views/landingPage/DetailNewsView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita | IPPAT Parepare dan sekitarnya",
  description:
    "Portal resmi Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Parepare - informasi, layanan, dan berita terkini.",
};

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;

  return <DetailNewsView id={id} />;
};

export default Page;
