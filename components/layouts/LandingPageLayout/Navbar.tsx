// "use client";

// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <div className="flex w-full justify-between px-10 pt-6 pb-7 border-b-2 border-[#8F000D] kanit-font bg-[#F8F9FA]">
//       <div>
//         <p className="font-bold text-2xl text-[#8F000D]">IPPAT Parepare</p>
//       </div>
//       <div>
//         <ul className="flex gap-x-10 text-lg">
//           <li>
//             <a href="">Home</a>
//           </li>
//           <li>
//             <a href="">About us</a>
//           </li>
//           <li>
//             <a href="">News</a>
//           </li>
//           <li>
//             <a href="">Notary Data</a>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <Link
//           href=""
//           className="px-7 py-2 bg-[#8F000D] rounded-xs text-lg text-[#FFF6F6]"
//         >
//           Contact Us
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b-2 border-[#8F000D] kanit-font bg-[#F8F9FA]">
      <div className="flex w-full justify-between items-center px-5 md:px-10 py-5">
        <div>
          <p className="font-bold text-xl md:text-2xl text-[#8F000D]">
            IPPAT Parepare
          </p>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#8F000D] text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-x-10">
          <ul className="flex gap-x-10 text-lg">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutus">About us</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/notarydata">Notary Data</a>
            </li>
          </ul>
          <Link
            href="https://wa.me/6285696817000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2 bg-[#8F000D] rounded-xs text-lg text-[#FFF6F6] mt-2"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-y-4 pb-6 pt-2">
          <ul className="flex flex-col items-center gap-y-4 text-lg">
            <li>
              <a href="/beranda">Home</a>
            </li>
            <li>
              <a href="/aboutus">About us</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/notarydata">Notary Data</a>
            </li>
          </ul>
          <Link
            href="https://wa.me/6285696817000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2 bg-[#8F000D] rounded-xs text-lg text-[#FFF6F6] mt-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
