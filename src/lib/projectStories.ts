export type StoryBlock =
    | { kind: 'heading'; text: string; level?: 2 | 3 | 4 }
    | { kind: 'paragraph'; text: string }
    | { kind: 'image'; src: string; alt: string; caption?: string }
    | { kind: 'list'; items: string[] };

export type StoryBySlug = Record<string, StoryBlock[]>;

export const storiesBySlug: StoryBySlug = {
    '3d-scene-reconstruction': [
        { kind: 'heading', text: 'Inspiration', level: 2 },
        {
            kind: 'paragraph',
            text:
                'The goal of this project was to attempt a real -> sim, for user interfaces. I got the idea for this after seeing a video from a robotics company on twitter. I thought it would be cool to be able to command the robots like units in starcraft.' 
        },
        { kind: 'heading', text: 'PhDs aren\'t real.', level: 2 },
        { kind: 'paragraph', text: 'While my friend and I were working on this project we came to the conclusion that phds are not real. (cope)' },
        { kind: 'paragraph', text: 'Since phds are seen as the pinnacle of academia, and you can learn anything in 2-weeks (1 phd). I deicded to measure this project in phds. The project\'s scope quickly became 4+ phds..'},
        { kind: 'image', src: '/output.jpg', alt: 'Reconstruction preview', caption: 'BFMatching' },
        { kind: 'heading', text: 'Gaussian Splatting', level: 2 },
        { kind: 'paragraph', text: 'I spent a lot of time reading about gaussian splatting. It was the best approach I could find for the visulization, but actual Gaussian Splats are far to complex and expensive to render in real-time. I\'m still looking into this (august 20, 2025)' },
        { kind: 'heading', text: 'Update 09/12/2025', level: 2 },
        { kind: 'paragraph', text: 'After reading a paper about a newer method for SLAM. I have decided to implement it. DK-SLAM in Applied Sciences published July 2025. I am unsure how long it will take to implement. And what I will need to write from scratch. But this approach aligns heavily with what I wanted to implement.' },
    ]
};
