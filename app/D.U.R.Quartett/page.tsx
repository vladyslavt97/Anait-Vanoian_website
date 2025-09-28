"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/libs/zustand";
import Image from "next/image";
import DurHistory from "@/components/DUR/durHistory";
import DurArtist from "@/components/DUR/durArtist";
import Engagements from "@/components/DUR/engagement";
import GalleryDur from "@/components/DUR/galleryDur";
import VideosDur from "@/components/DUR/videosDur";

export default function DURPage() {
  const { currentLanguage } = useLanguage();
  const [coppying, setCoppying] = useState(false);
  const [sent, setSent] = useState(false);
  const [emailState, setEmailState] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("dur.quartet@gmail.com");
      setCoppying(true);
      setTimeout(() => setCoppying(false), 4000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const sendEmail = async () => {
    setSent(true);
    setTimeout(() => setSent(false), 5000);

    try {
      const response = await fetch("/api/dursubs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailState }),
      });

      if (!response.ok) throw new Error("Failed to subscribe");

      await response.json();
      setEmailState("");
    } catch (error) {
      console.error(error);
      setEmailState("");
    }
  };

  return (
    <div className="min-h-screen sm:min-h-[98.5vh] flex flex-col gap-5 font-sans">
      {/* Mobile header image */}
      <Image
        src="/quartet/top.jpg"
        alt="Anait"
        className="w-full object-cover rounded-br rounded-bl shadow-2xl shadow-black mt-10 sm:hidden"
        loading="eager"
      />

      {/* Title with motion */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-4xl text-black mt-5 sm:mt-16 text-center font-extrabold"
      >
        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          D.U.R.
        </span>
        <br />
        <span className="font-sans font-extralight text-2xl">
          {currentLanguage === "e" ? "String Quartet" : "Streichquartett"}
        </span>
      </motion.h1>

      {/* History + Artists */}
      <DurHistory />
      <DurArtist />

      {/* Engagements */}
      <Engagements />

      {/* Media */}
      <GalleryDur />
      <VideosDur />

      {/* Contacts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-row justify-around items-center py-4 pt-16">
          <a href="https://youtube.com/@D.U.R.Quartet" target="_blank">
            <Image src="/youtube.png" alt="youtube" width={30} />
          </a>
          <a href="https://www.facebook.com/D.U.R.Quartett" target="_blank">
            <Image src="/facebook.png" alt="facebook" width={30} />
          </a>
        </div>

        <div className="text-sm font-sans italic flex justify-center gap-2">
          {coppying ? (
            <h1>{currentLanguage === "e" ? "Copied!" : "Kopiert!"}</h1>
          ) : (
            <>
              <h4>dur.quartet@gmail.com</h4>
              <button onClick={handleCopy}>
                <Image src="/copy.png" width={20} alt="copy" />
              </button>
            </>
          )}
        </div>
      </motion.div>

      {/* Newsletter */}
      <div className="w-full h-32 bg-gray-600 rounded-tr-lg rounded-tl-lg flex justify-center items-center flex-col text-white">
        {sent ? (
          <h1>
            {currentLanguage === "e"
              ? "Thank you for signing up!"
              : "Danke fürs Anmelden!"}
          </h1>
        ) : (
          <>
            <div className="flex flex-row mb-3 px-2 text-center">
              <h1>
                {currentLanguage === "e"
                  ? "Get notified about our events:"
                  : "Lassen Sie sich über unsere Veranstaltungen informieren:"}
              </h1>
              <Image src="/mail.png" alt="mail" className="w-6 ml-3 object-contain" />
            </div>
            <div className="flex flex-row">
              <input
                type="email"
                value={emailState}
                onChange={(e) => setEmailState(e.target.value)}
                className="text-black rounded-lg px-2"
                placeholder="Your email"
              />
              <button
                onClick={sendEmail}
                className="bg-green-400 text-gray-700 rounded-lg px-2 hover:bg-green-300 hover:text-black"
              >
                {currentLanguage === "e" ? "Subscribe" : "Abonnieren"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
