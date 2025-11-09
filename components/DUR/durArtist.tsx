"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import quartetArtistsData from "@/libs/quartet_artists.json";

type QuartetArtist = {
  name: string;
  shortBio: string;
  image: string;
  role: string;
};

const quartetArtists = quartetArtistsData as QuartetArtist[];

const formatName = (name: string) => name.replace(/_/g, " ");
const profileHref = (artistName: string) =>
  artistName === "Anait_Vanoian"
    ? `/`
    : `/D.U.R.Quartett/${artistName}`;

export default function QuartetArtists() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10 lg:px-0">
      <div className="grid gap-8 md:grid-cols-2">
        {quartetArtists.map((artist, index) => (
          <motion.article
            key={artist.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="frosted-panel relative overflow-hidden p-6 sm:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="relative mx-auto w-40 shrink-0 sm:w-48">
                <span
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-200/50 via-fuchsia-500/20 to-sky-500/30 blur-[65px]"
                  aria-hidden="true"
                />
                <Image
                  src={artist.image}
                  alt={formatName(artist.name)}
                  width={300}
                  height={400}
                  className="relative z-10 aspect-[3/4] w-full rounded-[24px] object-cover object-center shadow-[0_25px_50px_rgba(2,6,23,0.65)] ring-1 ring-white/10"
                />
                <p className="absolute -bottom-4 left-1/2 z-20 w-[85%] -translate-x-1/2 rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-center text-[0.6rem] uppercase tracking-[0.35em] text-white/80 backdrop-blur">
                  {artist.role}
                </p>
              </div>
              <div className="space-y-4 text-sm text-white/80">
                <p className="text-[0.6rem] uppercase tracking-[0.35em] text-white/50">
                  D.U.R. Quartet
                </p>
                <h3 className="text-lg font-semibold tracking-[0.18em] text-white">
                  {formatName(artist.name)}
                </h3>
                <p>{artist.shortBio}</p>
                <Link
                  href={profileHref(artist.name)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-amber-200 transition hover:text-amber-100"
                >
                  Read more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
