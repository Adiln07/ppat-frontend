import AxiosConfig from "@/service/AxiosConfig";

export const adminArticleApi = {
  getAllArticles: async (params?: {
    name?: string;
    pages?: number;
    limit?: number;
  }) => {
    try {
      const response = await AxiosConfig.get("/article", { params });
      return response.data;
    } catch (error) {
      throw new Error("Failed Get All Articles");
    }
  },
};
