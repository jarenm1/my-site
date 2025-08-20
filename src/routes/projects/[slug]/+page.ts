import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getProjectBySlug, slugify } from '$lib/projects';
import { storiesBySlug } from '$lib/projectStories';

export const load: PageLoad = async ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) {
        throw error(404, 'Project not found');
    }
    const slug = slugify(project.name);
    const story = storiesBySlug[slug] ?? [];
    return { project, story };
};


