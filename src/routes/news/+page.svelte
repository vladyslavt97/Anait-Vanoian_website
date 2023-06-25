<script>
    import { theLanguage } from "../../store/store";
    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });
</script>

<h1 class="relative top-12 text-center">
    {#if currentLanguage === "e"}
        News
    {:else}
        Nachrichten
    {/if}
</h1>
<div
    class="p-16 min-h-screen sm:min-h-[98.5vh] flex items-center justify-center gap-5 flex-wrap md:flex-nowrap"
>
    <div
        class="relative rounded-2xl border drop-shadow-lg w-full lg:w-1/2 md:h-96 md:w-96 flex justify-center items-center flex-col"
    >
        <h2 class="text-center">Подяка</h2>
        <img
            src="/подяка.jpg"
            alt="подяка"
            class="pb-5 pt-3 px-2 md:h-80 object-contain"
        />
    </div>

    <div
        class="relative rounded-2xl border drop-shadow-lg w-full lg:w-1/2 mt-4 md:mt-0 md:h-96 md:w-96 flex justify-center items-center flex-col"
    >
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

    <div
        class="relative rounded-2xl border drop-shadow-lg w-full lg:w-1/2 mt-4 md:mt-0 md:h-96 md:w-96 flex justify-center items-center flex-col"
    >
        <h2 class="text-center">Certificate</h2>
        <img
            src="/certificate.jpg"
            alt="подяка"
            class="pb-5 pt-3 px-2 md:h-80 object-contain"
        />
    </div>
</div>
