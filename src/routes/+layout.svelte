<script lang="ts">
    let { children } = $props();
    import "../app.css";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<div class="min-h-screen text-white">
    <!-- Fixed side placeholders, not constrained by max-w-6xl -->
    <aside
        class="hidden md:flex fixed inset-y-0 -left-30 top-0 px-4 pt-8 text-xs text-neutral-700 opacity-50 pointer-events-none font-mono -z-20"
    ></aside>
    <aside
        class="hidden md:flex fixed inset-y-0 -right-60 top-10 w-56 px-4 pt-8 text-sm text-neutral-700 opacity-50 pointer-events-none justify-end -z-20"
    ></aside>

    <!-- Centered main content -->
    <div class="mx-auto max-w-3xl px-4 bg-black z-10">
        <main class="py-6 bg-black">
            <Navbar />
            {@render children()}
            <Footer />
        </main>
    </div>
</div>
