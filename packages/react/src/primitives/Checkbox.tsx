'use client';

import React, { forwardRef } from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'onChange'> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  description?: string;
  errorMessage?: string;
  size?: 'sm' | 'md';
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked = false,
      onChange,
      label,
      description,
      errorMessage,
      size = 'md',
      disabled = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const boxSize = size === 'sm' ? 'w-4 h-4 rounded-[4px]' : 'w-5 h-5 rounded-[5px]';

    const handleToggle = () => {
      if (!disabled && onChange) {
        onChange(!checked);
      }
    };

    return (
      <div className={`flex flex-col gap-1 text-left ${className}`}>
        <div
          role="checkbox"
          aria-checked={checked}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              handleToggle();
            }
          }}
          onClick={handleToggle}
          className={`inline-flex items-start gap-2.5 cursor-pointer select-none group outline-none py-1 ${
            disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
          }`}
        >
          <div className="relative flex items-center shrink-0 mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              id={id}
              checked={checked}
              disabled={disabled}
              onChange={() => {}} // Controlled via wrapper to avoid double-trigger
              tabIndex={-1}
              className="sr-only"
              {...props}
            />
            <div
              className={`${boxSize} border transition-all flex items-center justify-center group-focus-visible:ring-2 group-focus-visible:ring-[#bfdbfe] group-focus-visible:ring-offset-2 ${
                checked
                  ? 'bg-[#2563eb] border-[#2563eb] text-white shadow-xs'
                  : 'bg-white border-[#cbd5e1] group-hover:border-[#94a3b8]'
              }`}
            >
              <svg
                className={`w-3.5 h-3.5 stroke-white stroke-[3] fill-none transition-all duration-150 ${
                  checked ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {(label || description) && (
            <div className="flex flex-col">
              {label && (
                <span className="text-xs sm:text-sm font-medium text-[#0f172a] group-hover:text-[#2563eb] transition-colors leading-tight">
                  {label}
                </span>
              )}
              {description && (
                <span className="text-[11px] sm:text-xs text-[#64748b] mt-0.5 leading-relaxed">
                  {description}
                </span>
              )}
            </div>
          )}
        </div>

        {errorMessage && <p className="text-xs text-[#dc2626] font-medium pl-7">{errorMessage}</p>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
