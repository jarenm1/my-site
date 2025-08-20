<script>
    export let social = "social";
    export let url = "https://url.com/"
    export let img = "/x.svg"
</script>

<a href={url} class="inline-block" target="_blank" rel="noopener noreferrer" title={social} aria-label={social}>
    <img src={img} alt={social} class="h-5 md:h-6 opacity-90 hover:opacity-100 transition-opacity">
</a>