import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const stackVariants = cva(
  'flex',
  {
    variants: {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
        'row-reverse': 'flex-row-reverse',
        'column-reverse': 'flex-col-reverse',
      },
      spacing: {
        none: 'gap-0',
        xs: 'gap-1',
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8',
        '2xl': 'gap-12',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      wrap: {
        true: 'flex-wrap',
        false: 'flex-nowrap',
      },
    },
    defaultVariants: {
      direction: 'column',
      spacing: 'md',
      align: 'stretch',
      justify: 'start',
      wrap: false,
    },
  }
);

const dividerVariants = cva(
  'border-gray-200',
  {
    variants: {
      orientation: {
        horizontal: 'border-t w-full',
        vertical: 'border-l h-full',
      },
      size: {
        sm: 'border-t border-l',
        md: 'border-t-2 border-l-2',
        lg: 'border-t-4 border-l-4',
      },
      variant: {
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      size: 'sm',
      variant: 'solid',
    },
  }
);

export interface StackProps extends VariantProps<typeof stackVariants> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({
    as: Component = 'div',
    direction,
    spacing,
    align,
    justify,
    wrap,
    className,
    children,
    ...props
  }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={cn(
          stackVariants({ direction, spacing, align, justify, wrap }),
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

Stack.displayName = 'Stack';

// HStack (Horizontal Stack) - convenience component
export interface HStackProps extends Omit<StackProps, 'direction'> {}

export const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  ({ ...props }, ref) => {
    return <Stack {...props} ref={ref} direction="row" />;
  }
);

HStack.displayName = 'HStack';

// VStack (Vertical Stack) - convenience component  
export interface VStackProps extends Omit<StackProps, 'direction'> {}

export const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  ({ ...props }, ref) => {
    return <Stack {...props} ref={ref} direction="column" />;
  }
);

VStack.displayName = 'VStack';

// Divider component
export interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string;
  label?: string;
  labelPosition?: 'left' | 'center' | 'right';
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({
    orientation,
    size,
    variant,
    label,
    labelPosition = 'center',
    className,
    ...props
  }, ref) => {
    if (label && orientation === 'horizontal') {
      return (
        <div
          {...props}
          ref={ref}
          className={cn('relative flex items-center', className)}
        >
          <div className={cn(dividerVariants({ orientation, size, variant }), 'flex-1')} />
          <div
            className={cn(
              'px-3 text-sm text-gray-500 bg-white',
              labelPosition === 'left' && 'order-first',
              labelPosition === 'right' && 'order-last'
            )}
          >
            {label}
          </div>
          <div className={cn(dividerVariants({ orientation, size, variant }), 'flex-1')} />
        </div>
      );
    }

    return (
      <div
        {...props}
        ref={ref}
        className={cn(dividerVariants({ orientation, size, variant }), className)}
      />
    );
  }
);

Divider.displayName = 'Divider';

// Spacer component for flexible spacing
export interface SpacerProps {
  className?: string;
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn('flex-1', className)}
      />
    );
  }
);

Spacer.displayName = 'Spacer';

// Center component for centering content
export interface CenterProps {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ inline = false, className, children, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          inline ? 'inline-flex' : 'flex',
          'items-center justify-center',
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Center.displayName = 'Center'; 