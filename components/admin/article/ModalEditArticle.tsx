"use client";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAdminArticleStore } from "@/stores/admin/article/AdminArticleStore";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

const ModalEditArticle = ({
  search,
  page,
  limit,
}: {
  search: string;
  page: number;
  limit: number;
}) => {
  const [editArticle, setEditArticle] = useState({
    title: "",
    theme: "",
    eventDate: new Date(),
    description: "",
    imageUrl: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditArticleClose = useAdminArticleStore(
    (state) => state.isEditArticleClose,
  );
  const articleId = useAdminArticleStore((state) => state.articleId);
  const articleById = useAdminArticleStore((state) => state.articleById);
  const isEditArticle = useAdminArticleStore((state) => state.isEditArticle);
  const fetchGetArticleById = useAdminArticleStore(
    (state) => state.fetchGetArticleById,
  );
  const editArticleApi = useAdminArticleStore((state) => state.editArticle);
  const uploadImageApi = useAdminArticleStore((state) => state.uploadImage);
  const fetchGetAllArticle = useAdminArticleStore(
    (state) => state.fetchGetAllArticle,
  );

  useEffect(() => {
    if (articleId && isEditArticle) {
      fetchGetArticleById(articleId);
    }
  }, [articleId]);

  useEffect(() => {
    if (articleById) {
      setEditArticle({
        title: articleById.title || "",
        theme: articleById.theme || "",
        eventDate: articleById.eventDate
          ? new Date(articleById.eventDate)
          : new Date(),
        description: articleById.description || "",
        imageUrl: articleById.imageUrl || "",
      });
      setPreviewUrl(articleById.imageUrl || "");
      setImageFile(null); // reset pilihan file baru tiap kali buka modal artikel lain
    }
  }, [articleById]);

  const formatDateForInput = (date: Date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      let imageUrl = editArticle.imageUrl;

      if (imageFile) {
        imageUrl = await uploadImageApi(imageFile);
      }

      await editArticleApi(articleId, {
        ...editArticle,
        imageUrl,
      });

      await fetchGetAllArticle({
        name: search,
        pages: page,
        limit,
      });

      isEditArticleClose();
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 shrink-0">
          <h2 className="kanit-font font-semibold text-lg text-slate-800">
            Edit Article Modal
          </h2>
          <button
            onClick={() => isEditArticleClose()}
            type="button"
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4 overflow-y-auto">
          <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Title
            </label>
            <input
              type="text"
              required
              value={editArticle.title}
              onChange={(e) =>
                setEditArticle((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
          </div>

          <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Theme
            </label>
            <input
              type="text"
              required
              value={editArticle.theme}
              onChange={(e) =>
                setEditArticle((prev) => ({
                  ...prev,
                  theme: e.target.value,
                }))
              }
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
          </div>

          <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Event Date
            </label>
            <input
              type="date"
              required
              value={formatDateForInput(editArticle.eventDate)}
              onChange={(e) =>
                setEditArticle((prev) => ({
                  ...prev,
                  eventDate: new Date(e.target.value),
                }))
              }
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
          </div>

          <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-emerald-50 file:text-emerald-600 file:text-sm hover:file:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
            <p className="roboto-font text-xs text-slate-400 mt-1">
              Kosongkan jika tidak ingin mengganti gambar
            </p>
            {previewUrl && (
              <div className="mt-3 flex justify-center bg-slate-50 rounded-md border border-slate-200 p-2">
                <img
                  src={imageFile ? previewUrl : `${API_BASE_URL}${previewUrl}`}
                  alt="preview"
                  className="h-28 w-auto object-contain rounded"
                />
              </div>
            )}
          </div>

          <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Description
            </label>
            <textarea
              required
              value={editArticle.description}
              onChange={(e) =>
                setEditArticle((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              rows={3}
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50 shrink-0">
          <button
            onClick={() => isEditArticleClose()}
            type="button"
            className="roboto-font px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="roboto-font px-4 py-2 text-sm font-medium text-white bg-[#61CE69] hover:brightness-95 rounded-md drop-shadow-sm transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalEditArticle;
