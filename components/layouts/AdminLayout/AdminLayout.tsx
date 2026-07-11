import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";

type AppShellProps = {
  children: React.ReactNode;
};

const AdminLayout = (props: AppShellProps) => {
  const { children } = props;

  return (
    <main className="flex min-h-screen">
      <NavBar />
      <div className="w-full h-full ">
        <TopBar />
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
