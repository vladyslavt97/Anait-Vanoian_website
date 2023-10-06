<script>
    import { Motion } from "svelte-motion";
    const imageStyle =
        "w-[200px] md:w-40 h-48 object-cover rounded-tr rounded-tl shadow-2xl shadow-black";
</script>

<div class="min-h-screen sm:min-h-[98.5vh] flex flex-col gap-5">
    <img
        src="./quartet/header.png"
        width="200"
        height="200"
        alt="Anait"
        class=" w-full object-cover rounded-br rounded-bl shadow-2xl shadow-black mt-10"
        loading="eager"
    />
    <h1 class=" text-4xl text-black mt-5 text-center font-extrabold">
        D.U.R.<br />
        <span class="font-sans font-extralight text-2xl">Berlin Quartett</span>
    </h1>

    <!-- Anait -->
    <div class="flex justify-center gap-2 mx-5 my-5">
        <p class=" font-sans">
            Anait Vanoian<br />
            is the leader of the quartett...
        </p>
        <div class="w-[200px] md:w-40">
            <img src="./anait.jpeg" alt="Anait" class={imageStyle} />
            <h2
                class="bg-yellow-500 rounded-br rounded-bl text-center text-white"
            >
                Violin
            </h2>
        </div>
    </div>

    <!-- Vlad -->
    <div class="flex justify-center gap-2 mx-5 my-5">
        <div class="w-[200px] md:w-40">
            <img src="./quartet/vlad.jpg" alt="Anait" class={imageStyle} />
            <h2
                class="bg-yellow-500 rounded-br rounded-bl text-center text-white"
            >
                Violin
            </h2>
        </div>
        <p class=" font-sans">
            Vladyslav Tsurkanenko<br />
            is a Ukrainian-Bulgarian violinist...
        </p>
    </div>

    <!-- Anastasia -->
    <div class="flex justify-center gap-2 mx-5 my-5">
        <p class=" font-sans">
            Anastasia Kuleva<br />
            is a Ukrainian violist..
        </p>
        <div class=" w-[200px] md:w-40">
            <img
                src="./quartet/Anastasia.jpg"
                alt="Anastasia"
                class={imageStyle}
            />
            <h2
                class="bg-yellow-500 rounded-br rounded-bl text-center text-white"
            >
                Viola
            </h2>
        </div>
    </div>

    <!-- Tobias -->
    <div class="flex justify-center gap-2 mx-5 mb-10 my-5">
        <div class="w-[200px] md:w-40">
            <img src="./quartet/Tobias.jpeg" alt="Tobias" class={imageStyle} />
            <h2
                class="bg-yellow-500 rounded-br rounded-bl text-center text-white"
            >
                Cello
            </h2>
        </div>
        <p class=" font-sans">
            Tobias Hoffmann<br />
            is a German cellist..
        </p>
    </div>

    <!-- Programme -->
    <hr />
    <div class="w-full">
        <h2 class="text-center font-serif font-medium text-xl">Engagements</h2>
    </div>

    <!-- Media -->
    <hr />
    <div class="w-full">
        <h2 class="text-center font-serif font-medium text-xl">Photos</h2>
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
