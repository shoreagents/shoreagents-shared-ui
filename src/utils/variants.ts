import { cva, type VariantProps } from 'class-variance-authority';

// Button variants
export const buttonVariants = cva(
  'shore-button',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
      },
      size: {
        xs: 'h-8 px-3 text-xs',
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8 text-lg',
        xl: 'h-12 px-10 text-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// Input variants
export const inputVariants = cva(
  'shore-input',
  {
    variants: {
      variant: {
        default: 'border-input focus:border-primary-500',
        error: 'border-red-500 focus:border-red-500',
        success: 'border-green-500 focus:border-green-500',
      },
      size: {
        xs: 'h-8 px-2 text-xs',
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-3 py-2',
        lg: 'h-11 px-4 text-lg',
        xl: 'h-12 px-5 text-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

// Card variants
export const cardVariants = cva(
  'shore-card',
  {
    variants: {
      variant: {
        default: 'border bg-card text-card-foreground',
        outlined: 'border-2 bg-transparent',
        elevated: 'border-0 shadow-lg bg-card text-card-foreground',
      },
      padding: {
        '0': 'p-0',
        '1': 'p-1',
        '2': 'p-2',
        '3': 'p-3',
        '4': 'p-4',
        '5': 'p-5',
        '6': 'p-6',
        '8': 'p-8',
        '10': 'p-10',
        '12': 'p-12',
        '16': 'p-16',
        '20': 'p-20',
        '24': 'p-24',
        '32': 'p-32',
      },
      shadow: {
        none: 'shadow-none',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
        '2xl': 'shadow-2xl',
      },
      hover: {
        true: 'hover:shadow-md transition-shadow duration-200',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: '4',
      shadow: 'sm',
    },
  }
);

// Badge variants
export const badgeVariants = cva(
  'shore-badge',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100 text-primary-800 border-primary-200',
        secondary: 'bg-secondary-100 text-secondary-800 border-secondary-200',
        accent: 'bg-accent-100 text-accent-800 border-accent-200',
        success: 'bg-green-100 text-green-800 border-green-200',
        warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        error: 'bg-red-100 text-red-800 border-red-200',
        info: 'bg-blue-100 text-blue-800 border-blue-200',
        gray: 'bg-gray-100 text-gray-800 border-gray-200',
      },
      size: {
        xs: 'px-1.5 py-0.5 text-xs',
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-0.5 text-sm',
        lg: 'px-3 py-1 text-sm',
        xl: 'px-4 py-1 text-base',
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded',
      },
      dot: {
        true: 'w-2 h-2 p-0 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'gray',
      size: 'md',
      rounded: true,
    },
  }
);

// Avatar variants
export const avatarVariants = cva(
  'inline-flex items-center justify-center font-medium bg-gray-100 text-gray-900',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-16 w-16 text-xl',
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md',
      },
    },
    defaultVariants: {
      size: 'md',
      rounded: true,
    },
  }
);

// Alert variants
export const alertVariants = cva(
  'relative w-full rounded-lg border p-4',
  {
    variants: {
      variant: {
        success: 'border-green-200 bg-green-50 text-green-800',
        warning: 'border-yellow-200 bg-yellow-50 text-yellow-800',
        error: 'border-red-200 bg-red-50 text-red-800',
        info: 'border-blue-200 bg-blue-50 text-blue-800',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

// Loading variants
export const loadingVariants = cva(
  'animate-spin',
  {
    variants: {
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
        xl: 'h-8 w-8',
      },
      color: {
        primary: 'text-primary-500',
        secondary: 'text-secondary-500',
        accent: 'text-accent-500',
        success: 'text-green-500',
        warning: 'text-yellow-500',
        error: 'text-red-500',
        info: 'text-blue-500',
        gray: 'text-gray-500',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  }
);

// Progress variants
export const progressVariants = cva(
  'w-full bg-gray-200 rounded-full',
  {
    variants: {
      size: {
        xs: 'h-1',
        sm: 'h-2',
        md: 'h-3',
        lg: 'h-4',
        xl: 'h-6',
      },
      color: {
        primary: '[&>div]:bg-primary-500',
        secondary: '[&>div]:bg-secondary-500',
        accent: '[&>div]:bg-accent-500',
        success: '[&>div]:bg-green-500',
        warning: '[&>div]:bg-yellow-500',
        error: '[&>div]:bg-red-500',
        info: '[&>div]:bg-blue-500',
        gray: '[&>div]:bg-gray-500',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  }
);

// Typography variants
export const typographyVariants = cva(
  'font-sans',
  {
    variants: {
      variant: {
        h1: 'text-4xl font-bold lg:text-5xl',
        h2: 'text-3xl font-semibold lg:text-4xl',
        h3: 'text-2xl font-semibold lg:text-3xl',
        h4: 'text-xl font-semibold lg:text-2xl',
        h5: 'text-lg font-semibold lg:text-xl',
        h6: 'text-base font-semibold lg:text-lg',
        body1: 'text-base',
        body2: 'text-sm',
        caption: 'text-xs text-muted-foreground',
        overline: 'text-xs uppercase tracking-wider text-muted-foreground',
      },
      color: {
        primary: 'text-primary-500',
        secondary: 'text-secondary-500',
        accent: 'text-accent-500',
        success: 'text-green-500',
        warning: 'text-yellow-500',
        error: 'text-red-500',
        info: 'text-blue-500',
        gray: 'text-gray-500',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    defaultVariants: {
      variant: 'body1',
      align: 'left',
      weight: 'normal',
    },
  }
);

// Export variant prop types
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type InputVariants = VariantProps<typeof inputVariants>;
export type CardVariants = VariantProps<typeof cardVariants>;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
export type AvatarVariants = VariantProps<typeof avatarVariants>;
export type AlertVariants = VariantProps<typeof alertVariants>;
export type LoadingVariants = VariantProps<typeof loadingVariants>;
export type ProgressVariants = VariantProps<typeof progressVariants>;
export type TypographyVariants = VariantProps<typeof typographyVariants>; 