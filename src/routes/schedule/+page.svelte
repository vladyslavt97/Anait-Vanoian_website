<script>
    import { SyncLoader } from 'svelte-loading-spinners';
    import { onMount } from "svelte";

    let theConcerts = [{date: "encrypted", location: "", programme: ""}];
    onMount(async()=>{
        try {
        const response = await fetch('/api/getconcerts');
            if (response.ok) {
                theConcerts = await response.json();
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
        console.error('error', error);
        }
    })
    
</script>

<div class="flex flex-col justify-center absolute left-16 gap-5 pb-20 font-sans min-h-screen sm:min-h-[98.5vh]">
    <h1 class="mt-20 font-bold text-center absolute top-0">Schedule</h1>
    
    {#if theConcerts[0].date === "encrypted"}
        <p><SyncLoader color="#ff9500"/></p>
    {:else}
        {#each theConcerts as concert}
            <div>
                <h2 class="font-bold text-yellow-400">{concert.date}</h2>
                <h3 class="italic">{concert.location}</h3>
                {#each concert.programme as programItem}
                    <li>{programItem}</li>
                {/each}
                <br/>
            </div>
        {/each}
    {/if}
</div>

