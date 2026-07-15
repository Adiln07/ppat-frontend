import AxiosConfig from "@/service/AxiosConfig";
import { NotaryData } from "@/types/Notary";

export const adminNotaryApi = {
  getAllCityFilter: async () => {
    try {
      const response = await AxiosConfig.get("/cities");
      return response.data;
    } catch (error) {
      throw new Error("Failed Get All City");
    }
  },

  getAllNotaries: async (params?: {
    name?: string;
    pages?: number;
    limit?: number;
  }) => {
    try {
      const response = await AxiosConfig.get("/notaries", { params });
      return response.data;
    } catch (error) {
      throw new Error("Failed Get All Notaries");
    }
  },

  getNotaryById: async (id: number) => {
    try {
      const response = await AxiosConfig.get(`/notaries/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed Get Notary By Id");
    }
  },

  addNotary: async (body: NotaryData) => {
    try {
      const response = await AxiosConfig.post("/notaries", body);
      return response.data;
    } catch (error) {
      throw new Error("Failed Create Notary");
    }
  },

  updateNotary: async (id: number, body: NotaryData) => {
    try {
      const response = await AxiosConfig.patch(`/notaries/${id}`, body);
      return response.data;
    } catch (error) {
      throw new Error("Failed Update Notary");
    }
  },

  deleteNotary: async (id: number) => {
    try {
      const response = await AxiosConfig.delete(`/notaries/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed Delete Notary");
    }
  },
};
