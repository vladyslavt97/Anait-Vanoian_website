<script>
    import { Carousel } from "flowbite-svelte";
    const images = [
        { id: 0, attribution: "anait", imgurl: "./quartet/durbg.png" },
        { id: 1, attribution: "anait", imgurl: "./quartet/durbg2.png" },
        { id: 2, attribution: "anait", imgurl: "./quartetGallery/3.jpeg" },
        { id: 3, attribution: "anait", imgurl: "./quartetGallery/2.jpeg" },
        { id: 4, attribution: "anait", imgurl: "./quartetGallery/2.jpeg" },
    ];
    let showThumbs = false;
    let showCaptions = false;
</script>

<hr />
<h2 class="text-center font-serif font-medium text-xl">Photos</h2>
<div class="md:max-w-[30vw] m-auto p-3">
    <Carousel {images} {showCaptions} {showThumbs} duration={3000} />
</div>
