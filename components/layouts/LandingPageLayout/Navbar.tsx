"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/beranda", label: "Beranda" },
  { href: "/aboutus", label: "Tentang Kami" },
  { href: "/news", label: "Berita" },
  { href: "/notarydata", label: "Data Notaris" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="w-full border-b-2 border-[#8F000D] kanit-font bg-[#F8F9FA]">
      <div className="flex w-full justify-between items-center px-5 md:px-10 py-5">
        <Link href="/beranda" className="group block">
          <div className="border-l-4 border-[#8F000D] pl-3 py-0.5 group-hover:border-[#70020b] transition-colors">
            <p className="font-extrabold text-xl md:text-2xl text-[#8F000D] tracking-tight leading-snug group-hover:opacity-80 transition-opacity">
              Pengurus Daerah Parepare dan Sekitarnya
            </p>
            <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-[#69504e] mt-1">
              Ikatan Pejabat Pembuat Akta Tanah{" "}
              <span className="font-bold text-[#8F000D]">(IPPAT)</span>
            </p>
          </div>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#8F000D] text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-10">
          <ul className="flex gap-x-10 text-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-[#8F000D] font-semibold border-b-2"
                      : "text-[#191C1D] hover:text-[#8F000D]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://wa.me/6285696817000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2 bg-[#8F000D] hover:bg-[#70020b] hover:text-[#FFFF] rounded-md text-lg text-[#FFF6F6] mt-2"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-y-4 pb-6 pt-2">
          <ul className="flex flex-col items-center gap-y-4 text-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-[#8F000D] font-semibold"
                      : "text-[#191C1D] hover:text-[#8F000D]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="https://wa.me/6285696817000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2 bg-[#8F000D] rounded-xs text-lg text-[#FFF6F6] mt-2"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
