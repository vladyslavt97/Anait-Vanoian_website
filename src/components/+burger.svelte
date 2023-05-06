<script>
    import { theNavigation } from "../store/store";
    import { Motion } from "svelte-motion";

    const toggleTheNavigation = () => {
        theNavigation.update((value) => !value);
    };

    let navigationState = false;
    theNavigation.subscribe(value => {
        navigationState = value;
    });
</script>


<div class="flex flex-col gap-1" on:click={toggleTheNavigation} on:keydown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleTheNavigation();
    }
  }}>
    <Motion animate={{rotate: navigationState ? -45 : 0,
                    y: navigationState ? 1.3 : 0
                    }} let:motion>
        <div use:motion class="w-5 h-[2px] bg-white rounded-lg" />
    </Motion>
    <Motion animate={{opacity: navigationState ? 0 : 1}} let:motion>
        <div use:motion class="w-5 h-[2px] bg-white rounded-lg" />
    </Motion>
    <Motion animate={{rotate: navigationState ? 45 : 0 ,
                    y: navigationState ? -10.5 : 0
                    }} let:motion>
        <div use:motion class="w-5 h-[2px] bg-white rounded-lg" />
    </Motion>
</div>
