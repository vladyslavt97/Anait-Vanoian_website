"use client";

import { motion } from "framer-motion";
import { SyncLoader } from "react-spinners";
import { useLanguage } from "@/libs/zustand";
import concerts from "@/libs/concerts.json";

export default function ConcertsPage() {
  const currentLanguage = useLanguage((state) => state.currentLanguage);

  if (!concerts || concerts.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <SyncLoader color="#ff9500" />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-32 font-sans min-h-screen sm:min-h-[98.5vh]">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="font-bold text-center relative top-20"
      >
        {currentLanguage === "e" ? "Concerts" : "Konzerte"}
      </motion.h1>

      <div className="relative top-16 mx-10 w-full px-10 max-w-[600px]">
        {concerts.map((concert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="rounded-2xl border drop-shadow-lg p-4 mb-5 flex flex-col items-center"
          >
            {/* Title */}
            <h2 className="font-bold text-yellow-400 text-center">
              {concert.title}
            </h2>

            {/* Single Date */}
            {concert.date && <p className="italic">{concert.date}</p>}

            {/* Multiple Dates */}
            {concert.dates && (
              <ul className="text-sm">
                {concert.dates.map((d: string, i: number) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}

            {/* Location */}
            {concert.location && (
              <h3 className="italic">{concert.location}</h3>
            )}

            {/* Programme */}
            {concert.programme && (
              <ul className="text-sm">
                {concert.programme
                  .filter((item: string) => item && item.trim() !== "")
                  .map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
              </ul>
            )}

            {/* Conductor */}
            {concert.conductor && (
              <p>
                <strong>Conductor:</strong> {concert.conductor}
              </p>
            )}

            {/* Sub-concerts */}
            {concert.concerts && (
              <div className="mt-3 w-full">
                {concert.concerts.map((sub: any, i: number) => (
                  <div key={i} className="border-t pt-2 mt-2">
                    <p className="font-semibold">
                      {sub.number}. {sub.name}
                    </p>
                    <ul className="text-sm">
                      {sub.dates.map((d: string, j: number) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Link */}
            {concert.url && (
              <a
                href={concert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-600 underline"
              >
                More info
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
