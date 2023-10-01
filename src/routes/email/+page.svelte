<script>
    // @ts-nocheck
    import emailjs from "@emailjs/browser";
    // @ts-ignore
    import IoIosMail from "svelte-icons/io/IoIosMail.svelte";
    // @ts-ignore
    import IoIosText from "svelte-icons/io/IoIosText.svelte";
    import { theLanguage } from "../../store/store";
    import { onMount } from "svelte";

    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });

    //fetching envs
    let myObj = {};
    onMount(async () => {
        try {
            const response = await fetch("/api/email");
            if (response.ok) {
                myObj = await response.json();
            } else {
                throw new Error("Failed to fetch data");
            }
        } catch (error) {
            console.error("error", error);
        }
    });

    //sending email and resetting the fields
    let emailState = "";
    let messageState = "";
    let messageSubject = "";

    function sendEmail(e) {
        emailjs
            .sendForm(
                myObj.YOUR_SERVICE_ID,
                myObj.YOUR_TEMPLATE_ID,
                e.target,
                myObj.YOUR_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    emailState = "";
                    messageState = "";
                    messageSubject = "";
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    }
</script>

<div class="min-h-screen sm:min-h-[98.5vh]">
    <h1 class="pt-20 text-center font-sans font-bold">
        {#if currentLanguage === "e"}
            Contancts
        {:else}
            Kontakte
        {/if}
    </h1>

    <form
        class="flex flex-col justify-center h-[70vh] sm:h-[80vh] m-10 font-sans md:w-[400px] md:mx-auto"
        on:submit|preventDefault={sendEmail}
    >
        <label
            for="Email"
            class="w-16 flex flex-row items-center gap-2 text-gray-500"
            >Email<IoIosMail /></label
        >
        <input
            type="text"
            class="rounded"
            placeholder={`${
                currentLanguage === "e"
                    ? "provide your email"
                    : "Geben Sie Ihre E-Mail-Adresse an"
            }`}
            name="email"
            bind:value={emailState}
        />
        <label
            for="Name"
            class="w-16 flex flex-row items-center gap-2 text-gray-500"
            >{#if currentLanguage === "e"}
                Name
            {:else}
                Name
            {/if}
        </label>
        <input
            type="text"
            class="rounded"
            placeholder={`${
                currentLanguage === "e"
                    ? "enter your name"
                    : "Geben Sie Ihren Namen ein"
            }`}
            name="name"
            bind:value={messageSubject}
        />
        <label
            for="Message"
            class="mt-10 w-24 flex flex-row items-center gap-1 text-gray-500"
            >{#if currentLanguage === "e"}
                Message
            {:else}
                Nachricht
            {/if}
            <IoIosText /></label
        >
        <textarea
            class="rounded h-40"
            placeholder={`${
                currentLanguage === "e"
                    ? "write your message here"
                    : "Schreibe deine Nachricht hier"
            }`}
            name="message"
            bind:value={messageState}
        />
        <button class="bg-gray-300 rounded-lg mt-2" type="submit" value="Send"
            >{#if currentLanguage === "e"}
                Send
            {:else}
                Schicken
            {/if}
        </button>
    </form>

    <h5 class="text-xs font-serif text-center py-10">
        The website is made by <a
            href="https://www.facebook.com/vladyslav.tsurkanenko"
            class="italic text-blue-900">Vladyslav Tsurkanenko</a
        >
    </h5>
</div>
