<script>
    import quartet_artists from "../../libs/quartet_artists.json";
</script>

<div class="md:flex md:flex-row md:justify-center md:items-center">
    {#each quartet_artists as artist, index}
        <div
            class={`grid grid-cols-2 sm:place-items-center md:justify-center md:flex md:flex-col md:gap-2 mx-5 my-5 md:items-center
                ${
                    index % 2 === 0
                        ? " bg-gray-200 rounded-xl shadow-lg"
                        : " bg-slate-100 rounded-xl shadow-lg"
                }
                `}
        >
            <p class="font-sans mx-2 text-wrap">
                {artist.shortBio}
                {#if artist.name === "Anait_Vanoian"}
                    <a class="text-blue-800 italic" href={`/`}> read more </a>
                {:else}
                    <a
                        class="text-blue-800 italic"
                        href={`/D.U.R.Quartett/${artist.name}`}
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
