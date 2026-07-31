"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AdminGuardProps = {
  children: ReactNode;
};

const AdminGuard = ({ children }: AdminGuardProps) => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/admin/login");
    }

    setIsAuth(true);
  }, [router]);

  if (!isAuth) {
    return null;
  }

  return <>{children}</>;
};

export default AdminGuard;
