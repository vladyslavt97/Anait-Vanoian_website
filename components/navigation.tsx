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
      className="fixed left-0 right-0 top-[64px] z-40 flex h-[calc(100vh-64px)] w-screen flex-col items-center justify-around overflow-hidden bg-slate-950/95 pb-28 text-white backdrop-blur-2xl md:top-[72px] md:h-[calc(100vh-72px)]"
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") toggle();
      }}
    >
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
