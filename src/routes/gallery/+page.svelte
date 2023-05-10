<script>
    
  import { Carousel } from 'flowbite-svelte'
  const images = [
    {id: 0, attribution: 'anait', imgurl: '/anait1.jpg'},
    {id: 1, attribution: 'anait', imgurl: '/anait2.jpg'},
    {id: 2, attribution: 'plants', imgurl: '/anait.jpeg'}
  ]
    let showThumbs=false
    let showCaptions=false
</script>

<div class="p-10 min-h-screen sm:min-h-[98.5vh] flex flex-col justify-center items-center">
    <h1 class="absolute top-20 font-sans font-bold">Gallery</h1>
  <Carousel {images} {showCaptions} {showThumbs} duration={3000}/>
  <button class="rounded-full px-2 py-1 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 absolute bottom-20 font-mono">Download images here</button>
</div>