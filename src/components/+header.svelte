<script>
    import { theNavigation } from "../store/store";
    import Burger from "./+burger.svelte";
    import Navigation from "./+navigation.svelte";

    const toggleTheNavigation = () => {
        theNavigation.update((value) => false);
    };
</script>

<div
    class=" w-screen bg-[#3a3a3a] flex flex-row h-10
justify-between items-center px-3 fixed top-0 z-50"
>
    <Navigation />
    <Burger />
    <a href="/" on:click={toggleTheNavigation}
        ><h2 class=" text-yellow-100 italic sm:mr-4">
            Anait &nbsp; Vanoian
        </h2></a
    >
</div>
