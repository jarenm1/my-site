<script>
    import Social from "./Social.svelte";

    const socials = [
        {
            social: "GitHub",
            url: "https://github.com/jarenm1",
            img: "./github.svg"
        },
        {
            social: "youtube",
            url: "https://youtube.com/@imjaren",
            img: "./youtube.png"
        },
        {
            social: "X",
            url: "https://x.com/jaren11111",
            img: "./x.svg"
        },
    ]
</script>

<div class="flex-row flex gap-4">
    {#each socials as i}
        <Social social={i.social} url={i.url} img={i.img} />
    {/each}
</div>