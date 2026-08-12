// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { Kanit, Roboto } from "next/font/google";

// const kanit = Kanit({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"], // sesuaikan weight yang kamu butuh
//   variable: "--font-kanit", // ini yang bikin CSS variable-nya
// });

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-roboto",
// });

// type AppShellProps = {
//   children: React.ReactNode;
// };

// const LandingPageLayout = (props: AppShellProps) => {
//   const { children } = props;

//   return (
//     <main
//       className={`${kanit.variable} ${roboto.variable} flex flex-col min-h-screen`}
//     >
//       <Navbar />
//       <div className="flex-1">{children}</div>
//       <Footer />
//     </main>
//   );
// };

// export default LandingPageLayout;

import Navbar from "./Navbar";
import Footer from "./Footer";
import { Kanit, Roboto } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kanit",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

type AppShellProps = {
  children: React.ReactNode;
};

const LandingPageLayout = (props: AppShellProps) => {
  const { children } = props;

  return (
    <main
      className={`${kanit.variable} ${roboto.variable} flex flex-col min-h-screen`}
    >
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default LandingPageLayout;
