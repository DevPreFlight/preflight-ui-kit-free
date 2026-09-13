'use client';

import React, { forwardRef } from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'square' | 'circle';
  'aria-label': string;
}

const variantStyles: Record<NonNullable<IconButtonProps['variant']>, string> = {
  primary: 'bg-[#2563eb] text-white hover:bg-[#1d4ed8] border-transparent shadow-sm',
  secondary: 'bg-white text-[#334155] hover:text-[#2563eb] hover:bg-[#f8fafc] border-[#cbd5e1] shadow-sm',
  outline: 'bg-transparent text-[#2563eb] hover:bg-[#eff6ff] border-[#2563eb]',
  ghost: 'bg-transparent text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] border-transparent',
};

const sizeStyles: Record<NonNullable<IconButtonProps['size']>, string> = {
  sm: 'w-7 h-7 p-1 text-xs',
  md: 'w-9 h-9 p-2 text-sm',
  lg: 'w-11 h-11 p-2.5 text-base',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      variant = 'secondary',
      size = 'md',
      shape = 'square',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center border transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${
          shape === 'circle' ? 'rounded-full' : 'rounded-[8px]'
        } ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
