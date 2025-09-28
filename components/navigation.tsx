// components/NavigationOverlay.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useNavigation } from "../libs/zustand";
import { useLanguage } from "../libs/zustand";

export default function NavigationOverlay() {
  const { isOpen, toggle } = useNavigation();
  const { currentLanguage } = useLanguage();

  if (!isOpen) return null;

  const links = [
    { href: "/", en: "Biography", de: "Biografie" },
    { href: "/news", en: "News", de: "Nachrichten" },
    { href: "/D.U.R.Quartett", en: "D.U.R. Quartet", de: "D.U.R. Quartett", gradient: true },
    { href: "/concerts", en: "Concerts", de: "Konzerte" },
    { href: "/gallery", en: "Gallery", de: "Galerie" },
    { href: "/videos", en: "Videos", de: "Videos" },
    { href: "/email", en: "Contacts", de: "Kontakte" },
  ];

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      transition={{ duration: 1 }}
      className="w-screen h-screen bg-[#3a3a3a] absolute top-[40px] left-0 flex flex-col justify-around items-center pb-28 text-white overflow-hidden z-50"
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
          transition={{ duration: 1, delay: 0.2 * i }}
        >
          <Link
            href={link.href}
            className={
              link.gradient
                ? "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-extrabold text-lg font-serif"
                : ""
            }
          >
            {currentLanguage === "e" ? link.en : link.de}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
