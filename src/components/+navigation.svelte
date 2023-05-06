<script>
    import { theNavigation } from "../store/store";
    let navigationState = false;
    theNavigation.subscribe(value => {
        console.log("theNavigation value:", value);
        navigationState = value;
    });
</script>

{#if navigationState}
    <div 
        class="w-screen h-full bg-[#3a3a3a] absolute top-10 left-0">
    </div>
{/if}