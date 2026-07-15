import { create } from "zustand";
import { adminNotaryApi } from "@/api/admin/Notary/AdminNotary";
import { PopAlert } from "@/types/Alert";
import { NotaryData } from "@/types/Notary";

type Notary = {
  id: number;
  name: string;
  skPpat: string;
  address: string;
  mapUrl: string;
  kotaId: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

type City = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type Params = {
  name: string;
  pages: number;
  limit: number;
};

type Pagination = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

type AdminNotaryStore = {
  notaries: Notary[];
  cities: City[];
  pagination: Pagination | null;
  notaryById: Notary | null;
  notaryId: number;
  loading: boolean;
  error: string | null;
  popAlert: PopAlert;

  total: number;
  totalPages: number;

  isAddNotary: boolean;
  isEditNotary: boolean;
  isDeleteNotary: boolean;

  fetchGetAllCity: () => Promise<void>;
  fetchGetAllNotary: (params: Params) => Promise<void>;
  fetchNotaryById: (id: number) => Promise<void>;
  addNotary: (body: NotaryData) => Promise<void>;
  editNotary: (id: number, body: NotaryData) => Promise<void>;
  deleteNotary: (id: number) => Promise<void>;

  setNotaryId: (id: number) => void;

  isAddNotaryOpen: () => void;
  isAddNotaryClose: () => void;
  isEditNotaryOpen: () => void;
  isEditNotaryClose: () => void;
  isDeleteNotaryOpen: () => void;
  iseDeleteNotaryClose: () => void;
  popAlertVisibled: () => void;
};

export const useAdminNotaryStore = create<AdminNotaryStore>((set) => ({
  notaries: [],
  cities: [],
  pagination: null,
  notaryById: null,
  notaryId: 0,
  loading: false,
  error: null,
  popAlert: {
    isVisible: false,
    status: false,
    message: "",
  },

  total: 0,
  totalPages: 1,

  isAddNotary: false,
  isEditNotary: false,
  isDeleteNotary: false,

  fetchGetAllCity: async () => {
    try {
      set({ loading: false, error: null });
      const response = await adminNotaryApi.getAllCityFilter();
      set({ cities: response.data || [] });
    } catch (error) {
      set({ loading: false, error: "Failed to Fetch All City" });
    } finally {
      set({ loading: false });
    }
  },
  fetchGetAllNotary: async (params: Params) => {
    try {
      set({ loading: true, error: null });
      const response = await adminNotaryApi.getAllNotaries(params);
      set({
        notaries: response.data || [],
        pagination: response.pagination,
      });
    } catch (error) {
      set({ loading: false, error: "Failed to Fetch Notaries" });
    } finally {
      set({ loading: false });
    }
  },

  fetchNotaryById: async (id: number) => {
    try {
      set({ loading: true, error: null });
      const response = await adminNotaryApi.getNotaryById(id);
      set({ notaryById: response.data });
    } catch (error) {
      set({ error: "Failed To Fetch Notary By Id" });
    } finally {
      set({ loading: false });
    }
  },

  addNotary: async (body: NotaryData) => {
    try {
      set({ loading: false, error: null });
      await adminNotaryApi.addNotary(body);
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully Add Notary",
        },
      });
      set({ isAddNotary: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to Add Notary",
        },
      });
      set({ error: "Failed To Add Notary" });

      throw error;
    } finally {
      set({ loading: false });
    }
  },
  editNotary: async (id: number, body: NotaryData) => {
    try {
      set({ loading: true, error: null });
      await adminNotaryApi.updateNotary(id, body);
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully Updated Notary",
        },
      });
      set({ isEditNotary: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to Updated Notary",
        },
      });
      throw error;
    } finally {
      set({ loading: false, error: null });
    }
  },
  deleteNotary: async (id: number) => {
    try {
      set({ loading: true, error: null });
      await adminNotaryApi.deleteNotary(id);
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully Delete Notary",
        },
      });
      set({ isDeleteNotary: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to Delet Notary",
        },
      });
      throw error;
    } finally {
      set({ loading: false, error: null });
    }
  },

  setNotaryId: (id: number) => {
    set({ notaryId: id });
  },

  isAddNotaryOpen: () => {
    set({ isAddNotary: true });
  },
  isAddNotaryClose: () => {
    set({ isAddNotary: false });
  },
  isEditNotaryOpen: () => {
    set({ isEditNotary: true });
  },
  isEditNotaryClose() {
    set({ isEditNotary: false });
  },
  isDeleteNotaryOpen() {
    set({ isDeleteNotary: true });
  },
  iseDeleteNotaryClose() {
    set({ isDeleteNotary: false });
  },
  popAlertVisibled: () => {
    set((state) => ({
      popAlert: {
        ...state.popAlert,
        isVisible: false,
      },
    }));
  },
}));
