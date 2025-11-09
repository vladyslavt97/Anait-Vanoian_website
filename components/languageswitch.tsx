"use client";

import { useLanguage } from "@/libs/zustand";

export default function LanguageSwitch() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-white/70">
      <button
        onClick={() => setLanguage("g")}
        className={`rounded-full px-3 py-1 transition ${
          currentLanguage === "g"
            ? "bg-white text-slate-900 shadow-[0_10px_20px_rgba(15,23,42,0.25)]"
            : "text-white/70 hover:text-white"
        }`}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage("e")}
        className={`rounded-full px-3 py-1 transition ${
          currentLanguage === "e"
            ? "bg-white text-slate-900 shadow-[0_10px_20px_rgba(15,23,42,0.25)]"
            : "text-white/70 hover:text-white"
        }`}
      >
        ENG
      </button>
    </div>
  );
}
