"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/libs/zustand";
import newsData from "@/data/news.json";

type Language = "e" | "g";

type LocalizedFields = {
  date?: string;
  title?: string;
  description?: string;
  linkLabel?: string;
};

type MediaAsset = {
  type: "image" | "video";
  src: string;
  alt?: string;
  title?: string;
};

type FallbackNewsItem = {
  id: string;
  translations: Record<Language, LocalizedFields>;
  link?: string;
  media?: MediaAsset;
};

type DisplayNewsItem = {
  id: string;
  date?: string;
  title?: string;
  description?: string;
  link?: { href: string; label?: string } | null;
  media?: MediaAsset;
};

const newsEntries = newsData as FallbackNewsItem[];

export default function NewsPage() {
  const { currentLanguage } = useLanguage();
  const localizedNews = useMemo<DisplayNewsItem[]>(() => {
    return newsEntries.map((item) => ({
      id: item.id,
      date: item.translations[currentLanguage as Language]?.date,
      title:
        item.translations[currentLanguage as Language]?.title ??
        item.translations.g?.title,
      description: item.translations[currentLanguage as Language]?.description,
      link: item.link
        ? {
            href: item.link,
            label:
              item.translations[currentLanguage as Language]?.linkLabel ??
              item.translations.g?.linkLabel,
          }
        : null,
      media: item.media,
    }));
  }, [currentLanguage]);

  return (
    <section className="min-h-screen px-5 pt-24 pb-16 sm:min-h-[98.5vh]">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/60">
          {currentLanguage === "e" ? "Latest" : "Aktuell"}
        </p>
        <h1 className="pt-4">
          {currentLanguage === "e" ? "News" : "Nachrichten"}
        </h1>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {localizedNews.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className="frosted-panel flex h-full flex-col gap-4 p-6 text-left"
          >
            {item.date && (
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/50">
                {item.date}
              </p>
            )}
            <h2 className="text-base font-semibold tracking-[0.1em]">
              {item.title ??
                (currentLanguage === "e" ? "Concert update" : "Konzert-Update")}
            </h2>
            {item.description && (
              <p className="text-sm text-white/80">{item.description}</p>
            )}

            {item.media?.type === "image" && (
              <Image
                src={item.media.src}
                alt={item.media.alt ?? "news media"}
                width={600}
                height={400}
                className="w-full rounded-2xl object-contain"
              />
            )}

            {item.media?.type === "video" && (
              <div className="aspect-video w-full">
                <iframe
                  src={item.media.src}
                  className="h-full w-full rounded-2xl"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={item.media.title ?? "news video"}
                />
              </div>
            )}

            {item.link?.href && (
              <Link
                className="text-xs uppercase tracking-[0.35em] text-amber-200 transition hover:text-amber-100"
                href={item.link.href}
                target="_blank"
              >
                {item.link.label ??
                  (currentLanguage === "e" ? "Learn more" : "Mehr erfahren")}
              </Link>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
