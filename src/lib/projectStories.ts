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
        { kind: 'heading', text: 'The Approach', level: 2 },
        { kind: 'paragraph', text: 'The actual SLAM system is based on this paper: https://arxiv.org/abs/2401.09160. Rendering is done with Gaussian Splatting in Bevy with a custom shader. ' },
        { kind: 'heading', text: 'PhDs aren\'t real.', level: 2 },
        { kind: 'paragraph', text: 'The truth is you can learn anything in 2-weeks. (1 phd). Although I\'ve already spent multiple phds (2 weeks) of time on this project, PhDs aren\'t real.' },
    ]
};
