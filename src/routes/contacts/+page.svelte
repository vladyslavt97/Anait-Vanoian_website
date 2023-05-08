<script>
    import IoIosMail from 'svelte-icons/io/IoIosMail.svelte'
    import IoIosText from 'svelte-icons/io/IoIosText.svelte'
</script>

<h1 class="mt-20 text-center font-sans font-bold">Welcome to Contacts</h1>

<form class="flex flex-col justify-center h-[70vh] m-10 font-sans">
    <label for="Email" class="w-16 flex flex-row items-center gap-2 text-gray-500">Email<IoIosMail/></label>
    <input type="text" class="rounded" placeholder="provide your email">
    <label for="Message" class="mt-10 w-24 flex flex-row items-center gap-1 text-gray-500">Message <IoIosText/></label>
    <textarea class="rounded h-40" placeholder="write your message here"/>
    <button class="bg-gray-300 rounded-lg mt-2">Send</button>
</form>
