<script>
    import IoIosMail from "svelte-icons/io/IoIosMail.svelte";
    import IoIosText from "svelte-icons/io/IoIosText.svelte";
    import { theLanguage } from "../../store/store";
    let currentLanguage = "g";
    theLanguage.subscribe((value) => {
        currentLanguage = value;
    });
    let emailState = "";
    let messageState = "";
    let messageSubject = "";

    const sendEmail = () => {
        console.log("the log", emailState, messageState, messageSubject);
        let mailTo = `mailto:anait.vanoian@gmail.com?subject=${messageSubject}&body=${messageState} (${emailState})`;
        window.location.href = mailTo;

        emailState = "";
        messageState = "";
        messageSubject = "";
    };
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
            placeholder={`${
                currentLanguage === "e"
                    ? "provide your email"
                    : "Geben Sie Ihre E-Mail-Adresse an"
            }`}
            name="user_name"
            bind:value={emailState}
        />
        <label
            for="Subject"
            class="w-16 flex flex-row items-center gap-2 text-gray-500"
            >{#if currentLanguage === "e"}
                Subject
            {:else}
                Thema
            {/if}
        </label>
        <input
            type="text"
            class="rounded"
            placeholder={`${
                currentLanguage === "e" ? "enter subject" : "Betreff eingeben"
            }`}
            name="subject"
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
            name="user_email"
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
