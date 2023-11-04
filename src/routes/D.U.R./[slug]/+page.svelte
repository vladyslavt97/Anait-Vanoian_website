<script>
    import quartet_artists from "../../../libs/quartet_artists.json";
    import { page } from "$app/stores";

    const path = $page.params.slug;
    let currentArtist = { name: "", shortBio: "", longBio: "", image: "" };
    quartet_artists.map((a) => {
        if (a.name === path) {
            currentArtist = a;
            currentArtist.name = currentArtist.name.replace("_", " ");
        }
    });
</script>

<a class="absolute top-12 left-2" href="/D.U.R.">
    <img src="/backarrow.png" alt="backarrow" width="30" />
</a>
<div class="font-sans flex flex-col items-center">
    <h1 class="text-center mt-[100px] mb-5 text-lg font-bold">
        {currentArtist.name}
    </h1>
    <img
        src={currentArtist.image}
        alt={currentArtist.name}
        class="w-52 rounded-lg shadow-lg"
    />
    <p class="px-4 py-10">{currentArtist.longBio}</p>
</div>
