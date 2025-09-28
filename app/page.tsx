"use client";

import { IoMdCloudDownload } from "react-icons/io";
import BioEnglish from "@/components/bioenglish";
import BioDeutsch from "@/components/biodeutsch";
// import { useLanguage } from "@/libs/zustand"; // 👈 import store

export default function BiographyPage() {
  // const { currentLanguage, setLanguage } = useLanguage(); // 👈 get state from zustand
const currentLanguage = "e"
  return (
    <div className="min-h-screen sm:min-h-[98.5vh]">
      {/* Social Links */}
      <div className="flex flex-row justify-around items-center py-4 pt-16">
        <a href="https://www.youtube.com/@anaitvanoian7094" target="_blank">
          <img src="/youtube.png" alt="youtube" width={30} />
        </a>
        <a href="https://www.facebook.com/anait.vanoyan" target="_blank">
          <img src="/facebook.png" alt="facebook" width={30} />
        </a>
        <a
          href="https://www.instagram.com/anaitvioline/?igshid=ZGUzMzM3NWJiOQ%3D%3D"
          target="_blank"
        >
          <img src="/instagram.png" alt="instagram" width={30} />
        </a>
        <a
          href="https://soundcloud.com/anaitvanoian/anait-vanoian-m-karminsky-the-jewish-prayer"
          target="_blank"
        >
          <img src="/soundcloud.png" alt="soundcloud" width={55} />
        </a>
      </div>

      {/* Music Link */}
      <div className="flex flex-row justify-around items-center py-4 animate-pulse italic text-xs">
        <a href="https://ampl.ink/Y9G3o" target="_blank">
          🎵 Listen to Anait Tiana – Die Büchse Der Pandora
        </a>
      </div>

      {/* Biography Section */}
      <div>
        <h1 className="text-center my-7">
          {currentLanguage === "e" ? "Biography" : "Biografie"}
        </h1>

        <img
          src="/anait4.jpg"
          alt="Anait Vanoian"
          className="drop-shadow-2xl rounded float-left ml-5 mr-3 sm:ml-16 lg:ml-44 lg:mr-6 opacity-100 transition-opacity duration-1000 md:w-[300px]"
          width={170}
          loading="eager"
        />

        {currentLanguage === "e" ? <BioEnglish /> : <BioDeutsch />}
      </div>

      {/* CV Download */}
      <div className="flex justify-center pb-20 sm:pb-10">
        {currentLanguage === "e" ? (
          <a
            href="/Anait_CV _ENG.pdf"
            download
            className="flex flex-row items-center gap-4"
          >
            Download CV
            <div className="w-10">
              <IoMdCloudDownload size={28} />
            </div>
          </a>
        ) : (
          <a
            href="/CV_Anait_Vanoian.pdf"
            download
            className="flex flex-row items-center gap-4"
          >
            Lebenslauf herunterladen
            <div className="w-10">
              <IoMdCloudDownload size={28} />
            </div>
          </a>
        )}
      </div>

      {/* Toggle Language Button (optional) */}
      <div className="flex justify-center">
        <button
          // onClick={() =>
          //   setLanguage(currentLanguage === "e" ? "g" : "e")
          // }
          className="mt-5 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
        >
          {currentLanguage === "e" ? "Switch to German" : "Switch to English"}
        </button>
      </div>
    </div>
  );
}
