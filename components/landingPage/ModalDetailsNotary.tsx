"use client";

import { useAdminNotaryStore } from "@/stores/admin/notary/AdminNotaryStore";
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ModalDetailsNotary = () => {
  const isDetailNotaryClose = useAdminNotaryStore(
    (state) => state.isDetailNotaryClose,
  );

  const publicNotaryId = useAdminNotaryStore((state) => state.publicNotaryId);
  const publicNotaryById = useAdminNotaryStore(
    (state) => state.publicNotaryById,
  );
  const isDetailNotary = useAdminNotaryStore((state) => state.isDetailNotary);
  const fetchPublicNotaryById = useAdminNotaryStore(
    (state) => state.fetchPublicNotaryById,
  );

  useEffect(() => {
    if (publicNotaryId && isDetailNotary) {
      fetchPublicNotaryById(publicNotaryId);
    }
  }, [publicNotaryId, isDetailNotary]);

  // WAJIB: jangan render apapun kalau modal belum dibuka
  if (!isDetailNotary) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center border-b border-[#E1E3E4] px-4 py-4">
          <h2 className="text-lg font-bold">Detail Notaris</h2>
          <button
            onClick={isDetailNotaryClose}
            className="hover:bg-[#8F000D] hover:rounded-md hover:p-2 p-2 hover:text-[#FFFF]"
          >
            ✕
          </button>
        </div>
        <div className="px-10 py-8">
          <div className="flex flex-col gap-y-2">
            <p className="font-extrabold text-2xl text-[#191C1D]">
              {publicNotaryById?.name}
            </p>
            <div className="flex items-center gap-x-2">
              <FontAwesomeIcon icon={faIdCard} className="text-[#5A403E]" />
              <p className="text-[#5A403E]">
                SK PPAT: {publicNotaryById?.skPpat}
              </p>
            </div>
          </div>
          <div className="p-4 border mt-4 border-[#E1E3E4] rounded-md">
            <div className="flex mb-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="text-[#5A403E] font-semibold">Office Address</p>
            </div>
            <div>
              <p>{publicNotaryById?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailsNotary;
