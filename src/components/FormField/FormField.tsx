import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const formFieldVariants = cva(
  'space-y-2',
  {
    variants: {
      orientation: {
        vertical: 'flex flex-col',
        horizontal: 'flex flex-row items-start space-x-4 space-y-0',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  }
);

export interface FormFieldProps extends VariantProps<typeof formFieldVariants> {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({
    label,
    description,
    error,
    required = false,
    disabled = false,
    id,
    orientation,
    className,
    children,
    ...props
  }, ref) => {
    const fieldId = id || `form-field-${Math.random().toString(36).substr(2, 9)}`;

    // Clone children and pass necessary props
    const enhancedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          id: child.props.id || fieldId,
          required: child.props.required ?? required,
          disabled: child.props.disabled ?? disabled,
          error: child.props.error || error,
          'aria-describedby': description || error ? `${fieldId}-description` : undefined,
        });
      }
      return child;
    });

    return (
      <div
        {...props}
        ref={ref}
        className={cn(formFieldVariants({ orientation }), className)}
      >
        {label && (
          <label
            htmlFor={fieldId}
            className={cn(
              'block text-sm font-medium',
              error ? 'text-red-700' : 'text-gray-900',
              disabled && 'opacity-50'
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className={cn(orientation === 'horizontal' ? 'flex-1' : 'w-full')}>
          {enhancedChildren}
        </div>

        {(description || error) && (
          <p
            id={`${fieldId}-description`}
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

FormField.displayName = 'FormField';

// Form component for grouping multiple fields
export interface FormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  children: React.ReactNode;
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ onSubmit, className, children, ...props }, ref) => {
    return (
      <form
        {...props}
        ref={ref}
        onSubmit={onSubmit}
        className={cn('space-y-6', className)}
      >
        {children}
      </form>
    );
  }
);

Form.displayName = 'Form'; 