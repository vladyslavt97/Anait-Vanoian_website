// store/useLanguage.ts
import { create } from "zustand";

type Language = "e" | "g";

interface LanguageState {
  currentLanguage: Language;
  setLanguage: (lan: Language) => void;
}

export const useLanguage = create<LanguageState>((set:any) => {
  // Default to "g" (German), then override on client
  let initial: Language = "g";
  if (typeof window !== "undefined") {
    initial = window.navigator.language.includes("en") ? "e" : "g";
  }

  return {
    currentLanguage: initial,
    setLanguage: (lan:Language) => set({ currentLanguage: lan }),
  };
});

interface NavigationState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const useNavigation = create<NavigationState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));