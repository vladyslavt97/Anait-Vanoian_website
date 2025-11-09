"use client";

import { useEffect } from "react";
import { useLanguage } from "@/libs/zustand";

export default function LanguageDetector() {
  const setLanguage = useLanguage((state) => state.setLanguage);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const locales =
      window.navigator.languages && window.navigator.languages.length > 0
        ? window.navigator.languages
        : [window.navigator.language];
    const browserPrefersEnglish = locales.some((lan) =>
      lan?.toLowerCase().includes("en"),
    );

    setLanguage(browserPrefersEnglish ? "e" : "g");
  }, [setLanguage]);

  return null;
}
