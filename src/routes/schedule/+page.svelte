<script>
    import { onMount } from "svelte";

    onMount(async()=>{
        try {
        const response = await fetch('/api/getconcerts');
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
        console.error('error', error);
        }
    })
    
</script>

<div class="flex flex-col items-center gap-5 pb-20 font-sans min-h-screen sm:min-h-[98.5vh]">
    <h1 class="mt-20 font-bold">Schedule</h1>
    <div>
        <h2 class="font-bold text-yellow-400">12.05.2023</h2>
        <h3 class="italic">New York City</h3>
        <li>Bach Concerto for Two Violins</li>
        <li>Louis Spohr - Duo I for Two Violins, Op. 67</li>
        <li>Vivaldi - Concerto for Two Violins in A Minor</li>
        <br/>
        <h2 class="font-bold text-yellow-400">13.05.2023</h2>
        <h3 class="italic">New York City</h3>
        <li>Bach Concerto for Two Violins</li>
        <li>Louis Spohr - Duo I for Two Violins, Op. 67</li>
        <li>Vivaldi - Concerto for Two Violins in A Minor</li>
    </div>
</div>

