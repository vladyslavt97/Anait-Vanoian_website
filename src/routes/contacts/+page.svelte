<script>
    import IoIosMail from 'svelte-icons/io/IoIosMail.svelte'
    import IoIosText from 'svelte-icons/io/IoIosText.svelte'
    import emailjs from "@emailjs/browser";
    
    let emailState = '';
    let messageState = '';
    let sending = false;
    let sent = false;
    // let form;

  const sendEmail = async () => {
    sending = true;
    console.log('email', emailState);
    console.log(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID ,process.env.YOUR_PUBLIC_KEY);
    if (
      process.env.YOUR_SERVICE_ID &&
      process.env.YOUR_TEMPLATE_ID &&
      process.env.YOUR_PUBLIC_KEY
    ) {
      emailjs
        .sendForm(
          process.env.YOUR_SERVICE_ID,
          process.env.YOUR_TEMPLATE_ID,
          '#myForm',
          process.env.YOUR_PUBLIC_KEY)
        .then(
          (result) => {
            console.log('resultsss', result.text);
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

</script>

<div class="min-h-screen sm:min-h-[98.5vh]">
    <h1 class="pt-20 text-center font-sans font-bold">Welcome to Contacts</h1>

    <form class="flex flex-col justify-center h-[70vh] sm:h-[80vh] m-10 font-sans md:w-[400px] md:mx-auto" on:submit|preventDefault={sendEmail} id="myForm">
        <label for="Email" class="w-16 flex flex-row items-center gap-2 text-gray-500">Email<IoIosMail/></label>
          <input type="text" class="rounded" placeholder="provide your email" bind:value={emailState}>
        <label for="Message" class="mt-10 w-24 flex flex-row items-center gap-1 text-gray-500">Message <IoIosText/></label>
          <textarea class="rounded h-40" placeholder="write your message here" bind:value={messageState}/>
        <button class="bg-gray-300 rounded-lg mt-2" type="submit">{sending ? 'Sending...' : 'Send'}</button>
    </form>
</div>