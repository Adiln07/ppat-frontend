import { create } from "zustand";
import { PopAlert } from "@/types/Alert";

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
  pages: number;
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
  pagination: Pagination | null;
  articleById: Article | null;
  articleId: number;
  loading: boolean;
  error: string | null;
  popAlert: PopAlert;

  total: number;
  totalPages: number;

  isAddArticle: boolean;
};

export const useAdminArticleStore = create<AdminArticleStore>((set) => ({
  articles: [],
  pagination: null,
  articleById: null,
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
}));
