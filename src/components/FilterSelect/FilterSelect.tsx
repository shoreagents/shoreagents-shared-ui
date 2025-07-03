import React, { forwardRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { filterSelectVariants } from '../../utils/variants';
import { FilterSelectProps } from '../../types';

/**
 * FilterSelect component for filtering data with dropdown options
 * 
 * @example
 * ```tsx
 * <FilterSelect
 *   placeholder="All Status"
 *   options={[
 *     { value: 'all', label: 'All Status' },
 *     { value: 'online', label: 'Online' },
 *     { value: 'offline', label: 'Offline' }
 *   ]}
 *   value={selectedStatus}
 *   onValueChange={setSelectedStatus}
 * />
 * ```
 */
export const FilterSelect = forwardRef<HTMLDivElement, FilterSelectProps>(
  ({
    className,
    options,
    value,
    onValueChange,
    placeholder = 'Select option',
    size = 'md',
    disabled = false,
    testId,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || '');

    const currentValue = value !== undefined ? value : selectedValue;
    const selectedOption = options.find(option => option.value === currentValue);

    const handleSelect = (optionValue: string) => {
      const newValue = optionValue === currentValue ? '' : optionValue;
      
      if (value === undefined) {
        setSelectedValue(newValue);
      }
      
      if (onValueChange) {
        onValueChange(newValue);
      }
      
      setIsOpen(false);
    };

    return (
      <div
        ref={ref}
        className={cn(filterSelectVariants({ size }), className)}
        data-testid={testId}
        {...props}
      >
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            'relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500',
            disabled && 'opacity-50 cursor-not-allowed',
            size === 'sm' && 'py-1.5 text-xs',
            size === 'md' && 'py-2 text-sm',
            size === 'lg' && 'py-2.5 text-base'
          )}
        >
          <span className="block truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1 max-h-60 overflow-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  disabled={option.disabled}
                  className={cn(
                    'relative w-full cursor-pointer select-none py-2 pl-3 pr-9 text-left text-sm hover:bg-gray-50',
                    option.disabled && 'opacity-50 cursor-not-allowed',
                    currentValue === option.value && 'bg-blue-50 text-blue-900'
                  )}
                >
                  <span className="block truncate">{option.label}</span>
                  {currentValue === option.value && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <Check className="h-4 w-4 text-blue-600" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

FilterSelect.displayName = 'FilterSelect'; 