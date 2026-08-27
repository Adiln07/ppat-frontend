import AxiosConfig from "@/service/AxiosConfig";
import { ArticleData } from "@/types/Article";

export const adminArticleApi = {
  getAllArticles: async (params?: {
    name?: string;
    page?: number;
    limit?: number;
  }) => {
    try {
      const response = await AxiosConfig.get("/article", { params });
      return response.data;
    } catch (error) {
      throw new Error("Failed Get All Articles");
    }
  },

  getArticlesById: async (id: number) => {
    try {
      const response = await AxiosConfig.get(`/article/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed get article by id");
    }
  },

  uploadImageApi: async (formData: FormData) => {
    try {
      const response = await AxiosConfig.post("/upload", formData);
      return response.data; // { status: "success", data: { url: "/uploads/xxx.jpg" } }
    } catch (error) {
      throw new Error("Failed upload image");
    }
  },

  addArticleApi: async (body: ArticleData) => {
    try {
      const response = await AxiosConfig.post("/article", body);
      return response.data;
    } catch (error) {
      throw new Error("Failed create article");
    }
  },

  updateArticleApi: async (id: number, body: ArticleData) => {
    try {
      const response = await AxiosConfig.patch(`/article/${id}`, body);
      return response.data;
    } catch (error) {
      throw new Error("Failed update article");
    }
  },

  deleteArticleApi: async (id: number) => {
    try {
      const response = await AxiosConfig.delete(`/article/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed delete article");
    }
  },
};
