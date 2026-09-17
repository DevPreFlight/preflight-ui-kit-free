'use client';

import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-[#2563eb] text-white hover:bg-[#1d4ed8] active:bg-[#1e40af] border-transparent shadow-sm hover:shadow-[0_4px_14px_0_rgba(37,99,235,0.2)]',
  secondary: 'bg-white text-[#0f172a] hover:bg-[#f8fafc] hover:text-[#2563eb] border-[#cbd5e1] hover:border-[#2563eb] shadow-sm',
  outline: 'bg-transparent text-[#2563eb] hover:bg-[#eff6ff] border-[#2563eb] hover:border-[#1d4ed8]',
  ghost: 'bg-transparent text-[#334155] hover:bg-[#f1f5f9] hover:text-[#0f172a] border-transparent',
  danger: 'bg-[#dc2626] text-white hover:bg-[#b91c1c] active:bg-[#991b1b] border-transparent shadow-sm',
  subtle: 'bg-[#eff6ff] text-[#2563eb] hover:bg-[#dbeafe] border-[#bfdbfe]',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'text-xs font-semibold px-3 py-1.5 rounded-[6px] gap-1.5',
  md: 'text-sm font-semibold px-4 py-2.5 rounded-[10px] gap-2',
  lg: 'text-base font-semibold px-6 py-3 rounded-[12px] gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      loading,
      isLoading,
      loadingText,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const isCurrentlyLoading = Boolean(loading || isLoading);

    return (
      <button
        ref={ref}
        disabled={disabled || isCurrentlyLoading}
        className={`inline-flex items-center justify-center border transition-all duration-150 active:scale-[0.98] select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${
          isCurrentlyLoading ? 'cursor-wait' : ''
        } ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
        {...props}
      >
        {isCurrentlyLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>{loadingText || children}</span>
          </span>
        ) : (
          <>
            {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
