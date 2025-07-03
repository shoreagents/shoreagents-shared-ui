import React, { forwardRef } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { inputVariants } from '../../utils/variants';
import { InputProps } from '../../types';

/**
 * Input component with validation states and icon support
 * 
 * @example
 * ```tsx
 * <Input 
 *   label="Email" 
 *   placeholder="Enter your email"
 *   type="email"
 * />
 * 
 * <Input 
 *   variant="error" 
 *   error="This field is required"
 *   leftIcon={<MailIcon />}
 * />
 * 
 * <Input 
 *   variant="success"
 *   helperText="Looks good!"
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    variant = 'default',
    size = 'md',
    fullWidth = true,
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    testId,
    id,
    ...props
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = variant === 'error' || Boolean(error);
    const hasSuccess = variant === 'success';
    
    // Auto-add validation icons
    const finalLeftIcon = leftIcon;
    const finalRightIcon = rightIcon || (hasError ? <AlertCircle className="h-4 w-4 text-red-500" /> : 
                                      hasSuccess ? <CheckCircle className="h-4 w-4 text-green-500" /> : 
                                      null);

    const inputClasses = cn(
      inputVariants({ 
        variant: hasError ? 'error' : hasSuccess ? 'success' : 'default', 
        size, 
        fullWidth 
      }),
      finalLeftIcon && 'pl-10',
      finalRightIcon && 'pr-10',
      className
    );

    return (
      <div className={cn('space-y-2', fullWidth && 'w-full')}>
        {label && (
          <label 
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {finalLeftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {finalLeftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            data-testid={testId}
            {...props}
          />
          
          {finalRightIcon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {finalRightIcon}
            </div>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={cn(
            'text-sm',
            hasError ? 'text-red-600' : 'text-gray-600'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

/**
 * Textarea component with similar styling to Input
 */
export const Textarea = forwardRef<HTMLTextAreaElement, Omit<InputProps, 'leftIcon' | 'rightIcon'> & React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({
    className,
    variant = 'default',
    size = 'md',
    fullWidth = true,
    label,
    error,
    helperText,
    testId,
    id,
    ...props
  }, ref) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = variant === 'error' || Boolean(error);
    
    const textareaClasses = cn(
      'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      hasError && 'border-red-500 focus:border-red-500',
      variant === 'success' && 'border-green-500 focus:border-green-500',
      className
    );

    return (
      <div className={cn('space-y-2', fullWidth && 'w-full')}>
        {label && (
          <label 
            htmlFor={textareaId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        
        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClasses}
          data-testid={testId}
          {...props}
        />
        
        {(error || helperText) && (
          <p className={cn(
            'text-sm',
            hasError ? 'text-red-600' : 'text-gray-600'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea'; 