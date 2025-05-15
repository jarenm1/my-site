<script lang="ts"> 
    let { children } = $props(); 
    import "../app.css";
</script>
<div class="bg-neutral-900 min-h-screen min-w-screen">
    {@render children()}
</div>