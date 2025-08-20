<script>
    import { socials } from "$lib/socials";
</script>

<footer class="mt-12 border-t border-white/20 py-6 text-sm">
    <div class="flex flex-wrap items-center justify-between gap-4">
        <p class="text-white/60">© {new Date().getFullYear()} jarenmchugh</p>
        <nav class="flex flex-wrap gap-x-6 gap-y-2">
            {#each socials as s}
                <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white/80 hover:text-white underline-offset-4 hover:underline"
                    aria-label={s.social}
                >
                    {s.social}
                </a>
            {/each}
        </nav>
    </div>
</footer>


