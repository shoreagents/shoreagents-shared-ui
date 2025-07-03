import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const radioVariants = cva(
  'inline-flex items-center justify-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus:ring-primary-500 data-[checked]:border-primary-600',
        success: 'border-gray-300 focus:ring-green-500 data-[checked]:border-green-600',
        warning: 'border-gray-300 focus:ring-orange-500 data-[checked]:border-orange-600',
        error: 'border-gray-300 focus:ring-red-500 data-[checked]:border-red-600',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const dotVariants = cva(
  'rounded-full bg-current transition-all',
  {
    variants: {
      variant: {
        default: 'text-primary-600',
        success: 'text-green-600',
        warning: 'text-orange-600',
        error: 'text-red-600',
      },
      size: {
        sm: 'h-2 w-2',
        md: 'h-2.5 w-2.5',
        lg: 'h-3 w-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface RadioProps extends VariantProps<typeof radioVariants> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  description?: string;
  error?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({
    checked,
    defaultChecked,
    disabled = false,
    required = false,
    label,
    description,
    error,
    id,
    name,
    value,
    onChange,
    onBlur,
    variant,
    size,
    className,
    children,
    ...props
  }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange && value) {
        onChange(value);
      }
    };

    return (
      <div className="flex items-start space-x-3">
        <div className="relative">
          <input
            {...props}
            ref={ref}
            type="radio"
            id={radioId}
            name={name}
            value={value}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={description || error ? `${radioId}-description` : undefined}
            onChange={handleChange}
            onBlur={onBlur}
            className="sr-only"
          />
          <div
            className={cn(
              radioVariants({ variant, size }),
              checked ? 'bg-white border-current' : 'bg-white',
              className
            )}
            data-checked={checked}
          >
            {checked && (
              <div className={cn(dotVariants({ variant, size }))} />
            )}
          </div>
        </div>

        {(label || children || description) && (
          <div className="flex-1 min-w-0">
            {(label || children) && (
              <label
                htmlFor={radioId}
                className={cn(
                  'block text-sm font-medium cursor-pointer',
                  error ? 'text-red-700' : 'text-gray-900',
                  disabled && 'cursor-not-allowed opacity-50'
                )}
              >
                {label || children}
                {required && <span className="text-red-500 ml-1">*</span>}
              </label>
            )}
            
            {description && (
              <p
                id={`${radioId}-description`}
                className={cn(
                  'mt-1 text-xs',
                  error ? 'text-red-600' : 'text-gray-500'
                )}
              >
                {description}
              </p>
            )}
            
            {error && (
              <p
                id={`${radioId}-description`}
                className="mt-1 text-xs text-red-600"
              >
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

// Radio Group Component
export interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  description?: string;
  error?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({
    value,
    defaultValue,
    name,
    disabled = false,
    required = false,
    orientation = 'vertical',
    label,
    description,
    error,
    onChange,
    onBlur,
    className,
    children,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string>(defaultValue || '');
    const currentValue = value !== undefined ? value : internalValue;
    const groupId = `radio-group-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const enhancedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === Radio) {
        return React.cloneElement(child as React.ReactElement<RadioProps>, {
          name,
          checked: child.props.value === currentValue,
          disabled: disabled || child.props.disabled,
          onChange: handleChange,
          onBlur,
          variant: error ? 'error' : child.props.variant,
        });
      }
      return child;
    });

    return (
      <div {...props} ref={ref} className={cn('space-y-4', className)}>
        {label && (
          <fieldset>
            <legend className="text-sm font-medium text-gray-900 mb-2">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </legend>
          </fieldset>
        )}
        
        <div
          role="radiogroup"
          aria-labelledby={label ? `${groupId}-label` : undefined}
          aria-describedby={description || error ? `${groupId}-description` : undefined}
          aria-required={required}
          className={cn(
            'space-y-3',
            orientation === 'horizontal' && 'flex space-x-6 space-y-0'
          )}
        >
          {enhancedChildren}
        </div>

        {(description || error) && (
          <p
            id={`${groupId}-description`}
            className={cn(
              'text-xs',
              error ? 'text-red-600' : 'text-gray-500'
            )}
          >
            {error || description}
          </p>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup'; 