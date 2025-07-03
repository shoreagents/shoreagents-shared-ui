import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const toggleVariants = cva(
  'relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'focus:ring-primary-500 data-[checked]:bg-primary-600 bg-gray-200',
        success: 'focus:ring-green-500 data-[checked]:bg-green-600 bg-gray-200',
        warning: 'focus:ring-orange-500 data-[checked]:bg-orange-600 bg-gray-200',
        error: 'focus:ring-red-500 data-[checked]:bg-red-600 bg-gray-200',
      },
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const thumbVariants = cva(
  'pointer-events-none inline-block rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
      checked: {
        true: '',
        false: 'translate-x-0',
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        checked: true,
        class: 'translate-x-4',
      },
      {
        size: 'md',
        checked: true,
        class: 'translate-x-5',
      },
      {
        size: 'lg',
        checked: true,
        class: 'translate-x-5',
      },
    ],
    defaultVariants: {
      size: 'md',
      checked: false,
    },
  }
);

export interface ToggleProps extends VariantProps<typeof toggleVariants> {
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
  onChange?: (checked: boolean) => void;
  onBlur?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
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
    const [internalChecked, setInternalChecked] = React.useState<boolean>(defaultChecked || false);
    const currentChecked = checked !== undefined ? checked : internalChecked;
    const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

    const handleToggle = () => {
      const newChecked = !currentChecked;
      if (checked === undefined) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        handleToggle();
      }
    };

    return (
      <div className="flex items-start space-x-3">
        {/* Hidden input for form submission */}
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={currentChecked}
          onChange={() => {}} // Handled by button
          className="sr-only"
          tabIndex={-1}
          aria-hidden="true"
        />
        
        <button
          {...props}
          ref={ref}
          type="button"
          role="switch"
          id={toggleId}
          disabled={disabled}
          aria-checked={currentChecked}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={description || error ? `${toggleId}-description` : undefined}
          className={cn(
            toggleVariants({ variant, size }),
            className
          )}
          data-checked={currentChecked}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          onBlur={onBlur}
        >
          <span
            aria-hidden="true"
            className={cn(
              thumbVariants({ size, checked: currentChecked })
            )}
          />
        </button>

        {(label || children || description) && (
          <div className="flex-1 min-w-0">
            {(label || children) && (
              <label
                htmlFor={toggleId}
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
                id={`${toggleId}-description`}
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
                id={`${toggleId}-description`}
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

Toggle.displayName = 'Toggle'; 