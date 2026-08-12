import AxiosConfig from "@/service/AxiosConfig";

export const PublicArticle = {
  getAllArticles: async (params?: {
    name?: string;
    pages?: number;
    limit?: number;
  }) => {
    try {
      const response = await AxiosConfig.get("/public/article", { params });
      return response.data;
    } catch (error) {
      throw new Error("Failed Get All Articles");
    }
  },

  getArticlesById: async (id: number) => {
    try {
      const response = await AxiosConfig.get(`/public/article/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed get article by id");
    }
  },
};
