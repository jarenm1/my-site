export type Project = {
    name: string;
    description: string;
    url?: string;
    imageSrc?: string;
};

export function slugify(input: string): string {
    return input
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export const projects: Project[] = [
    {
        name: "Triad",
        description:
            "Monocular Reconstruction. Custom renderer built w/ wgpu.",
        url: "https://www.github.com/jarenm1/triad"
    },
    {
        name: "rust game engine",
        description:
            "Superseded by Triad.",
        url: "https://www.github.com/jarenm1/rusty_engine"
    },
    {
        name: "jeditr",
        description: "Tauri text editor.",
        url: "https://www.github.com/jarenm1/jeditr"
    },
    {
        name: "glyph",
        description: "GUI framework I'm definitly not finishing ever. Written in rust btw. May integrate into triad for ui.",
    },
    {
        name: "rbx-mcp",
        description: "Experimenting with LLM's capabilities in game mechanics and 3D space through Roblox's game engine..",
        url: "https://www.github.com/jarenm1/rbx-mcp"
    },
    {
        name: "Other:",
        description: "I have worked on other projects, but they weren't worthy of a mention.",
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => slugify(p.name) === slug);
}


