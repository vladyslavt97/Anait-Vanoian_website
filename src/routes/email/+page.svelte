<script>
    // @ts-nocheck

    import emailjs from "@emailjs/browser";
    const serviceId = "service_teh2hfn";
    // const serviceId = process.env.YOUR_SERVICE_ID;
    const templateId = "template_4o0z5xi";
    // const templateId = process.env.YOUR_TEMPLATE_ID;
    const publicKey = "bfSGxGd2LfuJCFLwE";
    // const publicKey = process.env.YOUR_PUBLIC_KEY;

    function sendEmail(e) {
        // Access individual form field values by their names
        emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
            (result) => {
                console.log("SUCCESS!", result.text);
            },
            (error) => {
                console.log("FAILED...", error.text);
            }
        );
    }
</script>

<div class="min-h-screen sm:min-h-[98.5vh]">
    <h1 class="pt-20 text-center font-sans font-bold">Contancts</h1>

    <form on:submit|preventDefault={sendEmail}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
</div>
