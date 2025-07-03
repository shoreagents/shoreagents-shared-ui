import React, { useState, createContext, useContext } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const tabsVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        default: '',
        pills: '',
        underline: '',
      },
      orientation: {
        horizontal: 'flex flex-col',
        vertical: 'flex flex-row',
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'horizontal',
    },
  }
);

const tabListVariants = cva(
  'flex',
  {
    variants: {
      variant: {
        default: 'border-b border-gray-200',
        pills: 'p-1 bg-gray-100 rounded-lg',
        underline: 'border-b-2 border-transparent',
      },
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col min-w-48 border-r border-gray-200 border-b-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'horizontal',
    },
  }
);

const tabTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap px-3 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-b-2 border-transparent hover:text-gray-700 data-[state=active]:border-primary-500 data-[state=active]:text-primary-600',
        pills: 'rounded-md hover:bg-white hover:text-gray-700 data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm',
        underline: 'border-b-2 border-transparent hover:border-gray-300 data-[state=active]:border-primary-500 data-[state=active]:text-primary-600',
      },
      orientation: {
        horizontal: '',
        vertical: 'justify-start w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'horizontal',
    },
  }
);

const tabContentVariants = cva(
  'mt-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  {
    variants: {
      orientation: {
        horizontal: '',
        vertical: 'ml-4 mt-0 flex-1',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
);

// Context for managing tab state
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant: 'default' | 'pills' | 'underline';
  orientation: 'horizontal' | 'vertical';
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs component');
  }
  return context;
};

// Main Tabs component
export interface TabsProps extends VariantProps<typeof tabsVariants> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({
    defaultValue,
    value,
    onValueChange,
    variant,
    orientation,
    className,
    children,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = useState<string>(defaultValue || '');
    const activeTab = value !== undefined ? value : internalValue;

    const handleValueChange = (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <TabsContext.Provider
        value={{
          activeTab,
          setActiveTab: handleValueChange,
          variant: variant || 'default',
          orientation: orientation || 'horizontal',
        }}
      >
        <div
          {...props}
          ref={ref}
          className={cn(tabsVariants({ variant, orientation }), className)}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

// TabsList component
export interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...props }, ref) => {
    const { variant, orientation } = useTabsContext();

    return (
      <div
        {...props}
        ref={ref}
        role="tablist"
        aria-orientation={orientation}
        className={cn(tabListVariants({ variant, orientation }), className)}
      >
        {children}
      </div>
    );
  }
);

TabsList.displayName = 'TabsList';

// TabsTrigger component
export interface TabsTriggerProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled = false, className, children, ...props }, ref) => {
    const { activeTab, setActiveTab, variant, orientation } = useTabsContext();
    const isActive = activeTab === value;

    return (
      <button
        {...props}
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-controls={`panel-${value}`}
        data-state={isActive ? 'active' : 'inactive'}
        disabled={disabled}
        className={cn(
          tabTriggerVariants({ variant, orientation }),
          isActive && 'text-primary-600',
          className
        )}
        onClick={() => !disabled && setActiveTab(value)}
      >
        {children}
      </button>
    );
  }
);

TabsTrigger.displayName = 'TabsTrigger';

// TabsContent component
export interface TabsContentProps {
  value: string;
  forceMount?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, forceMount = false, className, children, ...props }, ref) => {
    const { activeTab, orientation } = useTabsContext();
    const isActive = activeTab === value;

    if (!isActive && !forceMount) {
      return null;
    }

    return (
      <div
        {...props}
        ref={ref}
        role="tabpanel"
        id={`panel-${value}`}
        aria-labelledby={`trigger-${value}`}
        data-state={isActive ? 'active' : 'inactive'}
        className={cn(
          tabContentVariants({ orientation }),
          !isActive && 'hidden',
          className
        )}
        tabIndex={0}
      >
        {children}
      </div>
    );
  }
);

TabsContent.displayName = 'TabsContent'; 