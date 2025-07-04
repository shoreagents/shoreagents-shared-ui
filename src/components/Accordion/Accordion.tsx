import React, { forwardRef, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { accordionVariants, accordionItemVariants } from '../../utils/variants';
import { AccordionProps, AccordionItemProps } from '../../types';

/**
 * Accordion component for collapsible content sections
 * 
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1" title="Section 1">
 *     Content for section 1
 *   </AccordionItem>
 *   <AccordionItem value="item-2" title="Section 2">
 *     Content for section 2
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({
    className,
    type = 'single',
    collapsible = false,
    defaultValue,
    value,
    onValueChange,
    children,
    testId,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = useState<string | string[]>(
      defaultValue || (type === 'single' ? '' : [])
    );

    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = (newValue: string | string[]) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(accordionVariants(), className)}
        data-testid={testId}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
              accordionType: type,
              currentValue,
              onValueChange: handleValueChange,
              collapsible,
            });
          }
          return child;
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';

/**
 * AccordionItem component for individual accordion sections
 */
export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps & {
  accordionType?: 'single' | 'multiple';
  currentValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
}>(
  ({
    className,
    value,
    title,
    disabled = false,
    children,
    accordionType = 'single',
    currentValue,
    onValueChange,
    collapsible = false,
    testId,
    ...props
  }, ref) => {
    const isOpen = accordionType === 'single' 
      ? currentValue === value 
      : Array.isArray(currentValue) && currentValue.includes(value);

    const handleToggle = () => {
      if (disabled) return;

      if (accordionType === 'single') {
        const newValue = isOpen && collapsible ? '' : value;
        if (onValueChange) {
          onValueChange(newValue);
        }
      } else {
        const currentArray = Array.isArray(currentValue) ? currentValue : [];
        const newValue = isOpen
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value];
        if (onValueChange) {
          onValueChange(newValue);
        }
      }
    };

    return (
      <div
        ref={ref}
        className={cn(accordionItemVariants({ disabled }), className)}
        data-testid={testId}
        {...props}
      >
        <button
          type="button"
          onClick={handleToggle}
          disabled={disabled}
          className={cn(
            'flex w-full items-center justify-between py-3 px-4 text-left text-sm font-medium transition-colors hover:bg-primary-50 focus:bg-primary-50 focus:outline-none',
            disabled && 'opacity-50 cursor-not-allowed hover:bg-transparent'
          )}
        >
          <span>{title}</span>
          {isOpen ? (
            <ChevronDown className="h-4 w-4 shrink-0 text-gray-500" />
          ) : (
            <ChevronRight className="h-4 w-4 shrink-0 text-gray-500" />
          )}
        </button>
        {isOpen && (
          <div className="px-4 pb-4 pt-2 text-sm text-gray-700">
            {children}
          </div>
        )}
      </div>
    );
  }
);

AccordionItem.displayName = 'AccordionItem'; 