<script>
    // You can edit these details as you like
    const devices = [
        {
            name: "Laptop",
            icon: "💻",
            os: "NixOS",
            editor: "Zed",
            terminal: "Ghostty",
            shell: "nushell",
        },
        {
            name: "Desktop",
            icon: "🖥️",
            os: "Windows 11",
            editor: "Zed",
            terminal: "Windows Terminal",
            shell: "nushell",
        },
    ];
</script>

<div class="flex flex-col gap-4">
    <h2 class="text-2xl font-bold text-white">The Tool Shed</h2>
    <div class="flex flex-row gap-4 flex-wrap justify-around">
        {#each devices as device}
            <div class="bg-neutral-800 text-white p-6 rounded-lg min-w-[220px]">
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-3xl">{device.icon}</span>
                    <span class="text-xl font-semibold">{device.name}</span>
                </div>
                <div>OS: <span class="text-blue-400">{device.os}</span></div>
                <div>
                    Editor: <span class="text-blue-400">{device.editor}</span>
                </div>
                <div>
                    Terminal: <span class="text-blue-400"
                        >{device.terminal}</span
                    >
                </div>
                <div>
                    Shell: <span class="text-blue-400">{device.shell}</span>
                </div>
            </div>
        {/each}
    </div>
</div>
