import Navbar from "./Navbar";
import Footer from "./Footer";

type AppShellProps = {
  children: React.ReactNode;
};

const LandingPageLayout = (props: AppShellProps) => {
  const { children } = props;

  return (
    <main className="">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default LandingPageLayout;
