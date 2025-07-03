import { ReactNode, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

// Base component props
export interface BaseProps {
  children?: ReactNode;
  className?: string;
  testId?: string;
}

// Size variants
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Color variants
export type ColorVariant = 
  | 'primary' 
  | 'secondary' 
  | 'accent' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info' 
  | 'gray';

// Button variants
export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'link' 
  | 'destructive';

// Input variants
export type InputVariant = 'default' | 'error' | 'success';

// Component states
export type ComponentState = 'default' | 'hover' | 'focus' | 'active' | 'disabled';

// Animation variants
export type AnimationVariant = 'none' | 'fade' | 'slide' | 'scale' | 'bounce';

// Spacing
export type Spacing = 
  | '0' 
  | '1' 
  | '2' 
  | '3' 
  | '4' 
  | '5' 
  | '6' 
  | '8' 
  | '10' 
  | '12' 
  | '16' 
  | '20' 
  | '24' 
  | '32';

// Border radius
export type BorderRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

// Shadow variants
export type ShadowVariant = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Typography
export interface TypographyProps extends BaseProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
  color?: ColorVariant;
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  as?: keyof JSX.IntrinsicElements;
}

// Button props
export interface ButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: ButtonVariant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

// Input props
export interface InputProps extends BaseProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'> {
  variant?: InputVariant;
  size?: Size;
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

// Card props
export interface CardProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: Spacing;
  shadow?: ShadowVariant;
  hover?: boolean;
}

// Badge props
export interface BadgeProps extends BaseProps {
  variant?: ColorVariant;
  size?: Size;
  rounded?: boolean;
  dot?: boolean;
}

// Avatar props
export interface AvatarProps extends BaseProps {
  src?: string;
  alt?: string;
  size?: Size;
  fallback?: string;
  rounded?: boolean;
}

// Modal props
export interface ModalProps extends BaseProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// Alert props
export interface AlertProps extends BaseProps {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: ReactNode;
}

// Loading props
export interface LoadingProps extends BaseProps {
  size?: Size;
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  color?: ColorVariant;
}

// Progress props
export interface ProgressProps extends BaseProps {
  value: number;
  max?: number;
  size?: Size;
  variant?: 'linear' | 'circular';
  color?: ColorVariant;
  showLabel?: boolean;
}

// Tooltip props
export interface TooltipProps extends BaseProps {
  content: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: 'hover' | 'click' | 'focus';
  delay?: number;
}

// Menu props
export interface MenuProps extends BaseProps {
  trigger: ReactNode;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  closeOnSelect?: boolean;
}

export interface MenuItemProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  destructive?: boolean;
  icon?: ReactNode;
}

// Tab props
export interface TabsProps extends BaseProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: 'line' | 'solid' | 'enclosed';
}

export interface TabProps extends BaseProps {
  value: string;
  disabled?: boolean;
}

// Form props
export interface FormFieldProps extends BaseProps {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

// Carousel props
export interface CarouselImage {
  src: string;
  alt?: string;
  caption?: string;
  thumbnail?: string;
}

export interface CarouselProps extends BaseProps {
  images: CarouselImage[];
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
  variant?: 'default' | 'contained' | 'full-width';
  aspectRatio?: '1:1' | '4:3' | '3:2' | '16:9' | '21:9';
  showArrows?: boolean;
  showThumbnails?: boolean;
  showDots?: boolean;
  showPlayButton?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  thumbnailPosition?: 'top' | 'bottom';
}

// Select props
export interface SelectProps extends BaseProps {
  options: SelectOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  placeholder?: string;
  multiple?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  size?: Size;
  error?: string;
  helperText?: string;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

// Checkbox props
export interface CheckboxProps extends BaseProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  size?: Size;
  error?: boolean;
}

// Radio props
export interface RadioProps extends BaseProps {
  value: string;
  checked?: boolean;
  onValueChange?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  size?: Size;
  error?: boolean;
}

export interface RadioGroupProps extends BaseProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
}

// Switch props
export interface SwitchProps extends BaseProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: Size;
}

// Table props
export interface TableProps extends BaseProps {
  data: any[];
  columns: TableColumn[];
  loading?: boolean;
  sortable?: boolean;
  selectable?: boolean;
  pagination?: boolean;
  pageSize?: number;
}

export interface TableColumn {
  key: string;
  title: string;
  sortable?: boolean;
  width?: number | string;
  render?: (value: any, record: any, index: number) => ReactNode;
}

// Breadcrumb props
export interface BreadcrumbProps extends BaseProps {
  items: BreadcrumbItem[];
  separator?: ReactNode;
  maxItems?: number;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

// Accordion props
export interface AccordionProps extends BaseProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

export interface AccordionItemProps extends BaseProps {
  value: string;
  title: string;
  disabled?: boolean;
}

// Theme
export interface Theme {
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    accent: Record<string, string>;
    gray: Record<string, string>;
    success: Record<string, string>;
    warning: Record<string, string>;
    error: Record<string, string>;
    info: Record<string, string>;
  };
  spacing: Record<Spacing, string>;
  borderRadius: Record<BorderRadius, string>;
  shadows: Record<ShadowVariant, string>;
  typography: {
    fontFamily: string;
    fontSize: Record<string, string>;
    fontWeight: Record<string, string>;
    lineHeight: Record<string, string>;
  };
}

// Utility types
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Event types
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void;
export type ChangeHandler<T = string> = (value: T) => void;
export type KeyboardHandler = (event: React.KeyboardEvent<HTMLElement>) => void; 