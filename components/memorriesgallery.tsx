"use client";

type ImageType = {
  src: string;
  alt: string;
  position: "top" | "bottom" | "center";
};

const images: ImageType[] = [
  { src: "/gallery2/m1.jpg", alt: "Gallery image 1", position: "center" },
  { src: "/gallery2/m2.jpg", alt: "Gallery image 2", position: "center" },
  { src: "/gallery2/m4.jpg", alt: "Gallery image 4", position: "top" },
  { src: "/gallery2/m5.jpg", alt: "Gallery image 5", position: "top" },
  { src: "/gallery2/m6.jpg", alt: "Gallery image 6", position: "top" },
  { src: "/gallery2/m7.jpg", alt: "Gallery image 7", position: "bottom" },
  { src: "/gallery2/m8.jpg", alt: "Gallery image 8", position: "top" },
  { src: "/gallery2/m9.jpg", alt: "Gallery image 9", position: "center" },
  { src: "/gallery2/m10.jpg", alt: "Gallery image 10", position: "top" },
  { src: "/gallery2/m11.jpg", alt: "Gallery image 11", position: "center" },
  { src: "/gallery2/m12.jpg", alt: "Gallery image 12", position: "top" },
  { src: "/gallery2/m13.jpg", alt: "Gallery image 13", position: "top" },
  { src: "/gallery2/m14.jpg", alt: "Gallery image 14", position: "top" },
  { src: "/gallery2/m15.jpg", alt: "Gallery image 15", position: "center" },
  { src: "/gallery2/m16.jpg", alt: "Gallery image 16", position: "top" },
  { src: "/gallery2/m17.jpg", alt: "Gallery image 17", position: "top" },
  { src: "/gallery2/m18.jpg", alt: "Gallery image 18", position: "top" },
  { src: "/gallery2/m19.jpg", alt: "Gallery image 19", position: "bottom" },
  { src: "/gallery2/m20.jpg", alt: "Gallery image 20", position: "bottom" },
  { src: "/gallery2/m21.jpg", alt: "Gallery image 21", position: "center" },
  { src: "/gallery2/m22.jpg", alt: "Gallery image 22", position: "center" },
  { src: "/gallery2/m23.jpg", alt: "Gallery image 23", position: "top" },
  { src: "/gallery2/m24.jpg", alt: "Gallery image 24", position: "center" },
  { src: "/gallery2/m25.jpg", alt: "Gallery image 25", position: "top" },
  { src: "/gallery2/m26.jpg", alt: "Gallery image 26", position: "top" },
  { src: "/gallery2/m27.jpg", alt: "Gallery image 27", position: "top" },
  { src: "/gallery2/m28.jpg", alt: "Gallery image 28", position: "top" },
  { src: "/gallery2/m29.jpg", alt: "Gallery image 29", position: "top" },
  { src: "/gallery2/m30.jpg", alt: "Gallery image 30", position: "center" },
  { src: "/gallery2/m31.jpg", alt: "Gallery image 31", position: "top" },
  { src: "/gallery2/m32.jpg", alt: "Gallery image 32", position: "top" },
  { src: "/gallery2/m33.jpg", alt: "Gallery image 33", position: "top" },
  { src: "/gallery2/m34.jpg", alt: "Gallery image 34", position: "top" },
  { src: "/gallery2/m35.jpg", alt: "Gallery image 35", position: "top" },
  { src: "/gallery2/m36.jpg", alt: "Gallery image 36", position: "top" },
  { src: "/gallery2/m37.jpg", alt: "Gallery image 37", position: "top" },
  { src: "/gallery2/m38.jpg", alt: "Gallery image 38", position: "top" },
  { src: "/gallery2/m39.jpg", alt: "Gallery image 39", position: "top" },
  { src: "/gallery2/m40.jpg", alt: "Gallery image 40", position: "top" },
  { src: "/gallery2/m41.jpg", alt: "Gallery image 41", position: "top" },
  { src: "/gallery2/m42.jpg", alt: "Gallery image 42", position: "top" },
  { src: "/gallery2/m43.jpg", alt: "Gallery image 43", position: "top" },
];

export default function Gallery() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`w-full h-[300px] object-cover rounded-lg shadow-md object-${image.position}`}
        />
      ))}
    </div>
  );
}
