<script>
    import { Carousel } from "flowbite-svelte";
    import { theLanguage } from "../../store/store";

    const images = [
        { id: 0, attribution: "anait", imgurl: "/anait1.jpg" },
        { id: 2, attribution: "anait", imgurl: "/anait.jpeg" },
        { id: 2, attribution: "anait", imgurl: "/anait3.jpg" },
        { id: 2, attribution: "anait", imgurl: "/anait4.jpg" },
        { id: 1, attribution: "anait", imgurl: "/anait2.jpg" },
        { id: 2, attribution: "anait", imgurl: "/anait5.jpg" },
    ];
    let showThumbs = false;
    let showCaptions = false;

    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });
</script>

<div
    class="p-10 min-h-screen sm:min-h-[98.5vh] flex flex-col justify-center items-center"
>
    <h1 class="absolute top-20 font-sans font-bold">
        {#if currentLanguage === "e"}
            Gallery
        {:else}
            Galerie
        {/if}
    </h1>
    <div class="md:max-w-[30vw]">
        <Carousel {images} {showCaptions} {showThumbs} duration={3000} />
    </div>
    <button
        class="rounded-full px-2 py-1 bg-gradient-to-r from-yellow-100 via-yellow-150 to-yellow-200 absolute bottom-20 font-mono"
        >{#if currentLanguage === "e"}
            Download images here
        {:else}
            Laden Sie hier Bilder herunter
        {/if}
    </button>
</div>
