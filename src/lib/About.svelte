<script>
    import Socials from "./Socials.svelte";
</script>

<div class="bg-neutral-800 text-white p-4 rounded-lg flex flex-col justify-between grow h-full z-10">
  <div>
    <h2 class="text-2xl font-bold mb-2 z-10">About Me</h2>
    <p class="z-10 text-lg">
      I'm a CS student with an interest in low level programming.<br />
      I am currently working on a 
      <a href="https://github.com/jarenm1/rusty_engine" class="text-blue-500 hover:text-blue-400">game engine</a>
      and 
      <a href="https://github.com/jarenm1/nvim-completions" class="text-blue-500 hover:text-blue-400">nvim plugin</a>
      written in rust.<br />
      I also enjoy playing video games and making music.
    </p>
  </div>
  <div class="flex flex-row gap-2 self-start mt-4">
    <Socials />
  </div>
</div>
