import AxiosConfig from "@/service/AxiosConfig";

export const adminCityApi = {
  getAllCityApi: async (params?: {
    name?: string;
    pages?: number;
    limit?: number;
  }) => {
    try {
      const response = await AxiosConfig.get("/cities", { params });
      return response.data;
    } catch (error) {
      throw new Error("Failed Get All Cities");
    }
  },

  getCityById: async (id: number) => {
    try {
      const response = await AxiosConfig.get(`/cities/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed Get Cities By ID");
    }
  },

  addCityApi: async (name: string) => {
    try {
      const response = await AxiosConfig.post("/cities", { name });
      return response.data;
    } catch (error) {
      throw new Error("Failed Create City");
    }
  },

  updateCityApi: async (id: number, name: string) => {
    try {
      const response = await AxiosConfig.patch(`/cities/${id}`, { name });
      return response.data;
    } catch (error) {
      throw new Error("Failed Update City");
    }
  },

  deleteCityApi: async (id: number) => {
    try {
      const response = await AxiosConfig.delete(`/cities/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed Delete City");
    }
  },
};
