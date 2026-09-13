'use client';

import React, { forwardRef } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
}

export const SelectDropdown = forwardRef<HTMLSelectElement, SelectDropdownProps>(
  (
    {
      label,
      options,
      helperText,
      errorMessage,
      isRequired,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const hasError = !!errorMessage;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label htmlFor={selectId} className="text-xs font-semibold text-[#334155]">
            {label} {isRequired && <span className="text-[#dc2626]">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            className={`w-full appearance-none bg-white text-[#0f172a] text-base sm:text-sm rounded-[8px] border pl-3.5 pr-10 py-2 sm:py-2.5 transition-all duration-150 outline-none cursor-pointer ${
              hasError
                ? 'border-[#dc2626] focus:border-[#dc2626] focus:ring-2 focus:ring-[#fecaca]'
                : 'border-[#cbd5e1] hover:border-[#94a3b8] focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]'
            } disabled:bg-[#f8fafc] disabled:text-[#94a3b8] ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>

          <div className="absolute right-3.5 pointer-events-none text-[#64748b]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
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

SelectDropdown.displayName = 'SelectDropdown';
