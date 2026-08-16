import DetailNewsView from "@/views/landingPage/DetailNewsView";

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;

  return <DetailNewsView id={id} />;
};

export default Page;
