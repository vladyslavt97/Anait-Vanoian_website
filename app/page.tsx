"use client";

import { motion } from "framer-motion";
import { IoMdCloudDownload } from "react-icons/io";
import { SiApplemusic, SiSpotify } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import BioEnglish from "@/components/bioenglish";
import BioDeutsch from "@/components/biodeutsch";
import { useLanguage } from "@/libs/zustand";
import type { ReactNode } from "react";

type Language = "e" | "g";

type SocialLink = {
    href: string;
    icon: ReactNode;
    label: string;
};

const socialLinks: SocialLink[] = [
    {
        href: "https://www.youtube.com/@anaitvanoian7094",
        icon: (
            <Image
                src="/youtube.png"
                alt="YouTube"
                width={22}
                height={22}
            />
        ),
        label: "YouTube",
    },
    {
        href: "https://www.facebook.com/anait.vanoyan",
        icon: (
            <Image
                src="/facebook.png"
                alt="Facebook"
                width={22}
                height={22}
            />
        ),
        label: "Facebook",
    },
    {
        href: "https://www.instagram.com/anaitvioline/?igshid=ZGUzMzM3NWJiOQ%3D%3D",
        icon: (
            <Image
                src="/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
            />
        ),
        label: "Instagram",
    },
    {
        href: "https://soundcloud.com/anaitvanoian/anait-vanoian-m-karminsky-the-jewish-prayer",
        icon: (
            <Image
                src="/soundcloud.png"
                alt="SoundCloud"
                width={32}
                height={32}
            />
        ),
        label: "SoundCloud",
    },
    {
        href: "https://music.apple.com/de/artist/anait-tiana/1829156024",
        icon: (
            <SiApplemusic
                className="h-6 w-6 text-white"
                aria-hidden="true"
            />
        ),
        label: "Apple Music",
    },
    {
        href: "https://open.spotify.com/artist/1DIQOEw8aRNV2uTKmdJh24?si=rgrGKjK5R7yKKQD5DDB8gw",
        icon: (
            <SiSpotify
                className="h-6 w-6 text-[#1DB954]"
                aria-hidden="true"
            />
        ),
        label: "Spotify",
    },
];

const heroCopy: Record<Language, string> = {
    e: "Ukrainian-born violinist crafting luminous interpretations for audiences across Europe through chamber music, orchestral leadership, and festival appearances.",
    g: "In der Ukraine geborene Geigerin, die mit Kammermusik, Konzertmeister-Erfahrung und Festivalauftritten ein europaweites Publikum begeistert.",
};

const cvLinks: Record<Language, { href: string; label: string }> = {
    e: { href: "/Anait_CV _ENG.pdf", label: "Download CV" },
    g: { href: "/CV_Anait_Vanoian.pdf", label: "Lebenslauf herunterladen" },
};

export default function BiographyPage() {
    const { currentLanguage } = useLanguage();

    return (
        <div className="min-h-screen pt-16 sm:min-h-[98.5vh]">
            <section className="mx-auto max-w-6xl px-5 pt-10 pb-12 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start">
                    <motion.div
                        initial={{ opacity: 0.8, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <div className="frosted-panel flex flex-col gap-6 p-6 sm:p-8 lg:sticky lg:top-28">
                            <div className="relative">
                                <span
                                    className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-amber-200/40 via-purple-400/20 to-sky-500/30 blur-[60px]"
                                    aria-hidden="true"
                                />
                                <Image
                                    src="/anait4.jpg"
                                    alt="Portrait of Anait Vanoian"
                                    width={400}
                                    height={520}
                                    priority
                                    className="relative z-10 w-full rounded-[28px] object-cover shadow-2xl ring-1 ring-white/10"
                                />
                            </div>
                            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/50">
                                {currentLanguage === "e"
                                    ? "Connect"
                                    : "Verbinden"}
                            </p>
                            <div className="grid grid-cols-4 gap-3">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.href}
                                        className="social-tile"
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                            <p className="text-sm text-white/70">
                                {heroCopy[currentLanguage as Language]}
                            </p>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1 }}
                        >
                            <div className="space-y-4">
                                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/60">
                                    {currentLanguage === "e"
                                        ? "Profile"
                                        : "Profil"}
                                </p>
                                <h1 className="text-left">
                                    {currentLanguage === "e"
                                        ? "Biography"
                                        : "Biografie"}
                                </h1>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0.8, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                        >
                            <div className="frosted-panel px-5 py-8 sm:px-10 sm:py-10">
                                {currentLanguage === "e" ? (
                                    <BioEnglish />
                                ) : (
                                    <BioDeutsch />
                                )}
                            </div>
                        </motion.div>

                        <div className="flex justify-center pb-16 pt-4">
                            <Link
                                className="glow-button"
                                href={cvLinks[currentLanguage as Language].href}
                                download
                            >
                                {cvLinks[currentLanguage as Language].label}
                                <span className="w-6">
                                    <IoMdCloudDownload />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
