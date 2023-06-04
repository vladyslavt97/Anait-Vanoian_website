<script>
    import { SyncLoader } from "svelte-loading-spinners";
    import { onMount } from "svelte";
    import { Motion } from "svelte-motion";

    let theConcerts = [
        { date: "stillLoading", location: "", programme: "", url: "" },
    ];
    onMount(async () => {
        try {
            const response = await fetch("/api/getconcerts");
            if (response.ok) {
                theConcerts = await response.json();
            } else {
                throw new Error("Failed to fetch data");
            }
        } catch (error) {
            console.error("error", error);
        }
    });
</script>

<div
    class="flex flex-col justify-center items-center gap-5 pb-20 font-sans min-h-screen sm:min-h-[98.5vh]"
>
    <h1 class="mt-20 font-bold text-center absolute top-0">Schedule</h1>

    {#if theConcerts[0].date === "stillLoading"}
        <p class="">
            <SyncLoader color="#ff9500" />
        </p>
    {:else}
        <div class="mt-20">
            {#each theConcerts as concert}
                <Motion
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    let:motion
                >
                    <div class="mx-auto" use:motion>
                        <h2 class="font-bold text-yellow-400">
                            {concert.date}
                        </h2>
                        <h3 class="italic">{concert.location}</h3>
                        {#each concert.programme as programItem}
                            <li>{programItem}</li>
                        {/each}
                        <br />
                        {#if concert.url}
                            <img src={concert.url} alt="poster" />
                        {/if}
                    </div>
                </Motion>
            {/each}
        </div>
    {/if}
</div>
