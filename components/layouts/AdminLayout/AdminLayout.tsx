import AdminGuard from "@/components/AdminGuard";
import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";

type AppShellProps = {
  children: React.ReactNode;
};

const AdminLayout = (props: AppShellProps) => {
  const { children } = props;

  return (
    <AdminGuard>
      <main className="flex min-h-screen">
        <NavBar />
        <div className="w-full h-full ">
          <TopBar />
          {children}
        </div>
      </main>
    </AdminGuard>
  );
};

export default AdminLayout;
