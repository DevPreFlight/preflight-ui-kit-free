'use client';

import React, { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
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
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`inline-flex items-center justify-center border transition-all duration-150 active:scale-[0.98] select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
