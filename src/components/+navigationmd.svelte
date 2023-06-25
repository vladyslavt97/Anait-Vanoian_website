<script>
    import { Motion } from "svelte-motion";
    import { theLanguage } from "../store/store";

    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });
</script>

<div
    class="w-[80vw] absolute left-32 top-3 flex flex-row justify-start gap-6 text-white overflow-hidden md:text-xs lg:text-sm"
>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        let:motion
    >
        <a use:motion href="/">
            {#if currentLanguage === "e"}
                Biography
            {:else}
                Biografie
            {/if}
        </a>
    </Motion>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        let:motion
    >
        <a use:motion href="/news">
            {#if currentLanguage === "e"}
                News
            {:else}
                Nachrichten
            {/if}
        </a>
    </Motion>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        let:motion
    >
        <a use:motion href="/schedule">
            {#if currentLanguage === "e"}
                Schedule
            {:else}
                Zeitplan
            {/if}
        </a>
    </Motion>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        let:motion
    >
        <a use:motion href="/gallery">
            {#if currentLanguage === "e"}
                Gallery
            {:else}
                Galerie
            {/if}
        </a>
    </Motion>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        let:motion
    >
        <a use:motion href="/videos"
            >{#if currentLanguage === "e"}
                Videos
            {:else}
                Videos
            {/if}
        </a>
    </Motion>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        let:motion
    >
        <a use:motion href="/contacts"
            >{#if currentLanguage === "e"}
                Contacts
            {:else}
                Kontakte
            {/if}
        </a>
    </Motion>
</div>
