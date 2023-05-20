<script>
    import { theNavigation } from "../store/store";
    import { Motion } from "svelte-motion";

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
                <a use:motion href="/" on:click={toggleTheNavigation}>Bio</a>
            </Motion>
            <Motion
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                let:motion
            >
                <a use:motion href="/news" on:click={toggleTheNavigation}
                    >News</a
                >
            </Motion>
            <Motion
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                let:motion
            >
                <a use:motion href="/schedule" on:click={toggleTheNavigation}
                    >Schedule</a
                >
            </Motion>
            <Motion
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                let:motion
            >
                <a use:motion href="/gallery" on:click={toggleTheNavigation}
                    >Gallery</a
                >
            </Motion>
            <Motion
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                let:motion
            >
                <a use:motion href="/videos" on:click={toggleTheNavigation}
                    >Videos</a
                >
            </Motion>
            <Motion
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                let:motion
            >
                <a use:motion href="/contacts" on:click={toggleTheNavigation}
                    >Contacts</a
                >
            </Motion>
        </div>
    </Motion>
{/if}
