<script>
  import emailjs from "@emailjs/browser";
  import { Carousel } from 'flowbite-svelte'
  const images = [
    {id: 0, attribution: 'anait', imgurl: '/anait1.jpg'},
    {id: 2, attribution: 'anait', imgurl: '/anait.jpeg'},
    {id: 2, attribution: 'anait', imgurl: '/anait3.jpg'},
    {id: 2, attribution: 'anait', imgurl: '/anait4.jpg'},
    {id: 1, attribution: 'anait', imgurl: '/anait2.jpg'},
    {id: 2, attribution: 'anait', imgurl: '/anait5.jpg'}
  ]
    let showThumbs=false
    let showCaptions=false
  import { onMount } from 'svelte';

  let userName = '';
  let emailState = '';
  let messageState = '';
  let sending = false;
  let sent = false;

  const sendEmail = async () => {
    sending = true;

    if (
      process.env.NEXT_PUBLIC_YOUR_SERVICE_ID &&
      process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
          process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
          'myForm',
          process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            userName = '';
            emailState = '';
            messageState = '';
            sending = false;
            sent = true;

            setTimeout(() => {
              console.log('Delayed for 2 seconds.');
              sent = false;
            }, 2000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    
  };

  onMount(() => {
    emailjs.init(process.env.NEXT_PUBLIC_YOUR_USER_ID);
  });
</script>

<div class="p-10 min-h-screen sm:min-h-[98.5vh] flex flex-col justify-center items-center">
  <h1 class="absolute top-20 font-sans font-bold">Gallery</h1>
  <Carousel {images} {showCaptions} {showThumbs} duration={3000}/>
  <button class="rounded-full px-2 py-1 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 absolute bottom-20 font-mono">Download images here</button>
</div>