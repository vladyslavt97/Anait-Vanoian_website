"use client";

import { useLanguage } from "../../libs/zustand";
import Image from "next/image";

export default function NewsPage() {
  const currentLanguage = useLanguage((state) => state.currentLanguage);

  const divsStyling =
    "relative rounded-2xl border drop-shadow-lg lg:w-1/3 max-w-96 flex justify-center items-center flex-col p-2";

  return (
    <div>
      <h1 className="relative top-14 text-center">
        {currentLanguage === "e" ? "News" : "Nachrichten"}
      </h1>

      <div className="px-10 mt-20 min-h-screen sm:min-h-[98.5vh] flex items-center justify-center gap-6 flex-wrap font-sans text-sm">
        {/* Concerts */}
        <div className={divsStyling}>
          <p>
            Fr 20.10.2023 20:00–21:45 Uhr | Großes Haus
            <br />
            <br />
            So 22.10.2023 19:00–20:45 Uhr | Großes Haus
            <br />
            <a
              href="https://www.staatstheater-cottbus.de/programm/philharmonisches-konzert/2-philharmonisches-konzert-spielzeit-23-24/"
              className="text-blue-500 italic underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Staatstheater Cottbus
            </a>
          </p>
        </div>

        {/* Workshop */}
        <div className={divsStyling}>
          <h2 className="text-center font-bold">Workshop Musik</h2>
          <p>11.11.2023 14.00 Uhr</p>
          <p>
            Die Workshopsbeschreibung: Die Stilistik durch Musik.
            <br />
            Moderatorin und Spielerin – Anait Vanoian
            <br />
            Assistenten: Vladyslav Tsurkanenko – Violin
            <br />
            Pavel Kuznetsov – Klavier
            <br />
            Idee: Zeigen unterschiedliche Spielartweise von Barock bis Modern.
            <br />
            <br />
            Es wird als Solo, Duo, Trio von uns gespielt. Und paar Kindern
            werden auch teilnehmen.
            <br />
            <br />
            Werke von Mozart, Bach, Beethoven, Händel, Igudesmann,
            Schostakowitsch usw.
            <br />
            <a
              href="https://www.musikschulebarnim.de/"
              className="text-blue-500 italic underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Musikschule Barnim Bernau
            </a>
          </p>
        </div>

        {/* Konzerthaus */}
        <div className={divsStyling}>
          <h2 className="text-center font-bold">
            17 Oktober 2023 Dienstag 20.00 UHR
          </h2>
          <p>
            <a
              href="https://www.konzerthaus.de/de/programm/berliner-konzert-chor/9681"
              className="text-blue-500 italic underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Konzerthaus Grosser Saal
            </a>
          </p>
        </div>

        {/* Prenzlau Konzert */}
        <div className={divsStyling}>
          <h2 className="text-center font-bold">
            Freitag – 13. Oktober 2023 – 19:30 Uhr
          </h2>
          <p>
            Veranstaltungsort:{" "}
            <a
              href="https://www.umkulturagenturpreussen.de/spielplan/detail-spielplan/konzerteihe-unterhaltung-1-konzert-schmuckstuecke/"
              className="text-blue-500 italic underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prenzlau, Kultur- und Plenarsaal
            </a>
          </p>
        </div>

        {/* Подяка */}
        <div className={divsStyling}>
          <h2 className="text-center">Подяка</h2>
          <Image
            src="/подяка.jpg"
            alt="подяка"
            className="pb-5 pt-3 px-2 md:h-80 object-contain"
            width={400}
            height={400}
          />
        </div>

        {/* Höcherbuch Video */}
        <div className={divsStyling}>
          <h2 className="text-center">Höcherbuch mit der Musik</h2>
          <iframe
            src="https://www.youtube.com/embed/QOlgSJZgGlw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video1"
            className="pb-5 pt-3 px-2 md:h-80 w-full"
          />
        </div>

        {/* Certificate */}
        <div className={divsStyling}>
          <h2 className="text-center">Certificate</h2>
          <Image
            src="/certificate.jpg"
            alt="document"
            className="pb-5 pt-3 px-2 md:h-80 object-contain"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
