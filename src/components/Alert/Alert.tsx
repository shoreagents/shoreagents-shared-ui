import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { AlertCircle, CheckCircle, Info, X, AlertTriangle } from 'lucide-react';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4',
  {
    variants: {
      variant: {
        default: 'border-gray-200 bg-white text-gray-900',
        destructive: 'border-red-200 bg-red-50 text-red-900',
        success: 'border-green-200 bg-green-50 text-green-900',
        warning: 'border-orange-200 bg-orange-50 text-orange-900',
        info: 'border-blue-200 bg-blue-50 text-blue-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const iconVariants = cva(
  'h-4 w-4',
  {
    variants: {
      variant: {
        default: 'text-gray-600',
        destructive: 'text-red-600',
        success: 'text-green-600',
        warning: 'text-orange-600',
        info: 'text-blue-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const getDefaultIcon = (variant: string) => {
  switch (variant) {
    case 'destructive':
      return AlertCircle;
    case 'success':
      return CheckCircle;
    case 'warning':
      return AlertTriangle;
    case 'info':
      return Info;
    default:
      return AlertCircle;
  }
};

export interface AlertProps extends VariantProps<typeof alertVariants> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({
    title,
    description,
    icon,
    showIcon = true,
    dismissible = false,
    onDismiss,
    variant,
    className,
    children,
    ...props
  }, ref) => {
    const IconComponent = icon ? null : getDefaultIcon(variant || 'default');

    return (
      <div
        {...props}
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
      >
        <div className="flex">
          {/* Icon */}
          {showIcon && (
            <div className="flex-shrink-0">
              {icon || (IconComponent && (
                <IconComponent className={cn(iconVariants({ variant }))} />
              ))}
            </div>
          )}

          {/* Content */}
          <div className={cn('flex-1', showIcon && 'ml-3')}>
            {title && (
              <h3 className="text-sm font-medium mb-1">
                {title}
              </h3>
            )}
            
            {description && (
              <div className="text-sm opacity-90">
                {description}
              </div>
            )}
            
            {children && (
              <div className={cn('text-sm', (title || description) && 'mt-2')}>
                {children}
              </div>
            )}
          </div>

          {/* Dismiss button */}
          {dismissible && (
            <div className="flex-shrink-0 ml-3">
              <button
                type="button"
                onClick={onDismiss}
                className={cn(
                  'inline-flex rounded-md p-1.5 hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2',
                  variant === 'destructive' && 'focus:ring-red-500',
                  variant === 'success' && 'focus:ring-green-500',
                  variant === 'warning' && 'focus:ring-orange-500',
                  variant === 'info' && 'focus:ring-blue-500',
                  (!variant || variant === 'default') && 'focus:ring-gray-500'
                )}
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert'; 