import { create } from "zustand";
import { adminAuthApi } from "@/api/admin/Auth/AdminAuth";

type Admin = {
  id: number;
  username: string;
};

type AdminAuthStore = {
  loading: boolean;
  error: string | null;
  adminData: Admin | null;
  authLogin: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAdminAuthStore = create<AdminAuthStore>((set) => ({
  loading: false,
  error: null,
  adminData: null,
  authLogin: async (username: string, password: string) => {
    try {
      set({ loading: true, error: null });
      const response = await adminAuthApi.adminLogin({ username, password });
      set({
        adminData: response.data.admin,
      });

      localStorage.setItem("token", response.data.token);
    } catch (error) {
      set({ error: "Failed to login", loading: false });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  logout: () => {
    localStorage.removeItem("token");

    set({
      adminData: null,
      error: null,
    });
  },
}));
