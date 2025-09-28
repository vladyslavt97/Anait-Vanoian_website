"use client";

import { Carousel } from "react-responsive-carousel";
import { useLanguage} from "../../libs/zustand";
import Image from "next/image";
import MemoriesGallery from "@/components/memorriesgallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function GalleryPage() {
  const currentLanguage = useLanguage((state) => state.currentLanguage);

  const images = [
    { id: 0, attribution: "anait", imgurl: "/gallery/anait1.jpg" },
    { id: 1, attribution: "anait2", imgurl: "/gallery/anait2.jpg" },
    { id: 2, attribution: "anait2", imgurl: "/gallery/anait3.jpg" },
    { id: 3, attribution: "anait", imgurl: "/gallery/anait4.jpg" },
    { id: 4, attribution: "anait", imgurl: "/gallery/anait2.jpg" },
    { id: 5, attribution: "anait", imgurl: "/gallery/anait5.jpg" },
  ];

  return (
    <div className="p-10 min-h-screen sm:min-h-[98.5vh] flex flex-col justify-center items-center">
      <h1 className="font-sans font-bold my-5">
        {currentLanguage === "e" ? "Gallery" : "Galerie"}
      </h1>

      {/* Carousel */}
      <div className="md:max-w-[30vw] w-full">
        <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showIndicators
        showStatus={false}
        swipeable
        emulateTouch
        >
        {images.map((img) => (
            <div key={img.id} className="w-full aspect-[3/4] flex justify-center items-center">
            <Image
                src={img.imgurl}
                alt={img.attribution}
                className="w-full h-full object-cover rounded-lg shadow-md"
            />
            </div>
        ))}
        </Carousel>
      </div>

      {/* Download button */}
      <button className="rounded-full px-4 py-2 bg-gradient-to-r from-yellow-100 via-yellow-150 to-yellow-200 font-mono mt-5">
        {currentLanguage === "e"
          ? "Download images here"
          : "Laden Sie hier Bilder herunter"}
      </button>

      {/* Memories gallery */}
      <MemoriesGallery />
    </div>
  );
}
