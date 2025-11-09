"use client";

import { motion } from "framer-motion";
import { SyncLoader } from "react-spinners";
import { useLanguage } from "@/libs/zustand";
import concerts from "@/libs/concerts.json";
import Link from "next/link";

interface SubConcert {
    number: number;
    name: string;
    dates: string[];
}

interface Concert {
    title: string;
    date?: string;
    dates?: string[];
    location?: string;
    programme?: string[];
    conductor?: string;
    concerts?: SubConcert[];
    url?: string;
}

export default function ConcertsPage() {
    const currentLanguage = useLanguage((state) => state.currentLanguage);

    if (!concerts || concerts.length === 0) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <SyncLoader color="#ff9500" />
            </div>
        );
    }

    const labels = {
        programme: currentLanguage === "e" ? "Programme" : "Programm",
        conductor: currentLanguage === "e" ? "Conductor" : "Dirigent",
        set: currentLanguage === "e" ? "Set" : "Teil",
        moreInfo: currentLanguage === "e" ? "More info" : "Mehr erfahren",
    };

    return (
        <section className="relative min-h-screen overflow-hidden px-5 pb-16 pt-24 sm:min-h-[98.5vh]">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(69,94,181,0.25),_rgba(5,5,5,0.85))]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-4xl text-center"
            >
                <h1 className="mt-4 text-4xl font-semibold tracking-[0.2em] text-white sm:text-5xl">
                    {currentLanguage === "e" ? "Concerts" : "Konzerte"}
                </h1>
            </motion.div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-2">
                {concerts.map((concert: Concert, idx: number) => (
                    <motion.article
                        key={`${concert.title}-${idx}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.05 }}
                        className="frosted-panel relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl shadow-black/30"
                    >
                        <div className="flex flex-col gap-2">
                            <div className="flex items-start justify-between gap-4">
                                <h2 className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
                                    {concert.title}
                                </h2>
                                {concert.date && (
                                    <span className="rounded-full bg-white/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-amber-200">
                                        {concert.date}
                                    </span>
                                )}
                            </div>

                            {concert.location && (
                                <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                                    {concert.location}
                                </p>
                            )}

                            {concert.dates && (
                                <ul className="text-sm text-white/80">
                                    {concert.dates.map((d, i) => (
                                        <li key={i}>• {d}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {concert.programme && concert.programme.length > 0 && (
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                                    {labels.programme}
                                </p>
                                <ul className="mt-2 space-y-1 text-sm text-white/80">
                                    {concert.programme
                                        .filter(
                                            (item) => item && item.trim() !== ""
                                        )
                                        .map((item, i) => (
                                            <li
                                                key={i}
                                                className="leading-relaxed"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )}

                        {concert.conductor && (
                            <p className="text-sm text-white/80">
                                <span className="font-semibold text-white">
                                    {labels.conductor}:
                                </span>{" "}
                                {concert.conductor}
                            </p>
                        )}

                        {concert.concerts && (
                            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                                    {currentLanguage === "e"
                                        ? "Multi-date series"
                                        : "Mehrteilige Reihe"}
                                </p>
                                <div className="mt-3 space-y-3">
                                    {concert.concerts.map(
                                        (sub: SubConcert, i) => (
                                            <div
                                                key={i}
                                                className="rounded-xl bg-white/5 p-3"
                                            >
                                                <p className="text-sm font-semibold text-white">
                                                    {labels.set} {sub.number}:{" "}
                                                    {sub.name}
                                                </p>
                                                <ul className="mt-1 text-sm text-white/75">
                                                    {sub.dates.map((d, j) => (
                                                        <li key={j}>• {d}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                        {concert.url && (
                            <div className="mt-auto">
                                <Link
                                    href={concert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-200 transition hover:bg-amber-200/10"
                                >
                                    {labels.moreInfo}
                                    <span aria-hidden="true">↗</span>
                                </Link>
                            </div>
                        )}
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
