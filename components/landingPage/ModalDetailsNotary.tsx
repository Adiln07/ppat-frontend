"use client";

import { useAdminNotaryStore } from "@/stores/admin/notary/AdminNotaryStore";
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faLocationDot,
  faMapLocationDot,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

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

  if (!isDetailNotary) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 transition-opacity">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden">
        {/* Header Modal */}
        <div className="flex justify-between items-center border-b border-[#E1E3E4] bg-slate-50/50 px-6 py-4">
          <h2 className="text-lg font-bold text-[#191C1D]">Detail Notaris</h2>
          <button
            onClick={isDetailNotaryClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-[#8F000D] hover:text-white transition-colors"
            aria-label="Tutup modal"
          >
            ✕
          </button>
        </div>

        {/* Body Modal */}
        <div className="px-6 md:px-8 py-6 md:py-8">
          {/* Header Konten (Nama & Status) */}
          <div className="flex flex-col gap-y-3">
            <h3 className="font-extrabold text-2xl md:text-3xl text-[#191C1D] leading-tight">
              {publicNotaryById?.name}
            </h3>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-x-2 text-[#5A403E] bg-slate-50 px-3 py-1.5 rounded-md border border-[#E1E3E4]">
                <FontAwesomeIcon icon={faIdCard} className="text-[#8F000D]" />
                <span className="text-sm font-medium">
                  SK PPAT: {publicNotaryById?.skPpat}
                </span>
              </div>
              <span className="bg-[#8CFB8F]/20 border border-[#8CFB8F] px-2.5 py-1.5 rounded-md text-[#007524] text-xs font-bold tracking-wide">
                AKTIF
              </span>
            </div>
          </div>

          {/* Card Alamat */}
          <div className="mt-8 bg-white border border-[#E1E3E4] rounded-xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-[#E1E3E4] px-5 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#8F000D]">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
              </div>
              <p className="text-[#191C1D] font-bold text-sm md:text-base">
                Alamat Kantor
              </p>
            </div>

            <div className="px-5 py-4 bg-white">
              <p className="text-[#5A403E] text-sm md:text-base leading-relaxed">
                {publicNotaryById?.address || "Alamat belum tersedia."}
              </p>

              {publicNotaryById?.mapUrl && (
                <a
                  href={publicNotaryById.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 flex items-center justify-between gap-3 rounded-lg border border-[#E1E3E4] bg-gradient-to-r from-slate-50 to-white px-4 py-3 transition-all hover:border-[#8F000D]/30 hover:shadow-md"
                >
                  <div className="flex items-center gap-x-3">
                    <div className="w-9 h-9 rounded-full bg-[#8F000D]/10 flex items-center justify-center text-[#8F000D] group-hover:bg-[#8F000D] group-hover:text-white transition-colors">
                      <FontAwesomeIcon
                        icon={faMapLocationDot}
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-sm font-semibold text-[#191C1D]">
                      Buka di Google Maps
                    </span>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#8F000D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailsNotary;
