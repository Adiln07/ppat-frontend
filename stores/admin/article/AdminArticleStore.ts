import { create } from "zustand";
import { PopAlert } from "@/types/Alert";
import { adminArticleApi } from "@/api/admin/article/AdminArticle";
import { PublicArticle } from "@/api/public/PublicArticle";
import { truncateSync } from "fs";
import { ArticleData } from "@/types/Article";

type Article = {
  id: number;
  title: string;
  theme: string;
  eventDate: string;
  imageUrl: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type Params = {
  name: string;
  page: number;
  limit: number;
};

type Pagination = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};

type AdminArticleStore = {
  articles: Article[];
  publicArticles: Article[];
  pagination: Pagination | null;
  articleById: Article | null;
  publicArticleById: Article | null;
  articleId: number;
  loading: boolean;
  error: string | null;
  popAlert: PopAlert;

  total: number;
  totalPages: number;

  isAddArticle: boolean;
  isEditArticle: boolean;
  isDeleteArticle: boolean;

  fetchGetAllArticle: (params: Params) => Promise<void>;
  fetchGetAllPublicArticle: (params: Params) => Promise<void>;
  fetchGetArticleById: (id: number) => Promise<void>;
  fetchGetPublicArticleById: (id: number) => Promise<void>;
  addArticle: (body: ArticleData) => Promise<void>;
  uploadImage: (file: File) => Promise<string>;
  editArticle: (id: number, body: ArticleData) => Promise<void>;
  deleteArticle: (id: number) => Promise<void>;

  setArticleId: (id: number) => void;

  isAddArticleOpen: () => void;
  isAddArticleClose: () => void;
  isEditArticleOpen: () => void;
  isEditArticleClose: () => void;
  isDeleteArticleOpen: () => void;
  iseDeleteArticleClose: () => void;
  popAlertVisibled: () => void;
};

export const useAdminArticleStore = create<AdminArticleStore>((set) => ({
  articles: [],
  publicArticles: [],
  pagination: null,
  articleById: null,
  publicArticleById: null,
  articleId: 0,
  loading: false,
  error: null,
  popAlert: {
    isVisible: false,
    status: false,
    message: "",
  },

  total: 0,
  totalPages: 1,

  isAddArticle: false,
  isEditArticle: false,
  isDeleteArticle: false,

  fetchGetAllArticle: async (params: Params) => {
    try {
      set({ loading: false, error: null });
      const response = await adminArticleApi.getAllArticles(params);
      set({
        articles: response.data || [],
        pagination: response.pagination,
      });
    } catch {
      set({ loading: false, error: "Failed to fetch all article" });
    } finally {
      set({ loading: false });
    }
  },

  fetchGetAllPublicArticle: async (params: Params) => {
    try {
      set({ loading: false, error: null });
      const response = await PublicArticle.getAllArticles(params);
      set({
        publicArticles: response.data || [],
        pagination: response.pagination,
      });
    } catch {
      set({ loading: false, error: "Failed to fetch all article" });
    } finally {
      set({ loading: false });
    }
  },

  fetchGetArticleById: async (id: number) => {
    try {
      set({ loading: false, error: null });
      const response = await adminArticleApi.getArticlesById(id);
      set({ articleById: response.data });
    } catch {
      set({ loading: false, error: "Failed to fetch article by id" });
    } finally {
      set({ loading: false });
    }
  },

  fetchGetPublicArticleById: async (id: number) => {
    try {
      set({ loading: false, error: null });
      const response = await PublicArticle.getArticlesById(id);
      set({ publicArticleById: response.data });
    } catch {
      set({ loading: false, error: "Failed to fetch article by id" });
    } finally {
      set({ loading: false });
    }
  },

  addArticle: async (body: ArticleData) => {
    try {
      set({ loading: false, error: null });
      await adminArticleApi.addArticleApi(body);
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully add article",
        },
      });
      set({ isAddArticle: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to add article",
        },
      });
      set({ error: "Failed to add article" });

      throw error;
    } finally {
      set({ loading: false });
    }
  },

  uploadImage: async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    const response = await adminArticleApi.uploadImageApi(formData);
    return response.data.url;
  },

  editArticle: async (id: number, body: ArticleData) => {
    try {
      set({ loading: true, error: null });
      await adminArticleApi.updateArticleApi(id, body);
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully update article",
        },
      });
      set({ isEditArticle: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed to update article",
        },
      });
      throw error;
    } finally {
      set({ loading: false, error: null });
    }
  },

  deleteArticle: async (id: number) => {
    try {
      set({ loading: true, error: null });
      await adminArticleApi.deleteArticleApi(id);
      set({
        popAlert: {
          isVisible: true,
          status: true,
          message: "Successfully delete article",
        },
      });
      set({ isDeleteArticle: false });
    } catch (error) {
      set({
        popAlert: {
          isVisible: true,
          status: false,
          message: "Failed delete article",
        },
      });
      throw error;
    } finally {
      set({ loading: false, error: null });
    }
  },

  setArticleId: (id: number) => {
    set({ articleId: id });
  },

  isAddArticleOpen: () => {
    set({ isAddArticle: true });
  },

  isAddArticleClose: () => {
    set({ isAddArticle: false });
  },
  isEditArticleOpen: () => {
    set({ isEditArticle: true });
  },
  isEditArticleClose() {
    set({ isEditArticle: false });
  },
  isDeleteArticleOpen() {
    set({ isDeleteArticle: true });
  },
  iseDeleteArticleClose() {
    set({ isDeleteArticle: false });
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
