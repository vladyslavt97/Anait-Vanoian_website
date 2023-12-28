<script>
    import { theNavigation } from "../store/store";
    import Burger from "./+burger.svelte";
    import Navigation from "./+navigation.svelte";
    import NavigationMd from "./+navigationmd.svelte";
    import LanguageSwitch from "./+languageswitch.svelte";

    const toggleTheNavigation = () => {
        theNavigation.update((value) => false);
    };
</script>

<div
    class=" w-screen bg-[#3a3a3a] flex flex-row h-10
justify-between items-center px-3 fixed top-0 z-50"
>
    <div class="lg:hidden">
        <Navigation />
        <div class="flex flex-row justify-center items-center gap-5">
            <Burger />
            <LanguageSwitch />
        </div>
    </div>
    <div class="hidden lg:block text-white">
        <LanguageSwitch />
        <NavigationMd />
    </div>

    <a href="/" on:click={toggleTheNavigation}
        ><h2 class=" text-yellow-100 sm:mr-4 tracking-wider font-bold text-sm">
            Anait &nbsp;Vanoian
        </h2></a
    >
</div>
