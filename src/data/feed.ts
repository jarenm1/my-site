export interface FeedItem {
  id: string;
  title?: string;
  subtitle?: string;
  type: 'canvas' | 'youtube';
  date?: string;
  // YouTube video ID or full URL with optional timestamp (e.g. "https://youtu.be/NYFGCESmikA?t=2974")
  youtubeUrl?: string;
  // Aspect ratio ("video" = 16:9 standard, "vertical" = 9:16 for Shorts)
  aspect?: 'video' | 'vertical';
  // For interactive canvas demos
  canvasType?: string;
  tags?: string[];
  link?: {
    label: string;
    url: string;
  };
}

export const feedItems: FeedItem[] = [
  {
    id: 'apple-tesseract',
    title: 'apple tesseract tesseract',
    subtitle: 'Oh what level of apple do you envision in your head?',
    type: 'canvas',
    canvasType: 'apple-tesseract',
    tags: ['shitpost'],
  },
  {
    id: 'triage-data-generation',
    title: 'Triage: data gen',
    subtitle: 'RGB, relative depth, and instance IDs rendered with WebGPU.',
    type: 'canvas',
    canvasType: 'triage-data-generation',
    tags: ['project', 'demo'],
    link: {
      label: 'GitHub',
      url: 'https://github.com/jarenm1/triage'
    }
  },
  {
    id: 'triage-demo',
    title: 'Triage',
    subtitle: 'winit & wgpu rendered in canvas.',
    type: 'canvas',
    canvasType: 'triage',
    tags: ['project', 'demo'],
    link: {
      label: 'GitHub',
      url: 'https://github.com/jarenm1/triage'
    }
  },
  {
    id: 'talk-demo',
    type: 'youtube',
    youtubeUrl: 'https://youtu.be/NYFGCESmikA?t=2974',
    tags: ['shitpost'],
    subtitle: 'the most beautiful programming language btw'
  }
];
