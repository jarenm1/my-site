<script>
    import Socials from "$lib/Socials.svelte";
    const links = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Resources", href: "/resources" },
    ];
</script>

<nav class="w-full border-b border-white/20 py-4 mb-8">
    <div class="flex items-center justify-between">
        <ul class="flex gap-6 text-sm md:text-base">
            {#each links as link}
                <li>
                    <a href={link.href} class="text-white hover:underline">
                        {link.name}
                    </a>
                </li>
            {/each}
        </ul>
        <Socials />
    </div>
</nav>
