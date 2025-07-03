import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';
import { buttonVariants } from '../../utils/variants';
import { ButtonProps } from '../../types';

/**
 * Button component with multiple variants and states
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * 
 * <Button variant="outline" size="lg" leftIcon={<Icon />}>
 *   With icon
 * </Button>
 * 
 * <Button loading>
 *   Loading...
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    fullWidth,
    loading = false,
    disabled,
    leftIcon,
    rightIcon,
    children,
    as = 'button',
    href,
    testId,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading;
    
    const buttonClasses = cn(
      buttonVariants({ variant, size, fullWidth }),
      className
    );

    const content = (
      <>
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {!loading && leftIcon && (
          <span className="mr-2 flex-shrink-0">
            {leftIcon}
          </span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className="ml-2 flex-shrink-0">
            {rightIcon}
          </span>
        )}
      </>
    );

    if (as === 'a' || href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={buttonClasses}
          data-testid={testId}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={isDisabled}
        data-testid={testId}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button'; 