<div class="max-w-6xl mx-auto flex flex-col">
    <p class="text-white text-3xl text-center my-4">Hello...</p>
    <div class="flex flex-row gap-4 items-stretch mb-4">
        <div class="shrink-0 bg-neutral-800 p-4 rounded-lg z-10 flex items-center justify-center shadow-lg">
            <Pfp />
        </div>
        <div class="flex-1 grow z-10 shadow-lg">
            <About />
        </div>
    </div>
    <div class="flex justify-between gap-4">
        <div class="bg-neutral-800 p-4 rounded-lg grow z-10 shadow-lg">
            <ComputerSetup />
        </div>
        <div class="bg-neutral-800 p-4 rounded-lg shrink-0 z-10 flex items-center justify-center shadow-lg text-wrap">
            <a href="./resume" class="text-white hover:text-blue-400 text-lg p-2 md:p-4 md:text-2xl lg:text-4xl text-center">My <br />Resume</a>
        </div>
    </div>
</div>

<div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/axiom-pattern.png')] bg-repeat bg-center"></div>

<script>
import Pfp from '../lib/Pfp.svelte';
import About from '../lib/About.svelte';
import ComputerSetup from '../lib/ComputerSetup.svelte';
</script>