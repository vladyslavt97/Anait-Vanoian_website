<script>
    import { Motion } from "svelte-motion";
    const imageStyle =
        "w-[200px] md:w-40 h-48 object-cover rounded-tr rounded-tl shadow-2xl shadow-black";

    const musiciansDivs =
        "flex justify-center md:flex-col gap-2 mx-5 my-5 md:items-center";
</script>

<div class="min-h-screen sm:min-h-[98.5vh] flex flex-col gap-5">
    <img
        src="./quartet/header.png"
        width="200"
        height="200"
        alt="Anait"
        class=" w-full object-cover rounded-br rounded-bl shadow-2xl shadow-black mt-10"
        loading="eager"
    />
    <h1 class=" text-4xl text-black mt-5 text-center font-extrabold">
        D.U.R.<br />
        <span class="font-sans font-extralight text-2xl">Berlin Quartett</span>
    </h1>

    <div class="font-sans px-3 md:px-20 lg:px-36">
        <p>
            Das D.U.R. Quartett ist ein klassisches Streichquartett, und wurde
            in 2015 in Bremen gegründet. „D.U.R.“ steht für den fröhlichen
            Dur-Akkord, symbolisiert aber auch eine Idee des Friedens und der
            Kommunikation zwischen den Herkunftsländern der Mitglieder.
        </p>

        <h2 class="font-bold mt-5 text-lg">Geschichte</h2>
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
        <div class={musiciansDivs}>
            <p class=" font-sans">
                Anait Vanoian<br />
                is the leader of the quartett...
            </p>
            <div class="w-[200px] md:w-40">
                <img src="./anait.jpeg" alt="Anait" class={imageStyle} />
                <h2
                    class="bg-yellow-500 rounded-br rounded-bl text-center text-white"
                >
                    Violin I
                </h2>
            </div>
        </div>

        <!-- Vlad -->
        <div class={musiciansDivs}>
            <div class="w-[200px] md:w-40">
                <img src="./quartet/vlad.jpg" alt="Anait" class={imageStyle} />
                <h2
                    class="bg-yellow-500 rounded-br rounded-bl text-center text-white"
                >
                    Violin II
                </h2>
            </div>
            <p class=" font-sans">
                Vladyslav Tsurkanenko<br />
                is a Ukrainian-Bulgarian violinist...
            </p>
        </div>

        <!-- Anastasia -->
        <div class={musiciansDivs}>
            <p class=" font-sans">
                Anastasia Kuleva<br />
                is a Ukrainian violist..
            </p>
            <div class=" w-[200px] md:w-40">
                <img
                    src="./quartet/Anastasia.jpg"
                    alt="Anastasia"
                    class={imageStyle}
                />
                <h2
                    class="bg-yellow-500 rounded-br rounded-bl text-center text-white"
                >
                    Viola
                </h2>
            </div>
        </div>

        <!-- Tobias -->
        <div class={musiciansDivs}>
            <div class="w-[200px] md:w-40">
                <img
                    src="./quartet/Tobias.jpeg"
                    alt="Tobias"
                    class={imageStyle}
                />
                <h2
                    class="bg-yellow-500 rounded-br rounded-bl text-center text-white"
                >
                    Cello
                </h2>
            </div>
            <p class=" font-sans">
                Tobias Hoffmann<br />
                is a German cellist..
            </p>
        </div>
    </div>

    <!-- Programme -->
    <hr />
    <div class="w-full">
        <h2 class="text-center font-serif font-medium text-xl">Engagements</h2>
    </div>

    <!-- Media -->
    <hr />
    <div class="w-full">
        <h2 class="text-center font-serif font-medium text-xl">Photos</h2>
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
            <h4 class="text-sm font-sans italic">
                dasd.u.r.quartett@gmail.com
            </h4>
        </div>
    </Motion>
</div>
