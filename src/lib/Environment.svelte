<script lang="ts" context="module">
    export type Device = {
        name: string;
        os: string;
        editor: string;
        terminal: string;
        shell: string;
        extra?: string;
    };
</script>

<script lang="ts">
    export let devices: Device[] = [];
</script>

<section class="mb-12 vim-jump">
    <h2 class="text-xl font-semibold mb-4">Environment</h2>
    <div class="grid md:grid-cols-2 gap-6">
        {#each devices as device}
            <div class="border border-white/15 p-4 rounded">
                <h3 class="text-lg font-medium mb-2">{device.name}</h3>
                <ul class="space-y-1 text-white/90">
                    <li><span class="text-white/60">OS:</span> {device.os}</li>
                    <li><span class="text-white/60">Editor:</span> {device.editor}</li>
                    <li><span class="text-white/60">Terminal:</span> {device.terminal}</li>
                    <li><span class="text-white/60">Shell:</span> {device.shell}</li>
                    {#if device.extra}
                        <li class="text-white/70">{device.extra}</li>
                    {/if}
                </ul>
            </div>
        {/each}
    </div>
</section>

