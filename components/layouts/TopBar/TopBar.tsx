"use client";

import { useState } from "react";
import {
  faRightFromBracket,
  faCity,
  faGavel,
  faNewspaper,
  faAddressCard,
  faBars,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const [isKlik, setIsKlik] = useState(false);
  const handleToggle = () => {
    setIsKlik((s) => !s);
  };

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
    <div className="">
      <div className=" bg-white text-[#61CE69] w-fulx h-[8vh] flex items-center justify-between px-0 lg:px-6 pr-6 border-b-[1.5px] border-[#545F73] ">
        <div className=" items-center justify-center  lg:hidden flex">
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

        <h1 className="font-semibold kanit-font text-lg hidden lg:block">
          Hello Administrator
        </h1>
        <div className="flex items-center gap-5 ">
          <div className="relative">
            <div
              className="border-gray-300 border-2 w-9 h-9 flex justify-center items-center rounded-full cursor-pointer"
              onClick={handleToggle}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-[#545F73] text-sm"
              />
            </div>
            {isKlik && (
              <div className="absolute bg-white w-[10em] mt-4 right-0 shadow-lg rounded-lg flex z-50 flex-col gap-2 ">
                <div className="flex items-center gap-2 py-2 bg-red-500 rounded-lg pl-2 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="text-white text-xl"
                  />
                  <p className="text-white font-semibold roboto-font">
                    Log Out
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ul
        className={`
        lg:hidden absolute w-full h-fit z-50 duration-500 ${
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
                      ? "bg-[#EEF9EF]  border-l-4 border-[#61CE69]"
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
      </ul>
    </div>
  );
};

export default TopBar;
