import React, { forwardRef, useState } from 'react';
import { User } from 'lucide-react';
import { cn } from '../../utils/cn';
import { avatarVariants } from '../../utils/variants';
import { AvatarProps } from '../../types';

/**
 * Avatar component for displaying user profile images or initials
 * 
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="John Doe" />
 * <Avatar fallback="JD" />
 * <Avatar size="lg" />
 * ```
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({
    className,
    src,
    alt,
    size = 'md',
    fallback,
    rounded = true,
    children,
    testId,
    ...props
  }, ref) => {
    const [imageError, setImageError] = useState(false);
    
    const avatarClasses = cn(
      avatarVariants({ size, rounded }),
      className
    );

    const getInitials = (name: string) => {
      return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
    };

    const handleImageError = () => {
      setImageError(true);
    };

    return (
      <div
        ref={ref}
        className={avatarClasses}
        data-testid={testId}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || 'Avatar'}
            className="h-full w-full object-cover"
            onError={handleImageError}
          />
        ) : fallback ? (
          <span className="font-medium">
            {fallback.length > 2 ? getInitials(fallback) : fallback}
          </span>
        ) : alt ? (
          <span className="font-medium">
            {getInitials(alt)}
          </span>
        ) : children ? (
          children
        ) : (
          <User className="h-1/2 w-1/2" />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar'; 