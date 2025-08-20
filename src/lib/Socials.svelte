<script>
    import Social from "./Social.svelte";
    import { socials } from "$lib/socials";

</script>

<div class="flex gap-3 md:gap-4 items-center flex-row px-0">
    {#each socials as social}
        <Social social={social.social} url={social.url} img={social.img} />
    {/each}
</div>