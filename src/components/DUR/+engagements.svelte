<script>
    import { copy } from "svelte-copy";
    import { theLanguage } from "../../store/store";

    let currentLanguage = "g";
    let showMore = false;

    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });

    function toggleShowMore() {
        showMore = !showMore;
    }
</script>

<hr />
<h2 class="text-center font-serif font-medium text-xl">
    {#if currentLanguage === "e"}
        Past Engagements
    {:else}
        Vergangene Konzerte
    {/if}
    <button on:click={toggleShowMore} class="ml-2">
        {#if showMore}
            ↓
        {:else}
            →
        {/if}
    </button>
</h2>

<div class="md:flex md:px-20 lg:px-36">
    {#if showMore}
    <div class="w-full">
        <div class="shadow-lg rounded border-2 border-yellow-500/20 p-2 m-2 flex flex-col md:flex-row justify-center gap-2 items-start">
            <div>
                <h1>3.12.2023 {#if currentLanguage === "e"} at {:else} um {/if} 18.00</h1>
                <a href="https://www.feuerlein-geigenakademie.de/" target="_blank" class="text-blue-500 italic normal-case">
                    Feuerlein Geigenakademie
                </a>
                <div class="flex gap-2">
                    <h2 class="italic">Künstlerhof Alt - Lietzov 12,10587 Berlin</h2>
                    <div use:copy={"Künstlerhof Alt - Lietzov 12,10587 Berlin"}>
                        <img src="/copy.png" width="18" alt="copy" />
                    </div>
                </div>
                <div class="text-xs">
                    <p class="pb-2">F.Mendelssohn – String Quartet in A minor, Op.13 - 1. Satz</p>
                    <p class="pb-2">Ph.Glass – String Quartet Nr.5 - 4. Satz</p>
                    <p class="pb-2">D. Klebanov - String Quartet Nr.4 - 1. Satz - ukrainischer Komponist, die berühmte Thema Щедрик - Folks Weihnachtslied</p>
                    <p class="pb-2">G.F.Haydn – String Quartet 'Sunrise' B Major - 1. Satz</p>
                    <p class="pb-2">A.Borodin – String Quartet Nr. 2 in D Major - 1. Satz</p>
                    <p class="pb-2">E.Grieg – String Quartet in G minor, Op.27 - 1. Satz</p>
                    <p class="pb-2">A.Dvorak – String Quartet Nr.12, Op.96 'American Quartet' - 2. und 3. Sätzen</p>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center w-full">
                <br />
                <p class="text-center">Tickets 20€ (Ermäßigt 10€)</p>
                <img src="/poster3.12.jpg" alt="poster 3.12.2023" class="rounded-lg" width="200" />
            </div>
        </div>
        <div class="shadow-lg rounded border-2 border-yellow-500/20 p-2 m-2">
            <h1>29.10.2023</h1>
            <a href="http://das-gut.org/programm-upcoming.html" target="_blank" class="text-blue-500 italic">Location</a>
            <div class="text-xs">
                <p class="pb-2">G.F.Haydn – String Quartet 'Sunrise' B Major - 1. Satz</p>
                <p class="pb-2">A.Borodin – String Quartet Nr. 2 in D Major - 1. Satz</p>
                <p class="pb-2">E.Grieg – String Quartet in G minor, Op.27 - 1. Satz</p>
                <p class="pb-2">A.Dvorak – String Quartet Nr.12, Op.96 'American Quartet' - 2. und 3. Sätzen</p>
            </div>
        </div>
    </div>
    {/if}
</div>
    