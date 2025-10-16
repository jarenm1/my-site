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
        name: "3D scene reconstruction",
        description:
            "Monocular SLAM. Custom renderer built on wgpu. ML feature extraction. WIP. Mostly closed source.",
        url: "https://www.github.com/jarenm1/rslam"
    },
    {
        name: "rust game engine",
        description:
            "An ECS driven game engine written in rust w/wgpu & winit, heavily inspired by bevy.",
        url: "https://www.github.com/jarenm1/rusty_engine"
    },
    {
        name: "jeditr",
        description: "A plugin driven text editor written in Rust Tauri w/ React. Abandoned. Athas.dev and Zed offer much better experiences with similar project goals.",
        url: "https://jeditr.com"
    },
    {
        name: "glyph",
        description: "GUI library for building simple applications in rust with a tailwind-like styling. Super unfinished. Closed source.",
    },
    {
        name: "rbx-mcp",
        description: "bit of a silly project I made in 3 hours to mess around with roblox's game engine, roblox studio. Not very useful. Should have used agent architecture.",
        url: "https://www.github.com/jarenm1/rbx-mcp"
    },
    {
        name: "nvim-completions",
        description: "neovim plugin. Couldn't get it to work and zed has everything I need.",
        url: "https://www.github.com/jarenm1/nvim-completions"
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => slugify(p.name) === slug);
}


