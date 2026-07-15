"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import { useAdminNotaryStore } from "@/stores/admin/notary/AdminNotaryStore";
import { useEffect } from "react";

const ModalDeleteNotary = ({
  search,
  page,
  limit,
}: {
  search: string;
  page: number;
  limit: number;
}) => {
  const isDeleteNotary = useAdminNotaryStore((state) => state.isDeleteNotary);
  const deleteNotary = useAdminNotaryStore((state) => state.deleteNotary);
  const fetchGetAllNotary = useAdminNotaryStore(
    (state) => state.fetchGetAllNotary,
  );
  const fetchNotaryById = useAdminNotaryStore((state) => state.fetchNotaryById);
  const notaryId = useAdminNotaryStore((state) => state.notaryId);
  const notaryById = useAdminNotaryStore((state) => state.notaryById);
  const isDeleteNotaryClose = useAdminNotaryStore(
    (state) => state.iseDeleteNotaryClose,
  );

  useEffect(() => {
    if (notaryId && isDeleteNotary) {
      fetchNotaryById(notaryId);
    }
  }, [notaryId]);

  const handleDeleteNotary = async () => {
    try {
      await deleteNotary(notaryId);
      await fetchGetAllNotary({
        name: search,
        pages: page,
        limit,
      });
    } catch (error) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
          <h2 className="kanit-font font-semibold text-lg text-slate-800">
            Delete City Modal
          </h2>
          <button
            onClick={() => isDeleteNotaryClose()}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>
        </div>

        <div className="px-6 py-6 flex gap-4">
          <div className="shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-red-500 text-base"
            />
          </div>

          <div>
            <p className="roboto-font text-sm text-slate-700">
              Are you sure you want to delete city {""}
              <span className="font-semibold text-slate-900">
                {notaryById?.name}
              </span>
              ?
            </p>
            <p className="roboto-font text-sm text-slate-500 mt-1">
              This action cannot be undone. All data related to this notary will
              be permanently removed.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50">
          <button
            onClick={() => isDeleteNotaryClose()}
            className="roboto-font px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteNotary}
            className="roboto-font px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md drop-shadow-sm transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteNotary;
