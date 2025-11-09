"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useNavigation, useLanguage } from "@/libs/zustand";

const links = [
  { href: "/", en: "Biography", de: "Biografie" },
  { href: "/news", en: "News", de: "Nachrichten" },
  {
    href: "/D.U.R.Quartett",
    en: "D.U.R. Quartet",
    de: "D.U.R. Quartett",
    gradient: true,
  },
  { href: "/concerts", en: "Concerts", de: "Konzerte" },
  { href: "/gallery", en: "Gallery", de: "Galerie" },
  { href: "/videos", en: "Videos", de: "Videos" },
  { href: "/contacts", en: "Contacts", de: "Kontakte" },
];

export default function NavigationOverlay() {
  const { isOpen, toggle } = useNavigation();
  const { currentLanguage } = useLanguage();

  if (!isOpen) return null;

  return (
    <motion.nav
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      transition={{ duration: 1 }}
      role="navigation"
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-around overflow-hidden bg-slate-950/95 pb-28 pt-[96px] text-white backdrop-blur-2xl md:pt-[112px]"
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") toggle();
      }}
    >
      <motion.button
        type="button"
        aria-label="Close navigation menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white/60 transition hover:text-white"
        onClick={(event) => {
          event.stopPropagation();
          toggle();
        }}
      >
        ×
      </motion.button>
      {links.map((link, i) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: i * 0.15 }}
        >
          <Link
            href={link.href}
            className={
              link.gradient
                ? "bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-400 bg-clip-text text-lg font-semibold uppercase tracking-[0.35em] text-transparent"
                : "text-lg uppercase tracking-[0.35em] text-white/80 transition hover:text-white"
            }
          >
            {currentLanguage === "e" ? link.en : link.de}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
}
