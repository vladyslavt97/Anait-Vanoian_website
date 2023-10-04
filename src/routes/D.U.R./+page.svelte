<script>
    import { Motion } from "svelte-motion";
</script>

<div class="min-h-screen sm:min-h-[98.5vh] flex flex-col gap-5">
    <h1 class=" text-4xl text-black mt-20 text-center font-extrabold">
        D.U.R.<br />
        <span class="font-sans font-extralight text-2xl">Berlin Quartett</span>
    </h1>

    <!-- Anait -->
    <div class="flex justify-center gap-2 mx-5 my-5">
        <p class=" font-sans">Anait Vanoian is the leader of the quartett...</p>
        <img
            src="./quartet/Anait.jpg"
            alt="Anait"
            class=" w-32 h-48 object-cover rounded shadow-2xl shadow-black"
        />
    </div>

    <!-- Vlad -->
    <div class="flex justify-center gap-2 mx-5 my-5">
        <img
            src="./quartet/Vlad.jpg"
            alt="Anait"
            class=" w-32 h-48 object-cover rounded shadow-2xl shadow-black"
        />
        <p class=" font-sans">
            Vladyslav Tsurkanenko is a Ukrainian-Bulgarian violinist...
        </p>
    </div>

    <!-- Anastasia -->
    <div class="flex justify-center gap-2 mx-5 my-5">
        <p class=" font-sans">Anastasia Kuleva is a Ukrainian violist..</p>
        <img
            src="./quartet/Anastasia.jpg"
            alt="Anastasia"
            class=" w-48 h-48 object-cover rounded shadow-2xl shadow-black"
        />
    </div>

    <!-- Tobias -->
    <div class="flex justify-center gap-2 mx-5 mb-10 my-5">
        <img
            src="./quartet/Tobias.jpeg"
            alt="Tobias"
            class=" w-48 h-48 object-cover rounded shadow-2xl shadow-black"
        />
        <p class=" font-sans">Tobias Hoffmann is a German cellist..</p>
    </div>

    <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        let:motion
    >
        <div
            use:motion
            class="flex flex-row justify-around items-center py-4 pt-16"
        >
            <a href="https://www.youtube.com/@anaitvanoian7094" target="_blank"
                ><img src="./youtube.png" alt="youtube" width="30px" /></a
            >
            <a href="https://www.facebook.com/D.U.R.Quartett" target="_blank"
                ><img src="./facebook.png" alt="facebook" width="30px" /></a
            >
            <h4 class="text-sm font-sans italic">
                dasd.u.r.quartett@gmail.com
            </h4>
        </div>
    </Motion>
</div>
