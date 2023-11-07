<script>
    import { Motion } from "svelte-motion";
    import Engagements from "../../components/DUR/+engagements.svelte";
    import { copy } from "svelte-copy";
    import VideosDur from "../../components/DUR/+videosDur.svelte";
    import GalleryDur from "../../components/DUR/+galleryDur.svelte";
    import DurArtist from "../../components/DUR/+durArtist.svelte";
    import DurHistory from "../../components/DUR/+durHistory.svelte";
</script>

<div class="min-h-screen sm:min-h-[98.5vh] flex flex-col gap-5 font-sans">
    <img
        src="./quartet/top.jpg"
        alt="Anait"
        class=" w-full object-cover rounded-br rounded-bl shadow-2xl shadow-black mt-10 sm:hidden"
        loading="eager"
    />
    <h1 class=" text-4xl text-black mt-5 sm:mt-16 text-center font-extrabold">
        D.U.R.<br />
        <span class="font-sans font-extralight text-2xl">Streichquartett</span>
    </h1>

    <DurHistory />

    <DurArtist />

    <!-- Engagements -->
    <Engagements />

    <!-- Media -->
    <GalleryDur />
    <VideosDur />

    <!-- Contacts -->
    <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        let:motion
    >
        <div
            use:motion
            class="flex flex-row justify-around items-center py-4 pt-16"
        >
            <a
                href="https://www.youtube.com/channel/UC_5Ggn_4tyUS-udJMihuX4g"
                target="_blank"
                ><img src="./youtube.png" alt="youtube" width="30px" /></a
            >
            <a href="https://www.facebook.com/D.U.R.Quartett" target="_blank"
                ><img src="./facebook.png" alt="facebook" width="30px" /></a
            >
            <div class="text-sm font-sans italic flex justify-center gap-2">
                <h4 use:copy={"dur.quartet@gmail.com"}>
                    dur.quartet@gmail.com
                </h4>
                <button use:copy={"dur.quartet@gmail.com"}
                    ><img src="/copy.png" width="20" alt="copy" />
                </button>
            </div>
        </div>
    </Motion>
</div>
