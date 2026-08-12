import AxiosConfig from "@/service/AxiosConfig";

export const PublicNotary = {
  getAllNotaries: async (params?: {
    name?: string;
    pages?: number;
    limit?: number;
    kotaId?: number | null;
  }) => {
    try {
      const response = await AxiosConfig.get("/public/notary", { params });
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

  getAllCityFilter: async () => {
    try {
      const response = await AxiosConfig.get("/cities");
      return response.data;
    } catch (error) {
      throw new Error("Failed Get All City");
    }
  },
};
