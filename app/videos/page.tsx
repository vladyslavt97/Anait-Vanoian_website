import Image from "next/image";
import Link from "next/link";

export default function VideosPage() {
    return (
        <div className="sm:min-h-[98.5vh] min-h-screen">
            <h1 className="pt-20 text-center font-sans font-bold">Videos</h1>

            <div className="flex flex-col justify-center items-center gap-5 pt-10 md:gap-20">
                <iframe
                    src="https://www.youtube.com/embed/mNagN4GNRXY"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="video1"
                    className="md:w-96 md:h-64 w-full h-60"
                />
                <iframe
                    src="https://www.youtube.com/embed/Zi6Iz1eLNoA"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="video2"
                    className="md:w-96 md:h-64 w-full h-60"
                />

                <Link
                    href="https://www.youtube.com/@anaitvanoian7094"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row gap-2 justify-center items-center py-10 md:pt-0"
                >
                    Watch more videos on
                    <Image
                        src="/youtube.png"
                        alt="youtube"
                        width="30"
                        height={30}
                    />
                </Link>
            </div>
        </div>
    );
}
