"use client";

import Link from "next/link";
import Burger from "./burger";
import Navigation from "./navigation";
// import NavigationMd from "./navigationmd";
import LanguageSwitch from "./languageswitch";
import { useNavigation } from "../libs/zustand"; // adjust path if needed

export default function Header() {
  const { isOpen, toggle, close } = useNavigation();

  return (
    <div className="w-screen bg-[#3a3a3a] flex flex-row h-10 justify-between items-center px-3 fixed top-0 z-50 shadow-2xl">
      {/* Mobile */}
      <div className="lg:hidden">
        <Navigation />
        <div className="flex flex-row justify-center items-center gap-5">
          <Burger/>
          <LanguageSwitch />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block text-white">
        <LanguageSwitch />
        {/* <NavigationMd /> */}
      </div>

      {/* Brand */}
      <Link href="/" onClick={close}>
        <h2 className="text-yellow-100 sm:mr-4 tracking-wider font-bold text-sm">
          Anait &nbsp;Vanoian
        </h2>
      </Link>
    </div>
  );
}
