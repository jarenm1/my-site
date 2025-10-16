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
        { kind: 'paragraph', text: 'The SLAM system kinda inspired by this paper: https://arxiv.org/abs/2401.09160. Rendering uses triangle splatting in a custom renderer built on wgpu. ' },
        { kind: 'heading', text: 'ML Feature Extraction', level: 2 },
        { kind: 'paragraph', text: 'Focus is on ML-driven feature extraction: robust keypoints, learned descriptors, and per-frame embeddings to improve correspondence, pose estimation, and surface consistency.' },
        { kind: 'heading', text: 'Training Data Generation', level: 2 },
        { kind: 'paragraph', text: 'The custom renderer produces training data at scale: photorealistic sequences with ground-truth camera poses, depth, normals, motion, and segmentation, plus controllable trajectories and lighting for domain randomization.' },
        { kind: 'heading', text: 'Why Triangle Splatting', level: 2 },
        { kind: 'list', items: [
            'Triangle easy to render',
            'Fuses well with feature-based reconstruction pipelines'
        ] },
    ]
};
