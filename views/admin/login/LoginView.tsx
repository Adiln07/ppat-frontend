"use client";

import { useState } from "react";
import { useAdminAuthStore } from "@/stores/admin/auth/AdminAuthStore";
import { useRouter } from "next/navigation";

const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const errorLogin = useAdminAuthStore((state) => state.error);
  const authLogin = useAdminAuthStore((state) => state.authLogin);

  return (
    <div className="bg-[#F8F9FF] h-screen flex items-center justify-center">
      <div className=" bg-[#61CE69]/80 w-[25em] h-[20em] shadow-xl rounded-xl text-white">
        <h1 className="kanit-font text-2xl font-semibold py-3 text-center">
          Login Admin
        </h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            try {
              await authLogin(username, password);
              router.push("/admin/city");
            } catch (error) {}
          }}
        >
          <div className="px-6 py-5 space-y-4">
            <div>
              <label className="roboto-font block text-xs font-medium text-white mb-1">
                Name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="roboto-font w-full border  rounded-md px-3 py-2 text-sm text-slate-800 bg-white border-none focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
              />
            </div>
          </div>
          <div className="px-6 space-y-4">
            <div>
              <label className="roboto-font block text-xs font-medium text-white mb-1">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="roboto-font w-full border  rounded-md px-3 py-2 text-sm text-slate-800 bg-white border-none focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-6 px-6">
            <button
              type="submit"
              className="bg-white text-[#61CE69] kanit-font w-full py-2 rounded-md cursor-pointer hover:bg-[#F8F9FF] "
            >
              Login
            </button>
          </div>
          {errorLogin && (
            <p className="text-red-500 px-6 text-center py-1 roboto-font font-medium">
              {errorLogin}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginView;
