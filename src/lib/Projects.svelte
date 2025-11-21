<script lang="ts">
    import type { Project } from "$lib/projects";
    import { slugify } from "$lib/projects";
    import { storiesBySlug } from "$lib/projectStories";

    export let projects: Project[] = [];
    export let title: string = "My Favorite Projects";

    const toSlug = (project: Project) => slugify(project.name);
    const toHref = (project: Project) => `/projects/${toSlug(project)}`;
    const hasStory = (project: Project) => {
        const slug = toSlug(project);
        const story = storiesBySlug[slug];
        return Array.isArray(story) && story.length > 0;
    };
</script>

<section class="mb-12 vim-jump">
    <h2 class="text-xl font-semibold mb-4">{title}</h2>
    <div class="flex flex-col gap-6">
        {#if projects.length === 0}
            <p class="text-white/60 text-sm">No projects yet.</p>
        {:else}
            {#each projects as project}
                <article class="border border-white/15 p-4 rounded">
                    <div class="flex flex-col md:flex-row gap-4">
                        {#if project.imageSrc}
                            {#if project.url}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="shrink-0"
                                >
                                    <img
                                        src={project.imageSrc}
                                        alt={project.name}
                                        class="w-40 h-24 object-cover border border-white/20"
                                    />
                                </a>
                            {:else}
                                <img
                                    src={project.imageSrc}
                                    alt={project.name}
                                    class="w-40 h-24 object-cover border border-white/20"
                                />
                            {/if}
                        {/if}
                        <div class="space-y-1">
                            <h3 class="text-lg font-medium">{project.name}</h3>
                            <p class="text-white/80">{project.description}</p>
                            <p class="flex gap-4">
                                {#if project.url}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="underline">Link</a
                                    >
                                {/if}
                                {#if hasStory(project)}
                                    <a href={toHref(project)} class="underline"
                                        >Read more</a
                                    >
                                {/if}
                            </p>
                        </div>
                    </div>
                </article>
            {/each}
        {/if}
    </div>
</section>
