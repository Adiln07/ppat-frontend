import AxiosConfig from "@/service/AxiosConfig";

export const PublicCity = {
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
};
