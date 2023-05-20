<script>
    import IoIosMail from "svelte-icons/io/IoIosMail.svelte";
    import IoIosText from "svelte-icons/io/IoIosText.svelte";

    let emailState = "";
    let messageState = "";
    let messageSubject = "";

    const sendEmail = () => {
        console.log("the log", emailState, messageState, messageSubject);
        let mailTo = `mailto:anaitvanoian@gmail.com?subject=${messageSubject}&body=${messageState} (${emailState})`;
        window.location.href = mailTo;

        emailState = "";
        messageState = "";
        messageSubject = "";
    };
</script>

<div class="min-h-screen sm:min-h-[98.5vh]">
    <h1 class="pt-20 text-center font-sans font-bold">Welcome to Contacts</h1>

    <form
        class="flex flex-col justify-center h-[70vh] sm:h-[80vh] m-10 font-sans md:w-[400px] md:mx-auto"
        on:submit|preventDefault={sendEmail}
        id="myForm"
    >
        <label
            for="Email"
            class="w-16 flex flex-row items-center gap-2 text-gray-500"
            >Email<IoIosMail /></label
        >
        <input
            type="text"
            class="rounded"
            placeholder="provide your email"
            name="user_name"
            bind:value={emailState}
        />
        <label
            for="Subject"
            class="w-16 flex flex-row items-center gap-2 text-gray-500"
            >Subject</label
        >
        <input
            type="text"
            class="rounded"
            placeholder="enter subject"
            name="subject"
            bind:value={messageSubject}
        />
        <label
            for="Message"
            class="mt-10 w-24 flex flex-row items-center gap-1 text-gray-500"
            >Message <IoIosText /></label
        >
        <textarea
            class="rounded h-40"
            placeholder="write your message here"
            name="user_email"
            bind:value={messageState}
        />
        <button class="bg-gray-300 rounded-lg mt-2" type="submit" value="Send"
            >Send</button
        >
    </form>
</div>
