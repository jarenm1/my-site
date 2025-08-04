<script>
    // Import any necessary components
    import Socials from "$lib/Socials.svelte";
    import Pfp from "$lib/Pfp.svelte"
    import About from "$lib/About.svelte"
    import ComputerSetup from "$lib/ComputerSetup.svelte"
    import { dev } from "$app/environment";

    // Computer setup data
    const devices = [
        {
            name: "Laptop",
            icon: "💻",
            os: "NixOS",
            editor: "Zed",
            terminal: "Ghostty",
            shell: "nushell",
            extra: "My config is unfinished, but you can find it in my github pins!"
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
    
    const projects = [
        {
            name: "3D scene reconstruction",
            description: "GOAL: Using monocular depth estimation along with a SLAM system to reconstruct 3D scenes with gaussian splatting ALL in realtime.",
            url: "https://www.github.com/jarenm1/rslam"
        },
        {
            name: "rust game engine",
            description: "An ECS driven game engine written in rust w/wgpu & winit, *heavily* inspired by bevy. Read more below!",
            url: "https://www.github.com/jarenm1/rusty_engine"
        },
        
        {
            name: "jeditr",
            description: "A plugin driven text editor written in Tauri w/ React. Currently DEAD.",
            
            url: "https://jeditr.com"
        }
        
    ]
</script>


<div class="ascii-background text-sm md:text-xl">
                   .@@..*@@@@@@@@@@@@@#..... .                                                  
                  .-@@@@@@@@@@@@@@@@@@@@@@@%..                                                  
                .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%...                                              
              .%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#.                                              
           ..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:..                                           
         ..%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*.                                           
        ..@@@@@@@@@@@@@@@@@@@+**+@@@@@@@@@@@@@@@@@@@*.                                          
      ..+@@@@@@@@@@@@@@@@@@@@@@.:.:=@@@@@@@@@@@=@@@@@-  .......                                 
      .%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.........                                 
   ...%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+@@@@@@@@@@@@@@@%*####*%....                              
  ..@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@%@@@@@@@@@@#..........                              
..@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+%@@@@-                                        
+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                        
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*@@@@@@@@@@@@@@@@@@@@@@@@@@@.                                       
%@@@@@@@@@@@@@@@@@*@@@@@@@@@@@@++*@@@@@@@@@@@@@@@@@@@@@@@@@@.                                       
.*@@@@@@@@@@@@@@*@@@@@@@@@@@@++:@+@@@@@@@@@@@@@@@@@@@@@@@@#.                                      
...%=%@@@@@@@@@**@@@@@@@@@%#=-+%-@@@@@@@@@@@@@@@@@@@@@@@@@            ....                       
...%..:@@@@@@@@++..**#-....--@@@*%%@@@@@@@@@@@@@@@@@@@@@@@@.       .#@@@@@@@%-.. .             
 .#...@@@@@@@@==..**#-....--@@@*%%@@@@@@@@@@@@@@@@@@@@@@@@.       .@@@@@@@@@@@@@@@@@-.          
 .....@%@@@@@@#=-=...........:::%*%%@@@@@@@@@@@@@@@@@@@@@@@       .@@@@@@@@@@@@@@@@@-.          
      -%*@@@%%%#@@@#%...........#+*%@@@@@@@@@@@@@@@@@@@@@@@%.     ....:::::..=@@@@@@@@=.        
      .@.%@@%#@@#.==++..........+**%%@@@@@@@@@@@@@@@@@@@@@@@*                ....%@@@@@@.       
      ....@@:@@=@@.-:...........++*@%@@@@@%@@@@@@@@@@@@@@@@@@:                   .:@@@@@@#.     
      ....@.....=@%.............%:+%%@%@@@@@#@@@@@.......@@@@@.                   ..@@@@@@#.    
      ....=:......##-..............*%@%%@@#*@@@+@---=+#+.::.@@*.                    .%@@@@@%    
      .:..........:%@@#:....-....*++%@%%@@#=.*@@...%@@@@@@@@@%@@..                    @@@@@@+   
      ....#%%%@+-:==@@...:.....:...*#@%%%@#=@@-.@@@@@@@@@@@@.@@@@%..                  .@@@@@@.  
      ..%#######***@................%@%%%@%@*@@@@@@@@@@@@@@@@.-.=@@@:..               .:@@@@@@. 
      .%%########*%%::...............@:#%@*@@@@@@@@@@@@@@@@@@@:..:@@.@*..               @@@@@@=.
   ...@%%%%######%#-::.-:.::....-....-.:%@@@@@@@@@@@@@@@@@@@@@@:-+@@@=-@#.             ..@@@@@%.
   ..=%%%%%%%###%##-=:.:.::.:#***#=..:...@@@+@@@@@@@@@@@@@@@@@@..:*@%@*.+@*.            .@@@@@@.
 ...-=%@%@%%%%%%%%%%.:.:%.%#****##%..:@@@%..:@@@@@@@@@@@@@@@@@@....@@.@*..%@+..         .@@@@@@-
 ...=@@@@%%%%%%%%%%%%%%%%%%%#######%...:@#---@@@@@@@@@@@@@@@@@@@:-%@@#.@+ .*%@. .        :@@@@@@
  ..+@%%%%%%%%%@%%%%%%%%###########%@=-.:%.%=@@@@@@@@@@@@@@@@@@@.@@@@%..@-  .@@*.        :@@@@@@
  ..:%%%%%%%%@@@%%%%%%%########@###%%@==.+..@@@@@@@@@@@@@@@@@@@@...@@@..#@.. ..+@%.      .@@@@@@
  ..:%%%%%%%%@@@%%%%%%%%%%%%##@%#%%%%%@#*..@@@@@@@@@@@@@@@@@@@@@+-*@@@:..@@. ..+@%.      :@@@@@@
   .#%%%%%%%@@@%%%%%%%%%%%%%%%@%%%%%%%%%#.@@@@@@@@@@@@@@@@@@@@@@.%@@@@@..:@=   .:@#.     -@@@@@@
  ..%%%%%%%%@@@%%%%%%%%%%%%%%%@%%%%%%%%%#.:@@@@@@@@@@@@@@@@@@@@%.@@@@@@...@@..   :@*    .*@@@@@.
   .%%%%%%%%@@@%%%%%%%%%%%%%%@%%%%%%%%%%%:..@@@@@@@@@@@@@@@@@@@:@@@@@@@ ...@#.   ..@.....@@@@@@.
   :%%%%%%%@@@%%%%%%%%%%%%%%%@%%%%%%%%%%%@.:@@@@@@@@@@@@@@@@@@@@@@@@@@@ ...%@.    .:@...:@@@@@*.
  .+%%%%%%@@@@%%%%%%%%%%%%%%@@%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.. .#@ .   ..*=..%@@@@@..
  .%%%%%%@@@@%%%%%%#%%%%%%%%@@%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@*@@@@@.. ..@=.   ...@..@@@@@%  
 ..%%%%%%@@@@%%####%%%%%%%%@@@%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@@=@@@@@..   %@.   ...#:@@@@@@.  
....%%%%%@@@@%%%###%%%%%%%%@@@%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@:@@@@-     %@.     ..@@@@@@:.  
...%%%%%@@@@@%%%##%%%%%%%%@@@@%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@@@.@@@@:     %@.     .=@@@@@*.   
...%%%%@@@@@@%%%#%%%%%%%%@+@@@%%%%%%%%%%%%%%%@@-@@@@@@@@@@@@@@@@@@.@@@@:     *@.   ..+@@@@@*..   
...@%%@@@@@@%%%%%%%%%%%%%@==-@%%%%%%%%%%%%%%%%@@=@@@@@@@@@@@@@@@.@.@@@@:     +@.   .%@@@@@#      
.:@%@@@@@@@%%%%%%%%%%%%@@#==-@%%%%%%%%%%%%%%%@@@@@@@@@#-@@@.:@:.%.@@@@.     #...%@@@@@@=       
.%@@@@@@@@@%%%%%%%%%%%@%@%==.@@@%%%%%%%%%%%%%@@@@@@@@@%..:*+.....+:..@.     #...@@@@@@ .       
..%@@@@@@@@@%%%%%%@%@%%@@....@@@@%%%%%%%%%%%%%%@@.@.@@%+--.+...........-..   ..*@@@@@@@...       
..@@@@@@@@@@%%%%%%%%@@%@..-.@@@@@@@%%%%%%%%%%%%@@+...@%=....=..........:....#@@@@@@@@... .       
.:@@@@@@@@@@@%%%%%@@@+=%@%%%@@@@@@@@%%%%%%%%%%@@@@.-..@@@@@%%=*........-+@@@@@@@@@*....          
.@@@@@@@@@@@@@%%%%%%@@@.@@@:@@@@@@@@@@%%%%%%%@@@@@@@:.@@@@@@@-........+.@@@@@@@%..               
.@@@@@@@@@@@@@@@@@@@@%=..@.*@+@@@@@@@@@@%%@@@@@@@@@@:+@@@@@@@..........@@@@@....                 
.@@@@@@@@@@@@@@@@@@@@%=..@*@*-.@@@@@@@@@@@@@@@@@@@@@-#@@@@@@@%........#%%%%%@.=++...             
.+@@@@@@@@@@@@@@@@@.%@==@:.@%:.:@@@@@@@@@@@@@@@@@@@==+=@@@@@@@@@%-...:%@@@@@@@%++++-.             
...%@@@@@@@@@@@@@@@%.:.@.:%:-:.#@@@@@@@@@@@@@@@@@@@@@==*=@@@@@@@@@@@@%%%@@@@@@@@@*++*.....          
..%@@@@@@@@@@@@@@@@:++#.#@@@...@@@@@@@@@@@@@@@@@@@@@@=+.-@@@@@@@@@@@@@@:#%=@@@@@@@@@%**%+*..        
+@@@@@@@@@@@@@@@@@%.-+++:@@-.:.@@@@@@@@@@@@@@@@@@@@@@...*@@@@@@@@@@@@@@@@:-+:.@@@@@@@%++++++.       
@@@@@@@@@@@@@@@@@@@@@@::=++***@@@@@@@@@@@@@@@@@@@@@@@.:.@@@@@@@@@@@@@@@@@@=-+--:%@@@@@@%%#**+....   
@@@@@@@@@@@@@@@@@@@@@@:::.=@@@@@@@@@@@@@@@@@@@@@@@@@@%-=@@@@@@@@@@@@@@@@@@@#+-::::@@@@@@@@##*#...   
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.@@.=%@@@@@@@@@@@@@@@@@@@@@+#:::::@@@@@@@*%%*...   
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:#@%%@@@@@@@@@@@@@@@@@@@@@@@@=::::::@@@@@@.......   
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.:+:.@@@@@@@@@@@@@@@@@@@@@@@@=::::---.@@@@=..        
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:-+*:@@@@@@@@@@@@@@@@@@@@@@+:::::+++=.@@@@.          
</div>
<div class="scan-lines"></div>
<!-- Main content container -->
<div class="w-full max-w-4xl bg-black opacity-80 p-4 rounded-md space-y-6 flex-col">
    <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="flex flex-col">
            <div class="text-white flex flex-row gap-4">
                <img src="pfp.jpg" alt="pfp" class="w-32 h-32 rounded-full border-green-900/50 border-2">
                <div>
                    <h1 class="text-left text-2xl">About Me</h1>
                    <ul class="text-lg">
                        <li>- CS student</li>
                        <li>- Rust</li>
                    </ul>
                    <p class="font-bold text-lg mt-2">CONTACT ME THROUGH X/TWITTER</p>
                </div>
            </div>
            <p class="mt-4">I also enjoy playing video games and making music.</p>
        </div>
        <div class="flex flex-row">
            <Socials />
        </div>
    </div>
    <div>
        <h1 class="text-2xl text-center ">Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 justify-around gap-4 mt-2">
            {#each projects as project}
                <div class="bg-black border border-green-900/50 p-4 rounded-lg flex flex-col h-full">
                    <h3 class="text-xl font-semibold mb-2">{project.name}</h3>
                    <p class="text-gray-300 text-md">{project.description}</p>
                    <div class="mt-auto pt-4 flex justify-center">
                        {#if project.url}
                            <a href={project.url} class="inline-block hover:text-black hover:bg-white text-white py-1 px-3 rounded transition-colors text-md">
                                View Project
                            </a>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div>
        <h1 class="text-2xl text-center">Just Build</h1>
        <div class="flex flex-row gap-2 justify-center mt-2">
            <p class="max-w-md">If you want to do something, do it. It's really that simple. BUILD COOL THINGS. I LOVE BUIDING COOL THINGS.</p>
            <img src="build.png" alt="BUILD" class="h-20">
        </div>
    </div>
    <div>
        <h1 class="text-2xl text-center">My Development Environment</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {#each devices as device}
                <div class="bg-black border border-green-900/50 p-4 rounded-lg">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-3xl">{device.icon}</span>
                        <span class="text-xl font-semibold">{device.name}</span>
                    </div>
                    <div>OS: <span class="text-green-400">{device.os}</span></div>
                    <div>Editor: <span class="text-green-400">{device.editor}</span></div>
                    <div>Terminal: <span class="text-green-400">{device.terminal}</span></div>
                    <div>Shell: <span class="text-green-400">{device.shell}</span></div>
                    {#if device.extra}
                    <div class="text-center mt-1">{device.extra}</div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>