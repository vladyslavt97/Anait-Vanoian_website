<script>
  import { Motion } from "svelte-motion";
</script>

<Motion
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:2}}
    let:motion
    >
  <div  use:motion class="flex flex-row justify-around items-center my-4 mt-16">
      <a href="https://www.youtube.com/"><img src="./youtube.png" alt="youtube" width="30px"/></a>
      <a href="https://www.facebook.com/"><img src="./facebook.png" alt="facebook" width="30px"/></a>
      <a href="https://www.instagram.com/"><img src="./instagram.png" alt="instagram" width="30px"/></a>
  </div>
</Motion>
<div class="flex flex-col items-center">
  <h1 class="text-center my-7">Home page</h1>
  <Motion
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:3}}
    let:motion
    >
    <img use:motion src="/anait.jpeg" alt="phot" class="rounded" width="200px">
  </Motion>
  <p class="p-6 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>