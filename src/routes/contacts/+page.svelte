<script>
    import IoIosMail from 'svelte-icons/io/IoIosMail.svelte'
    import IoIosText from 'svelte-icons/io/IoIosText.svelte'
    // import emailjs from "@emailjs/browser";
    
    let emailState = '';
    let messageState = '';
    // let sending = false;
    // let sent = false;

  // const sendEmail = async () => {
  //   sending = true;
  //   console.log(document.getElementById("myForm"));
  //     emailjs
  //       .sendForm(
  //         process.env.YOUR_SERVICE_ID,
  //         process.env.YOUR_TEMPLATE_ID,
  //         '#myForm',
  //         process.env.YOUR_PUBLIC_KEY
  //       )
  //       .then(
  //         (result) => {
  //           console.log('resultsss', result.text);
  //           emailState = '';
  //           messageState = '';
  //           sending = false;
  //           sent = true;

  //           setTimeout(() => {
  //             console.log('Delayed for 2 seconds.');
  //             sent = false;
  //           }, 2000);
  //         },
  //         (error) => {
  //           console.log('erorr',error.text);
  //           console.log(
  //         process.env.YOUR_SERVICE_ID,
  //         process.env.YOUR_TEMPLATE_ID,
  //         process.env.YOUR_PUBLIC_KEY);
  //         }
  //       );
    
  // };

  const sendEmail = () => {
    let mailTo = `mailto:anaitvanoian@gmail.com?subject=Email From Your Website&body=${messageState} (${emailState})`;
    window.location.href = mailTo;
  }


  const clearValues = () => {
    emailState = "";
    messageState = "";
  }
</script>

<div class="min-h-screen sm:min-h-[98.5vh]">
    <h1 class="pt-20 text-center font-sans font-bold">Welcome to Contacts</h1>

    <form class="flex flex-col justify-center h-[70vh] sm:h-[80vh] m-10 font-sans md:w-[400px] md:mx-auto" on:submit|preventDefault={sendEmail} id="myForm">
        <label for="Email" class="w-16 flex flex-row items-center gap-2 text-gray-500">Email<IoIosMail/></label>
          <input type="text" class="rounded" placeholder="provide your email" name="user_name" bind:value={emailState}>
        <label for="Message" class="mt-10 w-24 flex flex-row items-center gap-1 text-gray-500">Message <IoIosText/></label>
          <textarea class="rounded h-40" placeholder="write your message here" name="user_email" bind:value={messageState}/>
        <button class="bg-gray-300 rounded-lg mt-2" type="submit" value="Send" on:click={clearValues}>Send</button>
    </form>
</div>