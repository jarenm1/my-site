<script lang="ts">
    import type { Resource } from "$lib/resources";

    export let resources: Resource[] = [];
    export let title: string = "Resources";

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };
</script>

<section class="mb-12 vim-jump">
    <h2 class="text-xl font-semibold mb-4">{title}</h2>
    <div class="flex flex-col gap-6">
        {#if resources.length === 0}
            <p class="text-white/60 text-sm">No resources yet.</p>
        {:else}
            {#each resources as resource}
                <article class="border border-white/15 p-4 rounded">
                    <div class="space-y-2">
                        <div class="flex items-start justify-between gap-4">
                            <h3 class="text-lg font-medium">
                                <a
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="hover:underline"
                                >
                                    {resource.title}
                                </a>
                            </h3>
                            <span class="text-xs text-white/50 shrink-0">
                                Added on {formatDate(resource.dateAdded)}
                            </span>
                        </div>
                        <p class="text-white/80">{resource.description}</p>
                        <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-sm underline text-white/70 hover:text-white/90"
                        >
                            Visit →
                        </a>
                    </div>
                </article>
            {/each}
        {/if}
    </div>
</section>

