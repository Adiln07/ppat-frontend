import { create } from "zustand";
import { adminCityApi } from "@/api/admin/City/AdminCity";
import { PopAlert } from "@/types/Alert";

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

type AdminCityStore = {
  cities: City[];
  pagination: Pagination | null;
  cityById: City | null;
  cityId: number;
  loading: boolean;
  error: string | null;
  popAlert: PopAlert;

  total: number;
  totalPages: number;

  isAddCity: boolean;
  isEditCity: boolean;
  isDeleteCity: boolean;

  setCityId: (id: number) => void;

  fetchGetAllCity: (params: Params) => Promise<void>;
  fetchGetCityId: (id: number) => Promise<void>;
  addCity: (name: string) => Promise<void>;
  editCity: (id: number, name: string) => Promise<void>;
  deleteCity: (id: number) => Promise<void>;

  isAddCityOpen: () => void;
  isAddCityClose: () => void;
  isEditCityOpen: () => void;
  isEditCityClose: () => void;
  isDeleteCityOpen: () => void;
  isDeleteCityClose: () => void;
  popAlertVisibled: () => void;
};

export const useAdminCityStore = create<AdminCityStore>((set) => ({
  cities: [],
  pagination: null,
  cityById: null,
  cityId: 0,
  loading: false,
  error: null,
  popAlert: {
    isVisible: false,
    status: false,
    message: "",
  },

  total: 0,
  totalPages: 1,

  isAddCity: false,
  isEditCity: false,
  isDeleteCity: false,

  setCityId: (id: number) => set({ cityId: id }),

  fetchGetAllCity: async (params: Params) => {
    try {
      set({ loading: true, error: null });
      const response = await adminCityApi.getAllCityApi(params);
      set({
        cities: response.data || [],
        pagination: response.pagination,
      });
    } catch (error) {
      set({ error: "Failed to Fetch City", loading: false });
    } finally {
      set({ loading: false });
    }
  },
  fetchGetCityId: async (id: number) => {
    try {
      set({ loading: true, error: null });
      const response = await adminCityApi.getCityById(id);
      set({ cityById: response.data });
    } catch (error) {
      set({ error: "Failed to Fecth By Id", loading: false });
    } finally {
      set({ loading: false });
    }
  },
  addCity: async (name: string) => {
    try {
      set({
        loading: true,
        error: null,
      });
      await adminCityApi.addCityApi(name);
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully added City",
        },
      });
      set({ isAddCity: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to add city",
        },
      });
      throw error;
    } finally {
      set({ loading: false });
    }
  },
  editCity: async (id: number, name: string) => {
    try {
      set({ loading: true, error: null });
      await adminCityApi.updateCityApi(id, name);
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully Updated City",
        },
      });
      set({ isEditCity: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to Updated city",
        },
      });

      throw error;
    } finally {
      set({ isEditCity: false });
    }
  },
  deleteCity: async (id: number) => {
    try {
      set({ loading: true, error: null });
      await adminCityApi.deleteCityApi(id);
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully Deleted City",
        },
      });
      set({ isDeleteCity: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to Deleted city",
        },
      });

      throw error;
    } finally {
      set({ loading: false, error: null });
    }
  },

  isAddCityOpen: () => {
    set({ isAddCity: true });
  },
  isAddCityClose: () => {
    set({ isAddCity: false });
  },
  isEditCityOpen: () => {
    set({ isEditCity: true });
  },

  isEditCityClose: () => {
    set({ isEditCity: false });
  },
  isDeleteCityOpen: () => {
    set({ isDeleteCity: true });
  },
  isDeleteCityClose: () => {
    set({ isDeleteCity: false });
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
