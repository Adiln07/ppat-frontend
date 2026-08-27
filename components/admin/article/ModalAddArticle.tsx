"use client";

import { useAdminArticleStore } from "@/stores/admin/article/AdminArticleStore";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalAddArticle({
  search,
  page,
  limit,
}: {
  search: string;
  page: number;
  limit: number;
}) {
  const [addArticle, setAddArticle] = useState({
    title: "",
    theme: "",
    eventDate: new Date(),
    description: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isAddArticleClose = useAdminArticleStore(
    (state) => state.isAddArticleClose,
  );
  const addArticleApi = useAdminArticleStore((state) => state.addArticle);
  const uploadImageApi = useAdminArticleStore((state) => state.uploadImage);
  const fetchGetAllArticle = useAdminArticleStore(
    (state) => state.fetchGetAllArticle,
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // format Date -> "yyyy-MM-dd" buat value input type="date"
  const formatDateForInput = (date: Date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) return; // required, harusnya nggak sampai sini kalau input file required

    try {
      setIsSubmitting(true);

      // 1. Upload gambar dulu ke /upload
      const imageUrl = await uploadImageApi(imageFile);

      // 2. Submit data artikel sebagai JSON biasa, sertakan imageUrl hasil upload
      await addArticleApi({
        ...addArticle,
        imageUrl,
      } as any);
      // "as any" sementara kalau ArticleData belum punya field imageUrl,
      // idealnya update type ArticleData (lihat catatan di bawah)

      await fetchGetAllArticle({
        name: search,
        page: page,
        limit,
      });

      isAddArticleClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
          <h2 className="kanit-font font-semibold text-lg text-slate-800">
            Add Article Modal
          </h2>
          <button
            type="button"
            onClick={() => isAddArticleClose()}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
                Title
              </label>
              <input
                type="text"
                required
                value={addArticle.title}
                onChange={(e) =>
                  setAddArticle((prev) => ({
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
                value={addArticle.theme}
                onChange={(e) =>
                  setAddArticle((prev) => ({
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
                value={formatDateForInput(addArticle.eventDate)}
                onChange={(e) =>
                  setAddArticle((prev) => ({
                    ...prev,
                    eventDate: new Date(e.target.value),
                  }))
                }
                className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={handleImageChange}
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-emerald-50 file:text-emerald-600 file:text-sm hover:file:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
            {previewUrl && (
              <img
                src={previewUrl}
                alt="preview"
                className="mt-3 h-20 w-auto max-w-full object-contain rounded-md border border-slate-200 bg-slate-50"
              />
            )}
          </div>

          <div>
            <label className="roboto-font block text-xs font-medium text-slate-500 mb-1">
              Description
            </label>
            <textarea
              required
              value={addArticle.description}
              onChange={(e) =>
                setAddArticle((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              rows={3}
              className="roboto-font w-full border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 transition-colors"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 px-6 py-4 border-t border-slate-200 bg-slate-50">
          <button
            type="button"
            onClick={() => isAddArticleClose()}
            className="roboto-font px-4 py-2 text-sm rounded-md border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="roboto-font px-4 py-2 text-sm rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
