<script>
    import VideosDur from "../../libs/durVideos.json";
</script>

<hr />
<h2 class="text-center font-serif font-medium text-xl">Videos</h2>
<div class="w-full flex flex-col md:flex-row gap-5 flex-wrap md:px-20 lg:px-36">
    {#each VideosDur as video}
        <iframe
            src={`https://www.youtube.com/embed/${video.url}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="video1"
            class="md:w-96 md:h-64 rounded-xl mx-auto shadow-2xl"
        />
    {/each}
</div>
