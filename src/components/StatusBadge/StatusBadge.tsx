import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { statusBadgeVariants } from '../../utils/variants';
import { StatusBadgeProps } from '../../types';

/**
 * StatusBadge component for displaying status indicators with predefined colors
 * 
 * @example
 * ```tsx
 * <StatusBadge status="online">Online</StatusBadge>
 * <StatusBadge status="offline">Offline</StatusBadge>
 * <StatusBadge status="warning">Warning</StatusBadge>
 * <StatusBadge status="error">Error</StatusBadge>
 * ```
 */
export const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({
    className,
    status,
    size = 'sm',
    children,
    testId,
    ...props
  }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          statusBadgeVariants({ status, size }),
          className
        )}
        data-testid={testId}
        {...props}
      >
        {children}
      </span>
    );
  }
);

StatusBadge.displayName = 'StatusBadge'; 