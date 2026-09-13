'use client';

import React from 'react';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
  badge?: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  variant?: 'simple' | 'cards';
  label?: string;
  errorMessage?: string;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  variant = 'simple',
  label,
  errorMessage,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-2 text-left w-full ${className}`}>
      {label && <span className="text-xs font-semibold text-[#334155]">{label}</span>}

      <div
        role="radiogroup"
        aria-label={label || name}
        className={variant === 'cards' ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'flex flex-col gap-2.5'}
      >
        {options.map((option) => {
          const isSelected = value === option.value;
          const isDisabled = !!option.disabled;

          const handleSelect = () => {
            if (!isDisabled) {
              onChange(option.value);
            }
          };

          if (variant === 'cards') {
            return (
              <div
                key={option.value}
                role="radio"
                aria-checked={isSelected}
                aria-disabled={isDisabled}
                tabIndex={isDisabled ? -1 : 0}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handleSelect();
                  }
                }}
                onClick={handleSelect}
                className={`relative flex flex-col p-3.5 sm:p-4 rounded-[10px] border transition-all cursor-pointer select-none group outline-none ${
                  isSelected
                    ? 'border-[#2563eb] bg-[#eff6ff] ring-1 ring-[#2563eb] shadow-xs'
                    : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1] hover:bg-[#f8fafc]'
                } ${isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
              >
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={() => {}}
                  tabIndex={-1}
                  className="sr-only"
                />
                <div className="flex items-center justify-between mb-1 gap-2">
                  <span className={`font-semibold text-xs sm:text-sm ${isSelected ? 'text-[#1d4ed8]' : 'text-[#0f172a]'}`}>
                    {option.label}
                  </span>
                  {option.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#dbeafe] text-[#1d4ed8] shrink-0">
                      {option.badge}
                    </span>
                  )}
                </div>
                {option.description && (
                  <p className="text-[11px] sm:text-xs text-[#64748b] leading-relaxed">{option.description}</p>
                )}
              </div>
            );
          }

          return (
            <div
              key={option.value}
              role="radio"
              aria-checked={isSelected}
              aria-disabled={isDisabled}
              tabIndex={isDisabled ? -1 : 0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  handleSelect();
                }
              }}
              onClick={handleSelect}
              className={`inline-flex items-start gap-2.5 cursor-pointer select-none group outline-none py-1 ${
                isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
              }`}
            >
              <div className="relative flex items-center shrink-0 mt-0.5">
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={() => {}}
                  tabIndex={-1}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all group-focus-visible:ring-2 group-focus-visible:ring-[#bfdbfe] group-focus-visible:ring-offset-2 ${
                    isSelected
                      ? 'border-[#2563eb] bg-white shadow-xs'
                      : 'border-[#cbd5e1] bg-white group-hover:border-[#94a3b8]'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full bg-[#2563eb] transition-all duration-150 ${
                      isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className={`text-xs sm:text-sm font-medium transition-colors ${isSelected ? 'text-[#2563eb] font-semibold' : 'text-[#0f172a]'}`}>
                  {option.label}
                </span>
                {option.description && (
                  <span className="text-[11px] sm:text-xs text-[#64748b] mt-0.5 leading-relaxed">{option.description}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {errorMessage && <p className="text-xs text-[#dc2626] font-medium">{errorMessage}</p>}
    </div>
  );
};
