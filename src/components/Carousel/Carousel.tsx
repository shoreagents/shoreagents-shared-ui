import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { cn } from '../../utils/cn';
import { carouselVariants } from '../../utils/variants';
import { CarouselProps, CarouselImage } from '../../types';

/**
 * Carousel component for displaying images with navigation and controls
 * 
 * @example
 * ```tsx
 * <Carousel 
 *   images={[
 *     { src: '/image1.jpg', alt: 'Image 1' },
 *     { src: '/image2.jpg', alt: 'Image 2' },
 *   ]}
 *   showThumbnails
 *   autoPlay
 * />
 * 
 * <Carousel 
 *   images={images}
 *   variant="contained"
 *   aspectRatio="16:9"
 *   showArrows={false}
 * />
 * ```
 */
export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({
    images,
    currentIndex: controlledIndex,
    onIndexChange,
    variant = 'default',
    aspectRatio = '16:9',
    showArrows = true,
    showThumbnails = false,
    showDots = true,
    showPlayButton = false,
    autoPlay = false,
    autoPlayInterval = 5000,
    loop = true,
    thumbnailPosition = 'bottom',
    className,
    testId,
    ...props
  }, ref) => {
    const [internalIndex, setInternalIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [imageLoadStates, setImageLoadStates] = useState<Record<number, boolean>>({});

    const currentIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;
    const totalImages = images.length;

    const handleIndexChange = useCallback((newIndex: number) => {
      const validIndex = Math.max(0, Math.min(newIndex, totalImages - 1));
      if (controlledIndex === undefined) {
        setInternalIndex(validIndex);
      }
      onIndexChange?.(validIndex);
    }, [controlledIndex, onIndexChange, totalImages]);

    const goToNext = useCallback(() => {
      if (loop || currentIndex < totalImages - 1) {
        const nextIndex = (currentIndex + 1) % totalImages;
        handleIndexChange(nextIndex);
      }
    }, [currentIndex, totalImages, loop, handleIndexChange]);

    const goToPrev = useCallback(() => {
      if (loop || currentIndex > 0) {
        const prevIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
        handleIndexChange(prevIndex);
      }
    }, [currentIndex, totalImages, loop, handleIndexChange]);

    const goToSlide = useCallback((index: number) => {
      handleIndexChange(index);
    }, [handleIndexChange]);

    const toggleAutoPlay = useCallback(() => {
      setIsPlaying((prev: boolean) => !prev);
    }, []);

    // Auto-play functionality
    useEffect(() => {
      if (!isPlaying || !autoPlay || totalImages <= 1) return;

      const interval = setInterval(() => {
        goToNext();
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }, [isPlaying, autoPlay, autoPlayInterval, totalImages, goToNext]);

    // Keyboard navigation
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
          case 'ArrowLeft':
            event.preventDefault();
            goToPrev();
            break;
          case 'ArrowRight':
            event.preventDefault();
            goToNext();
            break;
          case ' ':
            if (showPlayButton) {
              event.preventDefault();
              toggleAutoPlay();
            }
            break;
          case 'Home':
            event.preventDefault();
            goToSlide(0);
            break;
          case 'End':
            event.preventDefault();
            goToSlide(totalImages - 1);
            break;
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToPrev, goToNext, goToSlide, totalImages, showPlayButton, toggleAutoPlay]);

    const handleImageLoad = useCallback((index: number) => {
      setImageLoadStates(prev => ({ ...prev, [index]: true }));
    }, []);

    const getAspectRatioClass = () => {
      const ratioMap: Record<string, string> = {
        '1:1': 'aspect-square',
        '4:3': 'aspect-[4/3]',
        '3:2': 'aspect-[3/2]',
        '16:9': 'aspect-video',
        '21:9': 'aspect-[21/9]',
      };
      return ratioMap[aspectRatio] || 'aspect-video';
    };

    const carouselClasses = cn(
      carouselVariants({ variant }),
      'relative group focus:outline-none',
      className
    );

    if (totalImages === 0) {
      return (
        <div 
          ref={ref}
          className={cn(carouselClasses, getAspectRatioClass(), 'flex items-center justify-center bg-gray-100')}
          data-testid={testId}
          {...props}
        >
          <span className="text-gray-500">No images to display</span>
        </div>
      );
    }

    return (
      <div 
        ref={ref}
        className={carouselClasses}
        data-testid={testId}
        tabIndex={0}
        role="region"
        aria-label="Image carousel"
        {...props}
      >
        {/* Main image container */}
        <div className={cn('relative overflow-hidden rounded-lg', getAspectRatioClass())}>
          <div 
            className="flex transition-transform duration-300 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image: CarouselImage, index: number) => (
              <div key={index} className="min-w-full h-full relative">
                <img
                  src={image.src}
                  alt={image.alt || `Image ${index + 1}`}
                  className={cn(
                    'w-full h-full object-cover transition-opacity duration-300',
                    imageLoadStates[index] ? 'opacity-100' : 'opacity-0'
                  )}
                  onLoad={() => handleImageLoad(index)}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                {!imageLoadStates[index] && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400">Loading...</div>
                  </div>
                )}
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="text-sm">{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          {showArrows && totalImages > 1 && (
            <>
              <button
                onClick={goToPrev}
                disabled={!loop && currentIndex === 0}
                className={cn(
                  'absolute left-2 top-1/2 transform -translate-y-1/2',
                  'bg-black bg-opacity-50 hover:bg-opacity-75 text-white',
                  'w-10 h-10 rounded-full flex items-center justify-center',
                  'transition-all duration-200 opacity-0 group-hover:opacity-100',
                  'focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white',
                  'disabled:opacity-25 disabled:cursor-not-allowed'
                )}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                disabled={!loop && currentIndex === totalImages - 1}
                className={cn(
                  'absolute right-2 top-1/2 transform -translate-y-1/2',
                  'bg-black bg-opacity-50 hover:bg-opacity-75 text-white',
                  'w-10 h-10 rounded-full flex items-center justify-center',
                  'transition-all duration-200 opacity-0 group-hover:opacity-100',
                  'focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white',
                  'disabled:opacity-25 disabled:cursor-not-allowed'
                )}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Play/Pause button */}
          {showPlayButton && autoPlay && totalImages > 1 && (
            <button
              onClick={toggleAutoPlay}
              className={cn(
                'absolute top-2 right-2',
                'bg-black bg-opacity-50 hover:bg-opacity-75 text-white',
                'w-10 h-10 rounded-full flex items-center justify-center',
                'transition-all duration-200 opacity-0 group-hover:opacity-100',
                'focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white'
              )}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Dots navigation */}
        {showDots && totalImages > 1 && (
          <div className="flex justify-center space-x-2 mt-4">
            {images.map((_: CarouselImage, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                  currentIndex === index
                    ? 'bg-primary-500 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Thumbnails */}
        {showThumbnails && totalImages > 1 && (
          <div className={cn(
            'flex gap-2 overflow-x-auto',
            thumbnailPosition === 'bottom' ? 'mt-4' : 'mb-4 order-first'
          )}>
            {images.map((image: CarouselImage, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'flex-shrink-0 w-16 h-12 overflow-hidden rounded border-2 transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500',
                  currentIndex === index
                    ? 'border-primary-500 opacity-100'
                    : 'border-gray-200 opacity-60 hover:opacity-80'
                )}
                aria-label={`Go to image ${index + 1}`}
              >
                <img
                  src={image.thumbnail || image.src}
                  alt={image.alt || `Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Screen reader info */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Image {currentIndex + 1} of {totalImages}
        </div>
      </div>
    );
  }
);

Carousel.displayName = 'Carousel'; 