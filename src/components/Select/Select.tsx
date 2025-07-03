import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { ChevronDown, Check } from 'lucide-react';

const selectVariants = cva(
  'relative flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'focus:ring-primary-500 focus:border-primary-500',
        success: 'border-green-500 focus:ring-green-500 focus:border-green-500',
        error: 'border-red-500 focus:ring-red-500 focus:border-red-500',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const optionVariants = cva(
  'relative flex w-full cursor-pointer select-none items-center rounded px-3 py-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  {
    variants: {
      selected: {
        true: 'bg-primary-50 text-primary-900 font-medium',
        false: 'text-gray-900',
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends VariantProps<typeof selectVariants> {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  helperText?: string;
  error?: string;
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  className?: string;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({
    options,
    value,
    defaultValue,
    placeholder = 'Select an option...',
    disabled = false,
    required = false,
    label,
    helperText,
    error,
    id,
    name,
    onChange,
    onBlur,
    variant,
    size,
    className,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = useState<string>(defaultValue || '');
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const selectRef = useRef<HTMLDivElement>(null);
    const currentValue = value !== undefined ? value : internalValue;
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const actualVariant = error ? 'error' : variant;

    const selectedOption = options.find(option => option.value === currentValue);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setHighlightedIndex(-1);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [isOpen]);

    const handleSelect = (option: SelectOption) => {
      if (option.disabled) return;

      const newValue = option.value;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      setIsOpen(false);
      setHighlightedIndex(-1);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return;

      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (isOpen && highlightedIndex >= 0) {
            handleSelect(options[highlightedIndex]);
          } else {
            setIsOpen(!isOpen);
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setHighlightedIndex(prev => 
              prev < options.length - 1 ? prev + 1 : 0
            );
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (isOpen) {
            setHighlightedIndex(prev => 
              prev > 0 ? prev - 1 : options.length - 1
            );
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
      }
    };

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={selectId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative" ref={selectRef}>
          <button
            {...props}
            ref={ref}
            id={selectId}
            name={name}
            type="button"
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-required={required}
            aria-invalid={!!error}
            aria-describedby={helperText || error ? `${selectId}-description` : undefined}
            className={cn(selectVariants({ variant: actualVariant, size }), className)}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            onBlur={onBlur}
          >
            <span className={cn(
              'block truncate',
              !selectedOption && 'text-gray-500'
            )}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown 
              className={cn(
                'h-4 w-4 text-gray-400 transition-transform duration-200',
                isOpen && 'transform rotate-180'
              )}
            />
          </button>

          {isOpen && (
            <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              <ul
                role="listbox"
                aria-labelledby={selectId}
                className="py-1"
              >
                {options.map((option, index) => (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={option.value === currentValue}
                    aria-disabled={option.disabled}
                    className={cn(
                      optionVariants({ 
                        selected: option.value === currentValue 
                      }),
                      highlightedIndex === index && 'bg-gray-100',
                      option.disabled && 'opacity-50 cursor-not-allowed'
                    )}
                    onClick={() => handleSelect(option)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    <span className="block truncate">
                      {option.label}
                    </span>
                    {option.value === currentValue && (
                      <Check className="h-4 w-4 text-primary-600 ml-auto" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {(helperText || error) && (
          <p 
            id={`${selectId}-description`}
            className={cn(
              'mt-1 text-xs',
              error ? 'text-red-600' : 'text-gray-500'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
); 