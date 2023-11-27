<script>
    import { Motion } from "svelte-motion";
    import IoMdCloudDownload from "svelte-icons/io/IoMdCloudDownload.svelte";
    import { theLanguage } from "../store/store";
    import Biodeutsch from "../components/+biodeutsch.svelte";
    import Bioenglish from "../components/+bioenglish.svelte";

    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });
</script>

<div class="min-h-screen sm:min-h-[98.5vh]">
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
            <a href="https://www.youtube.com/@anaitvanoian7094" target="_blank"
                ><img src="./youtube.png" alt="youtube" width="30px" /></a
            >
            <a href="https://www.facebook.com/anait.vanoyan" target="_blank"
                ><img src="./facebook.png" alt="facebook" width="30px" /></a
            >
            <a
                href="https://www.instagram.com/anaitvioline/?igshid=ZGUzMzM3NWJiOQ%3D%3D"
                target="_blank"
                ><img src="./instagram.png" alt="instagram" width="30px" /></a
            >
            <a
                href="https://soundcloud.com/anaitvanoian/anait-vanoian-m-karminsky-the-jewish-prayer"
                target="_blank"
                ><img src="./soundcloud.png" alt="instagram" width="55px" /></a
            >
        </div>
    </Motion>
    <div>
        <h1 class="text-center my-7">
            {#if currentLanguage === "e"}
                Biography
            {:else}
                Biografie
            {/if}
        </h1>
        <Motion
            initial={{ opacity: 0.8, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            let:motion
        >
            <img
                use:motion
                src="/anait4.jpg"
                alt="somename"
                class=" drop-shadow-2xl rounded float-left ml-5 mr-3 sm:ml-16 lg:ml-44 lg:mr-6 opacity-0 transition-opacity duration-3000 md:w-[300px]"
                width="170px"
                loading="eager"
            />
        </Motion>

        {#if currentLanguage === "e"}
            <Bioenglish />
        {:else}
            <Biodeutsch />
        {/if}
    </div>

    <div class="flex justify-center pb-20 sm:pb-10">
        {#if currentLanguage === "e"}
            <a
                href="/Anait_CV _ENG.pdf"
                download
                class="flex flex-row items-center gap-4"
                >Download CV
                <div class="w-10">
                    <IoMdCloudDownload />
                </div>
            </a>
        {:else}
            <a
                href="/CV_Anait_Vanoian.pdf"
                download
                class="flex flex-row items-center gap-4"
                >Lebenslauf herunterladen
                <div class="w-10">
                    <IoMdCloudDownload />
                </div>
            </a>
        {/if}
    </div>
</div>
