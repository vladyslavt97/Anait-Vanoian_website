<script>
    import { theNavigation } from "../store/store";
    import { Motion } from "svelte-motion";
    import { theLanguage } from "../store/store";

    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });
    let navigationState = false;
    theNavigation.subscribe((value) => {
        navigationState = value;
    });

    const toggleTheNavigation = () => {
        theNavigation.update((value) => !value);
    };
</script>

{#if navigationState}
    <Motion
        initial={{ width: 0 }}
        animate={{ width: "100vw" }}
        transition={{ duration: 1 }}
        let:motion
    >
        <div
            use:motion
            class="w-screen h-screen bg-[#3a3a3a] absolute top-[4vh] left-0 flex flex-col justify-around items-center pb-28 text-white overflow-hidden"
            on:click={toggleTheNavigation}
            on:keydown={toggleTheNavigation}
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
                transition={{ duration: 1, delay: 0.3 }}
                let:motion
            >
                <a use:motion href="/D.U.R.Quartett" class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-extrabold text-lg font-serif">
                    {#if currentLanguage === "e"}
                        D.U.R. Quartet
                    {:else}
                        D.U.R. Quartett
                    {/if}
                </a>
            </Motion>
            <Motion
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                let:motion
            >
                <a use:motion href="/concerts">
                    {#if currentLanguage === "e"}
                        Concerts
                    {:else}
                        Konzerte
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
                <a use:motion href="/email"
                    >{#if currentLanguage === "e"}
                        Contacts
                    {:else}
                        Kontakte
                    {/if}
                </a>
            </Motion>
        </div>
    </Motion>
{/if}
