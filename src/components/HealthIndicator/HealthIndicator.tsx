import React, { forwardRef } from 'react';
import { CheckCircle, AlertCircle, XCircle, AlertTriangle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { healthIndicatorVariants } from '../../utils/variants';
import { HealthIndicatorProps } from '../../types';

/**
 * HealthIndicator component for displaying health status with appropriate icons and colors
 * 
 * @example
 * ```tsx
 * <HealthIndicator status="good">Good</HealthIndicator>
 * <HealthIndicator status="warning">Warning</HealthIndicator>
 * <HealthIndicator status="critical">Critical</HealthIndicator>
 * <HealthIndicator status="unknown">Unknown</HealthIndicator>
 * ```
 */
export const HealthIndicator = forwardRef<HTMLDivElement, HealthIndicatorProps>(
  ({
    className,
    status,
    size = 'sm',
    showIcon = true,
    children,
    testId,
    ...props
  }, ref) => {
    const getIcon = () => {
      if (!showIcon) return null;
      
      const iconProps = {
        className: cn(
          'flex-shrink-0',
          size === 'xs' && 'w-3 h-3',
          size === 'sm' && 'w-4 h-4',
          size === 'md' && 'w-5 h-5',
          size === 'lg' && 'w-6 h-6',
          size === 'xl' && 'w-7 h-7'
        )
      };

      switch (status) {
        case 'good':
          return <CheckCircle {...iconProps} />;
        case 'warning':
          return <AlertTriangle {...iconProps} />;
        case 'critical':
          return <XCircle {...iconProps} />;
        case 'unknown':
          return <AlertCircle {...iconProps} />;
        default:
          return <AlertCircle {...iconProps} />;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          healthIndicatorVariants({ status, size }),
          className
        )}
        data-testid={testId}
        {...props}
      >
        {getIcon()}
        <span className="ml-2">{children}</span>
      </div>
    );
  }
);

HealthIndicator.displayName = 'HealthIndicator'; 