<script>
    import { theNavigation } from "../store/store";
    const toggleTheNavigation = () => {
        theNavigation.update((value) => !value);
    };

    console.log(theNavigation);
</script>

<div class="flex flex-col gap-1" on:click={toggleTheNavigation}>
    <div class="w-5 h-[2px] bg-white rounded-lg" />
    <div class="w-5 h-[2px] bg-white rounded-lg" />
    <div class="w-5 h-[2px] bg-white rounded-lg" />
</div>
