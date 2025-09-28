import quartet_artists from "@/libs/quartet_artists.json";
import Image from "next/image";

interface Artist {
  name: string;
  shortBio: string;
  longBio: string;
  image: string;
}

export default function ArtistPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  let currentArtist: Artist | undefined = quartet_artists.find(
    (a) => a.name === slug
  );

  if (!currentArtist) {
    return <div className="min-h-screen flex items-center justify-center">Artist not found</div>;
  }

  const displayName = currentArtist.name.replace("_", " ");

  return (
    <div className="min-h-screen">
      <a className="absolute top-12 left-2" href="/D.U.R.Quartett">
        <Image src="/backarrow.png" alt="backarrow" width={30} height={30} />
      </a>
      <div className="font-sans flex flex-col items-center">
        <h1 className="text-center mt-[100px] mb-5 text-lg font-bold">
          {displayName}
        </h1>
        <Image
          src={currentArtist.image}
          alt={displayName}
          width={208} // same as w-52
          height={208}
          className="rounded-lg shadow-lg"
        />
        <p className="px-4 py-10">{currentArtist.longBio}</p>
      </div>
    </div>
  );
}
