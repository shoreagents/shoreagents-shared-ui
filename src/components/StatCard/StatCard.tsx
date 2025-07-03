import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { statCardVariants } from '../../utils/variants';
import { StatCardProps } from '../../types';

/**
 * StatCard component for displaying dashboard statistics with icons and color variants
 * 
 * @example
 * ```tsx
 * <StatCard 
 *   title="Total Endpoints" 
 *   value="701" 
 *   icon={<Monitor className="w-5 h-5" />}
 *   variant="default"
 * />
 * 
 * <StatCard 
 *   title="Online" 
 *   value="523" 
 *   icon={<Circle className="w-5 h-5" />}
 *   variant="success"
 * />
 * ```
 */
export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  ({
    className,
    title,
    value,
    icon,
    variant = 'default',
    size = 'md',
    testId,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          statCardVariants({ variant, size }),
          className
        )}
        data-testid={testId}
        {...props}
      >
        <div className="flex items-center space-x-3">
          {icon && (
            <div className={cn(
              'flex-shrink-0 p-2 rounded-lg',
              variant === 'success' && 'bg-green-100 text-green-600',
              variant === 'error' && 'bg-red-100 text-red-600',
              variant === 'warning' && 'bg-yellow-100 text-yellow-600',
              variant === 'info' && 'bg-blue-100 text-blue-600',
              variant === 'default' && 'bg-gray-100 text-gray-600'
            )}>
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-600 truncate">
              {title}
            </p>
            <p className={cn(
              'text-2xl font-semibold truncate',
              variant === 'success' && 'text-green-600',
              variant === 'error' && 'text-red-600',
              variant === 'warning' && 'text-yellow-600',
              variant === 'info' && 'text-blue-600',
              variant === 'default' && 'text-gray-900'
            )}>
              {value}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

StatCard.displayName = 'StatCard'; 