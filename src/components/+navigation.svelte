<script>
    import { theNavigation } from "../store/store";
    import { Motion } from "svelte-motion";

    let navigationState = false;
    theNavigation.subscribe(value => {
        console.log("theNavigation value:", value);
        navigationState = value;
    });

</script>

{#if navigationState}
    <Motion
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    let:motion
    >
        <div use:motion class="w-screen h-full bg-[#3a3a3a] absolute top-10 left-0 flex flex-col justify-around items-center pb-28 text-white">
            <a href="/">Home</a>
            <a href="/bio">Bio</a>
            <a href="/schedule">Schedule</a>
            <a href="/gallery">Gallery</a>
            <a href="/contacts">Contacts</a>
        </div>
    </Motion>
{/if}