import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

const loadingVariants = cva(
  'flex items-center justify-center',
  {
    variants: {
      variant: {
        spinner: '',
        dots: '',
        pulse: '',
        skeleton: '',
      },
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'spinner',
      size: 'md',
    },
  }
);

const spinnerVariants = cva(
  'animate-spin text-current',
  {
    variants: {
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-12 w-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const dotsVariants = cva(
  'flex space-x-1',
  {
    variants: {
      size: {
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
      },
    },
  }
);

const dotVariants = cva(
  'rounded-full bg-current animate-pulse',
  {
    variants: {
      size: {
        xs: 'h-1 w-1',
        sm: 'h-1.5 w-1.5',
        md: 'h-2 w-2',
        lg: 'h-3 w-3',
        xl: 'h-4 w-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const pulseVariants = cva(
  'rounded-full bg-current animate-pulse',
  {
    variants: {
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-12 w-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface LoadingProps extends VariantProps<typeof loadingVariants> {
  text?: string;
  fullScreen?: boolean;
  overlay?: boolean;
  className?: string;
}

const SpinnerLoader = ({ size }: { size: any }) => (
  <Loader2 className={cn(spinnerVariants({ size }))} />
);

const DotsLoader = ({ size }: { size: any }) => (
  <div className={cn(dotsVariants({ size }))}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className={cn(dotVariants({ size }))}
        style={{
          animationDelay: `${i * 0.15}s`,
          animationDuration: '0.6s',
        }}
      />
    ))}
  </div>
);

const PulseLoader = ({ size }: { size: any }) => (
  <div className={cn(pulseVariants({ size }))} />
);

const SkeletonLoader = ({ size }: { size: any }) => (
  <div
    className={cn(
      'animate-pulse bg-gray-200 rounded',
      size === 'xs' && 'h-3 w-16',
      size === 'sm' && 'h-4 w-20',
      size === 'md' && 'h-6 w-24',
      size === 'lg' && 'h-8 w-32',
      size === 'xl' && 'h-12 w-40'
    )}
  />
);

export const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({
    variant,
    size,
    text,
    fullScreen = false,
    overlay = false,
    className,
    ...props
  }, ref) => {
    const renderLoader = () => {
      switch (variant) {
        case 'dots':
          return <DotsLoader size={size} />;
        case 'pulse':
          return <PulseLoader size={size} />;
        case 'skeleton':
          return <SkeletonLoader size={size} />;
        default:
          return <SpinnerLoader size={size} />;
      }
    };

    const content = (
      <div
        className={cn(
          'flex flex-col items-center justify-center space-y-2',
          fullScreen && 'min-h-screen',
          className
        )}
      >
        {renderLoader()}
        {text && (
          <p className="text-sm text-gray-600 mt-2">
            {text}
          </p>
        )}
      </div>
    );

    if (overlay) {
      return (
        <div
          {...props}
          ref={ref}
          className={cn(
            'fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75',
            className
          )}
        >
          <div className="flex flex-col items-center space-y-2">
            {renderLoader()}
            {text && (
              <p className="text-sm text-gray-600">
                {text}
              </p>
            )}
          </div>
        </div>
      );
    }

    return (
      <div
        {...props}
        ref={ref}
        className={cn(loadingVariants({ variant, size }), className)}
      >
        {content}
      </div>
    );
  }
);

Loading.displayName = 'Loading';

// Skeleton component for loading states
export interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  rounded?: boolean;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, height = '1rem', width = '100%', rounded = false, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'animate-pulse bg-gray-200',
          rounded ? 'rounded-full' : 'rounded',
          className
        )}
        style={{
          height: typeof height === 'number' ? `${height}px` : height,
          width: typeof width === 'number' ? `${width}px` : width,
        }}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton'; 