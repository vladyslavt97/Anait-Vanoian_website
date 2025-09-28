"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 👈 import carousel styles
import Image from "next/image";

export default function QuartetPhotos() {
  const images = [
    { id: 0, attribution: "anait", imgurl: "/quartet/durbg.png" },
    { id: 1, attribution: "anait", imgurl: "/quartet/durbg2.png" },
    { id: 2, attribution: "anait", imgurl: "/quartetGallery/3.jpeg" },
    { id: 3, attribution: "anait", imgurl: "/quartetGallery/2.jpeg" },
    { id: 4, attribution: "anait", imgurl: "/quartetGallery/2.jpeg" },
  ];

  return (
    <div className="text-center font-serif font-medium text-xl">
      <hr />
      <h2 className="my-4">Photos</h2>

      <div className="md:max-w-[30vw] m-auto p-3">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showThumbs={false}
          showIndicators={true}
          showStatus={false}
          swipeable
          emulateTouch
        >
          {images.map((img) => (
            <div key={img.id}>
              <Image
                src={img.imgurl}
                alt={img.attribution}
                width={800}
                height={600}
                className="rounded-lg object-contain"
                priority={img.id === 0}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
