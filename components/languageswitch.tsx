// components/LanguageSwitch.tsx
"use client";

import { useLanguage } from "../libs/zustand";

export default function LanguageSwitch() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="flex md:flex-col text-xs font-bold gap-2 md:gap-0.5 z-50">
      <button
        onClick={() => setLanguage("g")}
        className={`px-2 py-1 md:p-0 border text-white hover:bg-gray-500 rounded text-center ${
          currentLanguage === "e" ? "border-amber-100" : "border-orange-300"
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage("e")}
        className={`px-2 py-1 md:p-0 border text-white hover:bg-gray-500 rounded text-center ${
          currentLanguage === "g" ? "border-amber-100" : "border-orange-300"
        }`}
      >
        ENG
      </button>
    </div>
  );
}
