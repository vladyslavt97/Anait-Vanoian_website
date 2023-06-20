<script>
    import { Motion } from "svelte-motion";
</script>

<div
    class="w-[80vw] absolute left-0 top-2 flex flex-row justify-evenly text-white overflow-hidden"
>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        let:motion
    >
        <a use:motion href="/">Bio</a>
    </Motion>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        let:motion
    >
        <a use:motion href="/news">News</a>
    </Motion>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        let:motion
    >
        <a use:motion href="/schedule">Schedule</a>
    </Motion>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        let:motion
    >
        <a use:motion href="/gallery">Gallery</a>
    </Motion>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        let:motion
    >
        <a use:motion href="/videos">Videos</a>
    </Motion>
    <Motion
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        let:motion
    >
        <a use:motion href="/contacts">Contacts</a>
    </Motion>
</div>
