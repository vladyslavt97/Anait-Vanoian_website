"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/libs/zustand";

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

export default function NavigationMd() {
  const { currentLanguage } = useLanguage();

  return (
    <nav className="flex flex-wrap items-center gap-6 overflow-hidden text-[0.65rem] uppercase tracking-[0.28em] text-white/70">
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
                ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 bg-clip-text text-transparent transition"
                : "transition hover:text-white"
            }
          >
            {currentLanguage === "e" ? link.en : link.de}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
