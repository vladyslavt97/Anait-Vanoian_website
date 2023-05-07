<script>
  import { Carousel } from 'flowbite-svelte'
  const images = [
    {id: 0, attribution: 'shoes', imgurl: '/cork.jpeg'},
    {id: 1, attribution: 'small bag', imgurl: '/london.jpeg'},
    {id: 2, attribution: 'plants', imgurl: '/anait.jpeg'},
    {id: 3, attribution: 'watch', imgurl: '/Dublin.webp'},
    {id: 0, attribution: 'shoes', imgurl: '/facebook.png'},
    {id: 1, attribution: 'small bag', imgurl: '/youtube.png'},
    {id: 2, attribution: 'plants', imgurl: '/anait.jpeg'},
    {id: 3, attribution: 'watch', imgurl: '/instagram.png'}
  ]
    let showThumbs=false
    let showCaptions=false
</script>

<div class="p-10 h-[97vh] flex flex-col justify-center items-center">
    <h1 class="absolute top-20 font-sans font-bold">Gallery</h1>
  <Carousel {images} {showCaptions} {showThumbs} duration={3000}/>
  <button class="rounded-full px-2 py-1 bg-emerald-200 absolute bottom-20 font-mono">Download images here</button>
</div>