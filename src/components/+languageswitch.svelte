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
    <button
        on:click={() => setLanguage("g")}
        class={` border hover:bg-gray-500 rounded text-center ${
            currentLanguage === "e" ? "border-amber-100" : "border-orange-400"
        }`}>DE</button
    >
    <button
        on:click={() => setLanguage("e")}
        class={` border hover:bg-gray-500 rounded text-center ${
            currentLanguage === "g" ? "border-amber-100" : "border-orange-400"
        }`}>ENG</button
    >
</div>
