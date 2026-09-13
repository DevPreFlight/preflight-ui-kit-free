'use client';

import React, { forwardRef } from 'react';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isRequired?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      leftIcon,
      rightIcon,
      isRequired,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const hasError = !!errorMessage;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label htmlFor={inputId} className="text-xs font-semibold text-[#334155]">
            {label} {isRequired && <span className="text-[#dc2626]">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 flex items-center pointer-events-none text-[#64748b]">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`w-full bg-white text-[#0f172a] text-base sm:text-sm placeholder:text-[#94a3b8] rounded-[8px] border transition-all duration-150 outline-none ${
              leftIcon ? 'pl-9' : 'pl-3.5'
            } ${rightIcon ? 'pr-9' : 'pr-3.5'} py-2 sm:py-2.5 ${
              hasError
                ? 'border-[#dc2626] focus:border-[#dc2626] focus:ring-2 focus:ring-[#fecaca]'
                : 'border-[#cbd5e1] hover:border-[#94a3b8] focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]'
            } disabled:bg-[#f8fafc] disabled:text-[#94a3b8] ${className}`}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 flex items-center text-[#64748b]">
              {rightIcon}
            </div>
          )}
        </div>

        {hasError ? (
          <p className="text-xs text-[#dc2626] font-medium">{errorMessage}</p>
        ) : helperText ? (
          <p className="text-xs text-[#64748b]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
