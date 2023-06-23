<script>
    import { theLanguage } from "../store/store";

    const setLanguage = (/** @type {string} */ lan) => {
        theLanguage.update((value) => (value = lan));
    };

    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });
</script>

<div class="flex flex-col text-xs font-bold gap-0.5">
    <button on:click={() => setLanguage("g")} class="border-yellow-500 border"
        >DE</button
    >
    <button on:click={() => setLanguage("e")} class="border-yellow-500 border"
        >ENG</button
    >
</div>
