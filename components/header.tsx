"use client";

import Link from "next/link";
import Burger from "./burger";
import Navigation from "./navigation";
import NavigationMd from "./navigationmd";
import LanguageSwitch from "./languageswitch";
import { useNavigation } from "@/libs/zustand";

export default function Header() {
  const { close } = useNavigation();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-gradient-to-r from-[#050505]/80 via-[#0b1220]/85 to-[#050505]/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <Link
          href="/"
          onClick={close}
          className="text-xs font-semibold uppercase tracking-[0.45em] text-white"
        >
          Anait&nbsp;Vanoian
        </Link>

        <div className="flex items-center gap-5 lg:hidden">
          <LanguageSwitch />
          <Burger />
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <NavigationMd />
          <LanguageSwitch />
        </div>
      </div>
      <Navigation />
    </header>
  );
}
