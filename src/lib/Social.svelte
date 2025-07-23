<script>
    export let social = "social";
    export let url = "https://url.com/"
    export let img = "./x.svg"
</script>

<a href={url} class="inline-block" target="_blank" rel="noopener noreferrer" title={social}>
    <img src={img} alt={social} class="h-6 md:h-12 hover:opacity-80 transition-opacity">
</a>