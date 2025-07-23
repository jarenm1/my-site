<script>
    import Social from "./Social.svelte";

    const socials = [
        {
            social: "GitHub",
            url: "https://github.com/jarenm1",
            img: "./github.svg"
        },
        {
            social: "X",
            url: "https://x.com/jaren11111",
            img: "./x.svg"
        }
    ];
</script>

<div class="flex gap-4 md:gap-8 items-center flex-col md:flex-row px-4">
    {#each socials as social}
        <Social social={social.social} url={social.url} img={social.img} />
    {/each}
</div>