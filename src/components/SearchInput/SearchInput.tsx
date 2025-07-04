import React, { forwardRef } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { searchInputVariants } from '../../utils/variants';
import { SearchInputProps } from '../../types';

/**
 * SearchInput component for search functionality with integrated search icon
 * 
 * @example
 * ```tsx
 * <SearchInput placeholder="Search endpoints..." />
 * <SearchInput 
 *   placeholder="Search users..." 
 *   value={searchTerm}
 *   onChange={(e) => setSearchTerm(e.target.value)}
 *   onClear={() => setSearchTerm('')}
 * />
 * ```
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({
    className,
    placeholder = 'Search...',
    value,
    onChange,
    onClear,
    size = 'md',
    fullWidth = true,
    showClearButton = true,
    testId,
    ...props
  }, ref) => {
    const handleClear = () => {
      if (onClear) {
        onClear();
      } else if (onChange) {
        onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    const showClear = showClearButton && value && (
      (typeof value === 'string' && value.length > 0) ||
      (Array.isArray(value) && value.length > 0) ||
      (typeof value === 'number' && value !== 0)
    );

    return (
      <div className={cn(
        searchInputVariants({ size, fullWidth }),
        className
      )}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className={cn(
              'text-gray-400',
              size === 'xs' && 'w-3 h-3',
              size === 'sm' && 'w-4 h-4', 
              size === 'md' && 'w-5 h-5',
              size === 'lg' && 'w-5 h-5',
              size === 'xl' && 'w-6 h-6'
            )} />
          </div>
          <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={cn(
              'w-full pl-10 pr-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 hover:border-gray-400 transition-colors',
              size === 'xs' && 'py-1 text-xs',
              size === 'sm' && 'py-1.5 text-sm',
              size === 'md' && 'py-2 text-sm',
              size === 'lg' && 'py-2.5 text-base',
              size === 'xl' && 'py-3 text-lg',
              showClear && 'pr-10'
            )}
            data-testid={testId}
            {...props}
          />
          {showClear && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-primary-600 transition-colors"
            >
              <X className={cn(
                size === 'xs' && 'w-3 h-3',
                size === 'sm' && 'w-4 h-4',
                size === 'md' && 'w-4 h-4',
                size === 'lg' && 'w-5 h-5',
                size === 'xl' && 'w-5 h-5'
              )} />
            </button>
          )}
        </div>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput'; 