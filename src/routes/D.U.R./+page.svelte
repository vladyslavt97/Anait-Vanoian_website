<script>
    import { Motion } from "svelte-motion";
    import quartet_artists from "../../libs/quartet_artists.json";
    import Engagements from "../../components/+engagements.svelte";
    import { copy } from "svelte-copy";
</script>

<div class="min-h-screen sm:min-h-[98.5vh] flex flex-col gap-5 font-sans">
    <img
        src="./quartet/top.jpg"
        alt="Anait"
        class=" w-full object-cover rounded-br rounded-bl shadow-2xl shadow-black mt-10 sm:hidden"
        loading="eager"
    />
    <h1 class=" text-4xl text-black mt-5 sm:mt-16 text-center font-extrabold">
        D.U.R.<br />
        <span class="font-sans font-extralight text-2xl">Streichquartett</span>
    </h1>

    <div class="font-sans px-3 md:px-20 lg:px-36">
        <img
            src="./quartet/top.jpg"
            alt="Anait"
            class="hidden sm:block sm:relative left-1/2 transform -translate-x-1/2 w-full object-cover rounded-lg shadow-2xl shadow-black mb-5 max-w-[500px]"
            loading="eager"
        />
        <p>
            Das D.U.R. Quartett ist ein klassisches Streichquartett, und wurde
            in 2015 in Bremen gegründet. „D.U.R.“ steht für den fröhlichen
            Dur-Akkord, symbolisiert aber auch eine Idee des Friedens und der
            Kommunikation zwischen den Herkunftsländern der Mitglieder.
        </p>
        <br />
        <p>
            Durch die Initiative von Anait Vanoian fanden sich im August 2015
            vier junge professionelle Musiker zu einem Streichquartett zusammen,
            um an den internationalen Konzertarbeitswochen in Goslar
            teilzunehmen. Nach diesem wegweisenden Meisterkurs bei Prof. Oliver
            Wille und aufgrund von positiver Publikumsresonanz beschlossen die
            Masterstudierenden, das D.U.R. Quartett (Deutschland, Ukraine,
            Russland) zu gründen. Das Quartett wurde an der Hochschule für
            Künste Bremen von Thomas Klug begleitet und bekam weitere Anregungen
            durch einen Meisterkurs vom Curtis Institute of Music (USA), und
            durch Martin Funda von Armida-Quartett. Des Weiteren studieren sie
            seit Sommersemester 2017 an der Hochschule für Musik Hannover bei
            Prof. Oliver Wille, Kuss Quartett einen Kammermusikmaster.<br /><br
            />

            * Von 2016 bis 2018 hatten die die Möglichkeit vier Instrumente des
            berühmten italienischen Geigenbauers Alessandro Ciciliati zu spielen
            und zusammen mit der „Violin Assets“ Firma kooperieren.<br /><br />

            * Die Urkunde hat Mitglieder des DUR Quartetts im November 2017 am
            4. Brigitte-Kempen-Wettbewerb des Fördervereins der Musikhochschule
            in Aachen für Studierende der HfMT Köln teilgenommen und wird mit
            dem Zweiten Preis ausgezeichnet.<br /><br />

            * Im September 2018 nehmen die in einen Wettbewerb – „XXIII Premio
            Internazionale di Musica Gaetano Zinetti“ in Sanguinetto – Verona,
            Italien teil.<br /><br />
        </p>
    </div>

    <div class="md:flex md:flex-row md:justify-center md:items-center">
        <!-- Anait -->
        {#each quartet_artists as artist, index}
            <div
                class={`grid grid-cols-2 sm:place-items-center md:justify-center md:flex md:flex-col md:gap-2 mx-5 my-5 md:items-center
                ${
                    index % 2 === 0
                        ? "bg-gradient-to-t from-gray-200 via-orange-400/10 to-gray-800/50 rounded-lg md:bg-none"
                        : "order-first"
                }
                `}
            >
                <p class="font-sans mx-2 text-wrap">
                    {artist.shortBio}
                    {#if artist.name === "Anait_Vanoian"}
                        <a class="text-blue-800 italic" href={`/`}>
                            read more
                        </a>
                    {:else}
                        <a
                            class="text-blue-800 italic"
                            href={`/D.U.R./${artist.name}`}
                        >
                            read more
                        </a>
                    {/if}
                </p>
                <div class={`"w-40" ${index % 2 === 0 && "order-first"}`}>
                    <img
                        src={artist.image}
                        alt={artist.name}
                        class="w-[200px] md:w-40 h-48 object-cover object-top rounded-tr rounded-tl shadow-2xl shadow-black"
                    />
                    <h2
                        class=" md:w-40 bg-yellow-500 rounded-br rounded-bl text-center text-white"
                    >
                        {artist.role}
                    </h2>
                </div>
            </div>
        {/each}
    </div>

    <!-- Engagements -->
    <hr />
    <Engagements />

    <!-- Media -->
    <hr />
    <h2 class="text-center font-serif font-medium text-xl">Photos</h2>
    <div class="w-full flex flex-col gap-5">
        <img src="./quartetGallery/1.jpeg" alt="" class="rounded mx-10" />
        <img src="./quartetGallery/2.jpeg" alt="" class="rounded mx-10" />
        <img src="./quartetGallery/3.jpeg" alt="" class="rounded mx-10" />
    </div>

    <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        let:motion
    >
        <div
            use:motion
            class="flex flex-row justify-around items-center py-4 pt-16"
        >
            <a href="https://www.youtube.com/@anaitvanoian7094" target="_blank"
                ><img src="./youtube.png" alt="youtube" width="30px" /></a
            >
            <a href="https://www.facebook.com/D.U.R.Quartett" target="_blank"
                ><img src="./facebook.png" alt="facebook" width="30px" /></a
            >
            <div class="text-sm font-sans italic flex justify-center gap-2">
                <h4 use:copy={"dur.quartet@gmail.com"}>
                    dur.quartet@gmail.com
                </h4>
                <button use:copy={"dur.quartet@gmail.com"}
                    ><img src="/copy.png" width="20" />
                </button>
            </div>
        </div>
    </Motion>
</div>
