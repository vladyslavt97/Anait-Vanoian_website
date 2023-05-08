<script>
    import { theNavigation } from "../store/store";
    import { Motion } from "svelte-motion";

    let navigationState = false;
    theNavigation.subscribe(value => {
        navigationState = value;
    });

    const toggleTheNavigation = () => {
        theNavigation.update((value) => !value);
    };

</script>

{#if navigationState}
    <Motion
    initial={{width:0}}
    animate={{width:"100vw"}}
    transition={{duration:1}}
    let:motion
    >
        <div use:motion class="w-screen h-[95vh] bg-[#3a3a3a] absolute top-10 left-0 flex flex-col justify-around items-center pb-28 text-white overflow-hidden " on:click={toggleTheNavigation} on:keydown={toggleTheNavigation}>
            <a href="/" on:click={toggleTheNavigation}>Home</a>
            <!-- <a href="/bio" on:click={toggleTheNavigation}>Bio</a> -->
            <a href="/schedule" on:click={toggleTheNavigation}>Schedule</a>
            <a href="/gallery" on:click={toggleTheNavigation}>Gallery</a>
            <a href="/videos" on:click={toggleTheNavigation}>Videos</a>
            <a href="/contacts" on:click={toggleTheNavigation}>Contacts</a>
        </div>
    </Motion>
{/if}