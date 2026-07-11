"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import {
  faCity,
  faGavel,
  faNewspaper,
  faAddressCard,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const navItemsAdmin = [
    {
      href: "/admin/city",
      label: "City Management",
      logo: faCity,
    },
    {
      href: "/admin/notary",
      label: "Notary Management",
      logo: faGavel,
    },
    {
      href: "/admin/article",
      label: "Article Management",
      logo: faNewspaper,
    },
    {
      href: "/admin/notaryByCity",
      label: "Notary Data By City",
      logo: faAddressCard,
    },
  ];
  return (
    <div>
      <div className="lg:bg-white  hidden lg:block text-black xl:w-[20em] lg:w-[15em] border-r-[1.5px] border-[#545F73]  min-h-screen">
        <div className=" w-full">
          <div className="pl-4">
            <h1 className="text-2xl font-semibold pt-4 kanit-font text-[#61CE69]">
              {" "}
              IPPAT Parepare
            </h1>
            <p className="roboto-font text-[#545F73]">Admin system</p>
          </div>
          <div className="my-10 flex flex-col gap-4 ">
            <>
              {navItemsAdmin.map((nav, i) => {
                const isActive = pathName === nav.href;

                return (
                  <Link
                    key={i}
                    href={nav.href}
                    className={`flex items-center gap-4 px-4 py-2  ${
                      isActive
                        ? "bg-[#61CE69]/10  border-l-4 border-[#61CE69]"
                        : "bg-white"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={nav.logo}
                      className={`${isActive ? "text-[#61CE69]" : "text-[#545F73]"}  `}
                    />
                    <h1
                      className={`${isActive ? "text-[#61CE69]" : "text-[#545F73]"} text-lg roboto-font`}
                    >
                      {nav.label}
                    </h1>
                  </Link>
                );
              })}
            </>
          </div>
        </div>
      </div>

      {/* <div className=" items-center justify-center w-full h-[8vh] border-b-[1.5px] border-[#545F73] lg:hidden flex">
        <div className="bg-[#61ce69]/10 w-8 h-8 flex items-center justify-center ml-2 rounded-lg ">
          {open ? (
            <FontAwesomeIcon
              className="text-lg text-[#61ce69]"
              icon={faXmark}
              onClick={() => setOpen(false)}
            />
          ) : (
            <FontAwesomeIcon
              className="text-lg text-[#61ce69]"
              icon={faBars}
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      <ul
        className={`
        lg:hidden  absolute w-full h-fit z-50 duration-500 ${
          open ? "left-0" : "-left-full"
        }
      `}
      >
        <>
          {navItemsAdmin.map((nav, i) => {
            const isActive = pathName === nav.href;
            return (
              <li key={i}>
                <Link
                  className={` w-full ${
                    isActive
                      ? "bg-[#61CE69]/10  border-l-4 border-[#61CE69]"
                      : "bg-white"
                  } py-7 px-3 inline-block  font-semibold text-black`}
                  href={nav.href}
                >
                  <div className={`flex items-center gap-5 `}>
                    <FontAwesomeIcon
                      icon={nav.logo}
                      className={`${isActive ? "text-[#61CE69]" : "text-[#545F73]"} `}
                    />
                    <h1
                      className={`${isActive ? "text-[#61CE69]" : "text-[#545F73]"} roboto-font  `}
                    >
                      {nav.label}
                    </h1>
                  </div>
                </Link>
              </li>
            );
          })}
        </>
      </ul> */}
    </div>
  );
};

export default NavBar;
