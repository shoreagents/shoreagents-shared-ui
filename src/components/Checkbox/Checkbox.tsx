import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Check, Minus } from 'lucide-react';

const checkboxVariants = cva(
  'inline-flex items-center justify-center rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-gray-300 text-white focus:ring-primary-500 data-[checked]:bg-primary-600 data-[checked]:border-primary-600',
        success: 'border-gray-300 text-white focus:ring-green-500 data-[checked]:bg-green-600 data-[checked]:border-green-600',
        warning: 'border-gray-300 text-white focus:ring-orange-500 data-[checked]:bg-orange-600 data-[checked]:border-orange-600',
        error: 'border-gray-300 text-white focus:ring-red-500 data-[checked]:bg-red-600 data-[checked]:border-red-600',
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

export interface CheckboxProps extends VariantProps<typeof checkboxVariants> {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
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

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({
    checked,
    defaultChecked,
    indeterminate = false,
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
    const checkboxRef = React.useRef<HTMLInputElement>(null);
    const currentChecked = checked !== undefined ? checked : internalChecked;
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    // Handle indeterminate state
    React.useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;
      if (checked === undefined) {
        setInternalChecked(newChecked);
      }
      onChange?.(newChecked);
    };

    const renderIcon = () => {
      if (indeterminate) {
        return <Minus className="h-3 w-3" />;
      }
      if (currentChecked) {
        return <Check className="h-3 w-3" />;
      }
      return null;
    };

    return (
      <div className="flex items-start space-x-3">
        <div className="relative">
          <input
            {...props}
            ref={(node) => {
              checkboxRef.current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            type="checkbox"
            id={checkboxId}
            name={name}
            value={value}
            checked={currentChecked}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={description || error ? `${checkboxId}-description` : undefined}
            onChange={handleChange}
            onBlur={onBlur}
            className="sr-only"
          />
          <div
            className={cn(
              checkboxVariants({ variant, size }),
              currentChecked || indeterminate ? 'bg-current border-current' : 'bg-white',
              className
            )}
            data-checked={currentChecked || indeterminate}
          >
            {renderIcon()}
          </div>
        </div>

        {(label || children || description) && (
          <div className="flex-1 min-w-0">
            {(label || children) && (
              <label
                htmlFor={checkboxId}
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
                id={`${checkboxId}-description`}
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
                id={`${checkboxId}-description`}
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

Checkbox.displayName = 'Checkbox'; 