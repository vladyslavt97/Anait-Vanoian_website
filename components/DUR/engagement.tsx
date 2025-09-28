"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/libs/zustand";
import Link from "next/link";

export default function PastEngagements() {
  const { currentLanguage } = useLanguage();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="font-sans">
      <hr />
      <h2 className="text-center font-serif font-medium text-xl">
        {currentLanguage === "e" ? "Past Engagements" : "Vergangene Konzerte"}
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="ml-2"
        >
          {showMore ? "↓" : "→"}
        </button>
      </h2>

      <div className="md:flex md:px-20 lg:px-36">
        {showMore && (
          <div className="w-full">
            {/* --- Concert 3.12.2023 --- */}
            <div className="shadow-lg rounded border-2 border-yellow-500/20 p-2 m-2 flex flex-col md:flex-row justify-center gap-2 items-start">
              <div>
                <h1>
                  3.12.2023 {currentLanguage === "e" ? "at" : "um"} 18.00
                </h1>
                <Link
                  href="https://www.feuerlein-geigenakademie.de/"
                  target="_blank"
                  className="text-blue-500 italic normal-case"
                >
                  Feuerlein Geigenakademie
                </Link>
                <div className="flex gap-2">
                  <h2 className="italic">
                    Künstlerhof Alt - Lietzov 12, 10587 Berlin
                  </h2>
                  {/* Copy button */}
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "Künstlerhof Alt - Lietzov 12,10587 Berlin"
                      )
                    }
                  >
                    <Image
                      src="/copy.png"
                      width={18}
                      height={18}
                      alt="copy"
                    />
                  </button>
                </div>
                <div className="text-xs">
                  <p className="pb-2">
                    F. Mendelssohn – String Quartet in A minor, Op.13 - 1. Satz
                  </p>
                  <p className="pb-2">
                    Ph. Glass – String Quartet Nr.5 - 4. Satz
                  </p>
                  <p className="pb-2">
                    D. Klebanov - String Quartet Nr.4 - 1. Satz – Ukrainian
                    composer, famous theme Щедрик (folk Christmas song)
                  </p>
                  <p className="pb-2">
                    G. F. Haydn – String Quartet 'Sunrise' B Major - 1. Satz
                  </p>
                  <p className="pb-2">
                    A. Borodin – String Quartet Nr. 2 in D Major - 1. Satz
                  </p>
                  <p className="pb-2">
                    E. Grieg – String Quartet in G minor, Op.27 - 1. Satz
                  </p>
                  <p className="pb-2">
                    A. Dvorak – String Quartet Nr.12, Op.96 'American Quartet' -
                    2. und 3. Sätzen
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <br />
                <p className="text-center">Tickets 20€ (Ermäßigt 10€)</p>
                <Image
                  src="/poster3.12.jpg"
                  alt="poster 3.12.2023"
                  width={200}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* --- Concert 29.10.2023 --- */}
            <div className="shadow-lg rounded border-2 border-yellow-500/20 p-2 m-2">
              <h1>29.10.2023</h1>
              <Link
                href="http://das-gut.org/programm-upcoming.html"
                target="_blank"
                className="text-blue-500 italic"
              >
                Location
              </Link>
              <div className="text-xs">
                <p className="pb-2">
                  G. F. Haydn – String Quartet 'Sunrise' B Major - 1. Satz
                </p>
                <p className="pb-2">
                  A. Borodin – String Quartet Nr. 2 in D Major - 1. Satz
                </p>
                <p className="pb-2">
                  E. Grieg – String Quartet in G minor, Op.27 - 1. Satz
                </p>
                <p className="pb-2">
                  A. Dvorak – String Quartet Nr.12, Op.96 'American Quartet' - 2.
                  und 3. Sätzen
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
