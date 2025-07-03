import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { badgeVariants } from '../../utils/variants';
import { BadgeProps } from '../../types';

/**
 * Badge component for status indicators and labels
 * 
 * @example
 * ```tsx
 * <Badge variant="primary">New</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge variant="error">Error</Badge>
 * <Badge dot />
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({
    className,
    variant = 'gray',
    size = 'md',
    rounded = true,
    dot = false,
    children,
    testId,
    ...props
  }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({ variant, size, rounded, dot }),
          className
        )}
        data-testid={testId}
        {...props}
      >
        {!dot && children}
      </span>
    );
  }
);

Badge.displayName = 'Badge'; 