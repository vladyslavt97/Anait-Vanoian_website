"use client";
import Image from "next/image";
import quartet_artists from "@/libs/quartet_artists.json";

export default function QuartetArtists() {
  return (
    <div className="md:flex md:flex-row md:justify-center md:items-center md:px-20 lg:px-36 flex-wrap">
      {quartet_artists.map((artist, index) => (
        <div
          key={artist.name}
          className={`grid grid-cols-2 sm:place-items-center md:justify-center md:flex md:flex-col md:gap-2 mx-5 my-5 md:items-center ${
            index % 2 === 0
              ? "bg-gray-200 rounded-xl shadow-lg"
              : "bg-slate-100 rounded-xl shadow-lg"
          }`}
        >
          {/* Bio + link */}
          <p className="font-sans mx-2 text-wrap">
            {artist.shortBio}{" "}
            {artist.name === "Anait_Vanoian" ? (
              <a className="text-blue-800 italic" href={`/`}>
                read more
              </a>
            ) : (
              <a
                className="text-blue-800 italic"
                href={`/D.U.R.Quartett/${artist.name}`}
              >
                read more
              </a>
            )}
          </p>

          {/* Image + role */}
          <div className={`w-40 ${index % 2 === 0 ? "order-first" : ""}`}>
            <Image
              src={artist.image}
              alt={artist.name}
              className="w-[200px] md:w-40 h-48 object-cover object-top rounded-tr rounded-tl shadow-2xl shadow-black"
            />
            <h2 className="md:w-40 bg-yellow-500 rounded-br rounded-bl text-center text-white">
              {artist.role}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
