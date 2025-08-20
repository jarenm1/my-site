<script lang="ts">
    import type { StoryBlock } from '$lib/projectStories';
    export let data: { project: { name: string; description: string; url?: string }; story: StoryBlock[] };
    const { project, story } = data;
</script>

<section class="vim-jump">
    <h1 class="text-2xl font-semibold mb-3">{project.name}</h1>
    <p class="text-white/80 mb-4">{project.description}</p>
    {#if project.url}
        <a href={project.url} target="_blank" rel="noopener noreferrer" class="underline">Open project</a>
    {/if}

    <div class="mt-6 space-y-4">
        {#each story as block}
            {#if block.kind === 'heading'}
                {#if block.level === 2}
                    <h2 class="text-xl font-semibold mt-6 mb-3">{block.text}</h2>
                {:else if block.level === 3}
                    <h3 class="text-lg font-semibold mt-5 mb-2">{block.text}</h3>
                {:else}
                    <h4 class="text-base font-semibold mt-4 mb-2">{block.text}</h4>
                {/if}
            {:else if block.kind === 'paragraph'}
                <p class="text-white/80">{block.text}</p>
            {:else if block.kind === 'image'}
                <figure class="mt-2">
                    <img src={block.src} alt={block.alt} class="border border-white/20" />
                    {#if block.caption}
                        <figcaption class="text-white/60 text-sm mt-1">{block.caption}</figcaption>
                    {/if}
                </figure>
            {:else if block.kind === 'list'}
                <ul class="list-disc list-inside space-y-1 text-white/85">
                    {#each block.items as item}
                        <li>{item}</li>
                    {/each}
                </ul>
            {/if}
        {/each}
    </div>
</section>


