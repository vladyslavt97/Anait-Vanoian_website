<script>
    import { SyncLoader } from "svelte-loading-spinners";
    import { Motion } from "svelte-motion";
    import { theLanguage } from "../../store/store";
    import theConcerts from "../../libs/concerts.json";

    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });
</script>

<div class="flex flex-col justify-center items-center gap-10 mb-32 font-sans min-h-screen sm:min-h-[98.5vh]">
    {#if theConcerts.length === 0}
        <p><SyncLoader color="#ff9500" /></p>
    {:else}
        <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            let:motion
        >
            <h1 use:motion class="font-bold text-center relative top-20">
                {#if currentLanguage === "e"}
                    Concerts
                {:else}
                    Konzerte
                {/if}
            </h1>
        </Motion>

        <div class="relative top-16 mx-10 w-full px-10 max-w-[600px]">
            {#each theConcerts as concert}
                <Motion
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    let:motion
                >
                    <div
                        class="rounded-2xl border drop-shadow-lg p-4 mb-5 flex flex-col items-center"
                        use:motion
                    >
                        <h2 class="font-bold text-yellow-400 text-center">
                            {concert.title}
                        </h2>

                        {#if concert.date}
                            <p class="italic">{concert.date}</p>
                        {/if}

                        {#if concert.dates}
                            <ul class="text-sm">
                                {#each concert.dates as d}
                                    <li>{d}</li>
                                {/each}
                            </ul>
                        {/if}

                        {#if concert.location}
                            <h3 class="italic">{concert.location}</h3>
                        {/if}

                        {#if concert.programme}
                            <ul class="text-sm">
                                {#each concert.programme as item}
                                    {#if item && item.trim() !== ""}
                                        <li>{item}</li>
                                    {/if}
                                {/each}
                            </ul>
                        {/if}

                        {#if concert.conductor}
                            <p><strong>Conductor:</strong> {concert.conductor}</p>
                        {/if}

                        {#if concert.concerts}
                            <div class="mt-3 w-full">
                                {#each concert.concerts as sub}
                                    <div class="border-t pt-2 mt-2">
                                        <p class="font-semibold">
                                            {sub.number}. {sub.name}
                                        </p>
                                        <ul class="text-sm">
                                            {#each sub.dates as d}
                                                <li>{d}</li>
                                            {/each}
                                        </ul>
                                    </div>
                                {/each}
                            </div>
                        {/if}

                        {#if concert.url}
                            <a
                                href={concert.url}
                                target="_blank"
                                class="mt-2 text-blue-600 underline"
                            >
                                More info
                            </a>
                        {/if}
                    </div>
                </Motion>
            {/each}
        </div>
    {/if}
</div>
