import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { ChevronRight, Home } from 'lucide-react';

const breadcrumbsVariants = cva(
  'flex items-center space-x-1',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const breadcrumbItemVariants = cva(
  'transition-colors',
  {
    variants: {
      active: {
        true: 'text-gray-900 font-medium',
        false: 'text-gray-500 hover:text-gray-700',
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps extends VariantProps<typeof breadcrumbsVariants> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  homeIcon?: boolean;
  homeHref?: string;
  onHomeClick?: () => void;
  className?: string;
}

export const Breadcrumbs = React.forwardRef<HTMLNavElement, BreadcrumbsProps>(
  ({
    items,
    separator,
    homeIcon = false,
    homeHref = '/',
    onHomeClick,
    size,
    className,
    ...props
  }, ref) => {
    const defaultSeparator = <ChevronRight className="h-4 w-4 text-gray-400" />;

    return (
      <nav
        {...props}
        ref={ref}
        aria-label="Breadcrumb"
        className={cn(breadcrumbsVariants({ size }), className)}
      >
        <ol className="flex items-center space-x-1">
          {/* Home icon */}
          {homeIcon && (
            <li>
              <div className="flex items-center">
                {homeHref ? (
                  <a
                    href={homeHref}
                    onClick={onHomeClick}
                    className={cn(
                      breadcrumbItemVariants({ active: false }),
                      'hover:text-primary-600'
                    )}
                    aria-label="Home"
                  >
                    <Home className="h-4 w-4" />
                  </a>
                ) : (
                  <button
                    onClick={onHomeClick}
                    className={cn(
                      breadcrumbItemVariants({ active: false }),
                      'hover:text-primary-600'
                    )}
                    aria-label="Home"
                  >
                    <Home className="h-4 w-4" />
                  </button>
                )}
              </div>
            </li>
          )}

          {/* Breadcrumb items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center">
                {/* Separator */}
                {(index > 0 || homeIcon) && (
                  <div className="flex items-center mr-1">
                    {separator || defaultSeparator}
                  </div>
                )}

                {/* Breadcrumb item */}
                <div>
                  {isLast ? (
                    <span
                      className={cn(breadcrumbItemVariants({ active: true }))}
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : item.href ? (
                    <a
                      href={item.href}
                      onClick={item.onClick}
                      className={cn(
                        breadcrumbItemVariants({ active: false }),
                        'hover:text-primary-600'
                      )}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={item.onClick}
                      className={cn(
                        breadcrumbItemVariants({ active: false }),
                        'hover:text-primary-600'
                      )}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs'; 