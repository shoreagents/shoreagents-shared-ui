import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const headerVariants = cva(
  'w-full border-b bg-white',
  {
    variants: {
      variant: {
        default: 'border-gray-200',
        primary: 'border-primary-200 bg-primary-50',
        dark: 'border-gray-700 bg-gray-900 text-white',
      },
      size: {
        sm: 'h-12',
        md: 'h-16',
        lg: 'h-20',
      },
      sticky: {
        true: 'sticky top-0 z-40',
        false: 'relative',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      sticky: false,
    },
  }
);

export interface HeaderProps extends VariantProps<typeof headerVariants> {
  logo?: React.ReactNode;
  navigation?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({
    logo,
    navigation,
    actions,
    variant,
    size,
    sticky,
    className,
    children,
    ...props
  }, ref) => {
    return (
      <header
        {...props}
        ref={ref}
        className={cn(headerVariants({ variant, size, sticky }), className)}
      >
        <div className="h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo section */}
            {logo && (
              <div className="flex items-center flex-shrink-0">
                {logo}
              </div>
            )}

            {/* Navigation section */}
            {navigation && (
              <nav className="hidden md:flex md:space-x-8">
                {navigation}
              </nav>
            )}

            {/* Actions section */}
            {actions && (
              <div className="flex items-center space-x-4">
                {actions}
              </div>
            )}

            {/* Custom content */}
            {children && !logo && !navigation && !actions && (
              <div className="flex items-center justify-between w-full">
                {children}
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
);

Header.displayName = 'Header';

// Header Navigation Item
export interface HeaderNavItemProps {
  href?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const HeaderNavItem = React.forwardRef<HTMLAnchorElement, HeaderNavItemProps>(
  ({
    href,
    active = false,
    disabled = false,
    onClick,
    className,
    children,
    ...props
  }, ref) => {
    const Component = href ? 'a' : 'button';

    return (
      <Component
        {...props}
        ref={ref as any}
        href={href}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          'px-3 py-2 text-sm font-medium rounded-md transition-colors',
          active
            ? 'text-primary-700 bg-primary-100'
            : 'text-gray-700 hover:text-primary-700 hover:bg-gray-100',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

HeaderNavItem.displayName = 'HeaderNavItem'; 