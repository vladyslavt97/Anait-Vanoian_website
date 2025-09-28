"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../libs/zustand";

export default function NavigationMd() {
  const { currentLanguage } = useLanguage();

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
    { href: "/email", en: "Contacts", de: "Kontakte" },
  ];

  return (
    <div className="w-[80vw] absolute left-32 top-3 flex flex-row justify-start gap-6 text-white overflow-hidden md:text-xs lg:text-sm">
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
                ? "bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-extrabold text-md"
                : ""
            }
          >
            {currentLanguage === "e" ? link.en : link.de}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
