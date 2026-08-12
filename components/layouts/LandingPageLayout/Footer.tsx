// "use client";

// const Footer = () => {
//   return (
//     <div className="bg-[#E1E3E4]">
//       <div className="flex px-15 pt-15 pb-10 justify-around gap-x-10">
//         <div className="flex flex-col gap-y-3 w-1/3">
//           <p className="text-[#8F000D] font-bold text-lg">IPPAT Parepare</p>
//           <p className="text-[#5A403E] ">
//             Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Pengurus Daerah Parepare.
//             Berkomitmen pada integritas dan pelayanan hukum yang prima.
//           </p>
//         </div>
//         <div className="flex flex-col gap-y-3">
//           <p className=" font-bold">Organization Info</p>
//           <ul className="text-[#5A403E] flex flex-col gap-y-2">
//             <li>
//               <a href="">Tentang kami</a>
//             </li>
//             <li>
//               <a href="">Struktur Pengurus</a>
//             </li>
//             <li>
//               <a href="">Visi & Misi</a>
//             </li>
//           </ul>
//         </div>
//         <div className="flex flex-col gap-y-3">
//           <p className=" font-bold">Quick Links</p>
//           <ul className="text-[#5A403E] flex flex-col gap-y-2">
//             <li>
//               <a href="">Berita</a>
//             </li>
//             <li>
//               <a href="">Data Notaris</a>
//             </li>
//           </ul>
//         </div>
//         <div className="flex flex-col gap-y-3">
//           <p className=" font-bold">Contact Details</p>
//           <ul className="text-[#5A403E] flex flex-col gap-y-2">
//             <li>Jl. Sudirman No. 45, Kota Parepare, Sulawesi Selatan</li>
//             <li>info@ippat-parepare.org</li>
//           </ul>
//         </div>
//       </div>
//       <div className="py-3 bg-[#cacaca]">
//         <p className="text-center text-sm text-[#5A403E]">
//           © 2024 IPPAT Pengurus Daerah Parepare. All Rights Reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

"use client";

const Footer = () => {
  return (
    <div className="bg-[#E1E3E4]">
      <div className="flex flex-col md:flex-row px-6 md:px-15 pt-10 md:pt-15 pb-10 justify-around gap-10">
        <div className="flex flex-col gap-y-3 w-full md:w-1/3">
          <p className="text-[#8F000D] font-bold text-lg">IPPAT Parepare</p>
          <p className="text-[#5A403E] text-sm md:text-base">
            Ikatan Pejabat Pembuat Akta Tanah (IPPAT) Pengurus Daerah Parepare.
            Berkomitmen pada integritas dan pelayanan hukum yang prima.
          </p>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="font-bold">Organization Info</p>
          <ul className="text-[#5A403E] flex flex-col gap-y-2 text-sm md:text-base">
            <li>
              <a href="">Tentang kami</a>
            </li>
            <li>
              <a href="">Struktur Pengurus</a>
            </li>
            <li>
              <a href="">Visi & Misi</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="font-bold">Quick Links</p>
          <ul className="text-[#5A403E] flex flex-col gap-y-2 text-sm md:text-base">
            <li>
              <a href="">Berita</a>
            </li>
            <li>
              <a href="">Data Notaris</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="font-bold">Contact Details</p>
          <ul className="text-[#5A403E] flex flex-col gap-y-2 text-sm md:text-base">
            <li>Jl. Sudirman No. 45, Kota Parepare, Sulawesi Selatan</li>
            <li>info@ippat-parepare.org</li>
          </ul>
        </div>
      </div>
      <div className="py-3 bg-[#cacaca] px-4">
        <p className="text-center text-xs md:text-sm text-[#5A403E]">
          © 2024 IPPAT Pengurus Daerah Parepare. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
