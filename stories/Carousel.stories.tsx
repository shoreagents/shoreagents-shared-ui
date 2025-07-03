import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '../src/components/Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Media/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive image carousel component with navigation, thumbnails, autoplay, and keyboard support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'contained', 'full-width'],
    },
    aspectRatio: {
      control: 'select',
      options: ['1:1', '4:3', '3:2', '16:9', '21:9'],
    },
    thumbnailPosition: {
      control: 'select',
      options: ['top', 'bottom'],
    },
    autoPlayInterval: {
      control: { type: 'range', min: 1000, max: 10000, step: 500 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample images for demonstrations
const sampleImages = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Mountain landscape',
    caption: 'Beautiful mountain landscape at sunset',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop',
  },
  {
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop',
    alt: 'Ocean view',
    caption: 'Serene ocean view with clear blue waters',
    thumbnail: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200&h=150&fit=crop',
  },
  {
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    alt: 'City skyline',
    caption: 'Modern city skyline at night',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=150&fit=crop',
  },
  {
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    alt: 'Forest path',
    caption: 'Peaceful forest path in autumn',
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=150&fit=crop',
  },
  {
    src: 'https://images.unsplash.com/photo-1464822759844-d150b341f424?w=800&h=600&fit=crop',
    alt: 'Desert landscape',
    caption: 'Vast desert with sand dunes',
    thumbnail: 'https://images.unsplash.com/photo-1464822759844-d150b341f424?w=200&h=150&fit=crop',
  },
];

export const Default: Story = {
  args: {
    images: sampleImages.slice(0, 3),
  },
};

export const WithThumbnails: Story = {
  args: {
    images: sampleImages,
    showThumbnails: true,
    aspectRatio: '16:9',
  },
};

export const AutoPlay: Story = {
  args: {
    images: sampleImages,
    autoPlay: true,
    showPlayButton: true,
    autoPlayInterval: 3000,
    aspectRatio: '16:9',
  },
};

export const ContainedVariant: Story = {
  args: {
    images: sampleImages,
    variant: 'contained',
    showThumbnails: true,
    aspectRatio: '3:2',
  },
};

export const SquareAspectRatio: Story = {
  args: {
    images: sampleImages,
    aspectRatio: '1:1',
    showThumbnails: true,
    thumbnailPosition: 'bottom',
  },
};

export const UltraWideAspectRatio: Story = {
  args: {
    images: sampleImages,
    aspectRatio: '21:9',
    showArrows: true,
    showDots: true,
  },
};

export const MinimalControls: Story = {
  args: {
    images: sampleImages,
    showArrows: false,
    showDots: false,
    showThumbnails: false,
    aspectRatio: '4:3',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with minimal controls - useful for background slideshows or when space is limited.',
      },
    },
  },
};

export const ThumbnailsOnTop: Story = {
  args: {
    images: sampleImages,
    showThumbnails: true,
    thumbnailPosition: 'top',
    aspectRatio: '16:9',
  },
};

export const NoLoop: Story = {
  args: {
    images: sampleImages.slice(0, 3),
    loop: false,
    aspectRatio: '16:9',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel that stops at the first and last images (no looping).',
      },
    },
  },
};

export const SingleImage: Story = {
  args: {
    images: [sampleImages[0]],
    aspectRatio: '16:9',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with a single image - navigation controls are automatically hidden.',
      },
    },
  },
};

export const EmptyCarousel: Story = {
  args: {
    images: [],
    aspectRatio: '16:9',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with no images - shows a placeholder message.',
      },
    },
  },
};

export const FullFeatured: Story = {
  args: {
    images: sampleImages,
    variant: 'contained',
    aspectRatio: '16:9',
    showArrows: true,
    showThumbnails: true,
    showDots: true,
    showPlayButton: true,
    autoPlay: true,
    autoPlayInterval: 4000,
    loop: true,
    thumbnailPosition: 'bottom',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with all features enabled - thumbnails, autoplay, arrows, dots, and play/pause control.',
      },
    },
  },
}; 