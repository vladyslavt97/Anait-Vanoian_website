<script>
    import { theLanguage } from "../../store/store";
    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });

    const divsStyling =
        "relative rounded-2xl border drop-shadow-lg lg:w-1/3 max-w-96 flex justify-center items-center flex-col p-2";
</script>

<h1 class="relative top-14 text-center">
    {#if currentLanguage === "e"}
        News
    {:else}
        Nachrichten
    {/if}
</h1>
<div
    class="px-10 mt-20 min-h-screen sm:min-h-[98.5vh] flex items-center justify-center gap-6 flex-wrap font-sans text-sm"
>
    <div class={divsStyling}>
        <h2 class="text-center font-bold">Workshop Musik</h2>
        <p>11.11.2023 14.00 Uhr</p>
        <p>
            Die Workshopsbeschreibung: Die Stilistik durch Musik.<br />
            Moderatorin und Spielerin - Anait Vanoian<br />
            Assistenten: Vladyslav Tsurkanenko - Violin<br />
            Pavel Kuznetsov - Klavier<br />
            Idee: Zeigen unterschiedliche Spielartweise von Barock bis Modern.
            <br /><br />Es wird als Solo, Duo, Trio von uns gespielt. Und paar
            Kindern werden auch teilnehmen.
            <br /><br />Die Werke von Mozart, Bach, Beethoven, Handel,
            Igudesmann, Schostakowitsch usw.
            <a
                href="https://www.musikschulebarnim.de/"
                class="text-blue-500 italic underline"
            >
                Musikschule Barnim Bernau
            </a>
        </p>
    </div>

    <div class={divsStyling}>
        <h2 class="text-center font-bold">
            17 Oktober 2023 Dienstag 20.00 UHR
        </h2>
        <p>
            <a
                href="https://www.konzerthaus.de/de/programm/berliner-konzert-chor/9681"
                class="text-blue-500 italic underline"
                >Konzerthaus Grosser Saal</a
            >
        </p>
    </div>
    <div class={divsStyling}>
        <h2 class="text-center font-bold">
            Freitag - 13. Oktober 2023 - 19:30 Uhr
        </h2>
        <p>
            Veranstaltungsort:
            <a
                href="https://www.umkulturagenturpreussen.de/spielplan/detail-spielplan/konzerteihe-unterhaltung-1-konzert-schmuckstuecke/"
                class="text-blue-500 italic underline"
                >Prenzlau, Kultur- und Plenarsaal</a
            >
        </p>
    </div>

    <div class={divsStyling}>
        <h2 class="text-center">Подяка</h2>
        <img
            src="/подяка.jpg"
            alt="подяка"
            class="pb-5 pt-3 px-2 md:h-80 object-contain"
        />
    </div>

    <div class={divsStyling}>
        <h2 class="text-center">Höcherbuch mit der Musik</h2>
        <iframe
            src="https://www.youtube.com/embed/QOlgSJZgGlw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="video1"
            class="pb-5 pt-3 px-2 md:h-80 w-full"
        />
    </div>

    <div class={divsStyling}>
        <h2 class="text-center">Certificate</h2>
        <img
            src="/certificate.jpg"
            alt="document"
            class="pb-5 pt-3 px-2 md:h-80 object-contain"
        />
    </div>
</div>
