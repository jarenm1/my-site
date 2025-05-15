<script>
    export let social = "social";
    export let url = "https://url.com/"
    export let img = "./x.svg"
</script>

<div class="flex flex-col gap-2">
    <a href={url} class="flex flex-col gap-2">
        <img src={img} alt={social} class="h-8">
    </a>
</div>