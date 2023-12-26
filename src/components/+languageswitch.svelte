<script>
    import { browser } from "$app/environment";
    import { theLanguage } from "../store/store";
    let browserLanguage = "en-GB";
    if(browser){
        browserLanguage = window.navigator.language;
    }
    const setLanguage = (/** @type {string} */ lan) => {
        theLanguage.update((value) => (value = lan));
    };

    let currentLanguage = "g";
    if(browserLanguage.includes("en")){
      currentLanguage = "e";
      theLanguage.update((value) => (value = "e"));
    } else {
      currentLanguage = 'g';
      theLanguage.update((value) => (value = "g"));
    }
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });
</script>

<div class="flex md:flex-col text-xs font-bold gap-2 md:gap-0.5 z-50">
    <button
        on:click={() => setLanguage("g")}
        class={`px-2 py-1 md:p-0 border text-white hover:bg-gray-500 rounded text-center ${
            currentLanguage === "e" ? "border-amber-100" : "border-orange-300"
        }`}>DE</button
    >
    <button
        on:click={() => setLanguage("e")}
        class={`px-2 py-1 md:p-0 text-white border hover:bg-gray-500 rounded text-center ${
            currentLanguage === "g" ? "border-amber-100" : "border-orange-300"
        }`}>ENG</button
    >
</div>
