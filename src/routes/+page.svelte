<script>
    import About from "$lib/About.svelte";
    import Projects from "$lib/Projects.svelte";
    import Environment from "$lib/Environment.svelte";
    import { projects as defaultProjects } from "$lib/projects";

    const devices = [
        {
            name: "Laptop",
            os: "NixOS",
            editor: "Zed",
            terminal: "Ghostty",
            shell: "nushell",
            extra: "My config is unfinished, but you can find it in my github pins!"
        },
        {
            name: "Desktop",
            os: "Windows 11",
            editor: "Zed",
            terminal: "Windows Terminal",
            shell: "nushell"
        }
    ];

    const projects = defaultProjects.slice(0, 3);
</script>

<About />
<Projects {projects} />
<Environment devices={devices} />
