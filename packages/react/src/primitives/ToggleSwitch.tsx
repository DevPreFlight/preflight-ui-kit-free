'use client';

import React from 'react';

export interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  id?: string;
  className?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  size = 'md',
  id,
  className = '',
}) => {
  const sizeClasses = {
    sm: {
      track: 'w-8 h-4',
      thumb: 'w-3 h-3',
      translate: 'translate-x-4',
    },
    md: {
      track: 'w-11 h-6',
      thumb: 'w-4 h-4',
      translate: 'translate-x-5',
    },
    lg: {
      track: 'w-14 h-7',
      thumb: 'w-5 h-5',
      translate: 'translate-x-7',
    },
  }[size];

  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div
      role="switch"
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
      className={`inline-flex items-start sm:items-center gap-3 select-none cursor-pointer group outline-none py-1 ${
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
      } ${className}`}
    >
      <div className="relative inline-flex items-center shrink-0 mt-0.5 sm:mt-0">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={() => {}} // Controlled via parent wrapper to eliminate double-trigger
          tabIndex={-1}
          className="sr-only"
        />
        <div
          className={`${sizeClasses.track} rounded-full transition-colors duration-200 ease-in-out border group-focus-visible:ring-2 group-focus-visible:ring-[#bfdbfe] group-focus-visible:ring-offset-2 ${
            checked
              ? 'bg-[#2563eb] border-[#2563eb]'
              : 'bg-[#cbd5e1] border-[#cbd5e1] group-hover:bg-[#94a3b8]'
          }`}
        />
        <div
          className={`absolute left-1 bg-white rounded-full transition-transform duration-200 ease-in-out shadow-sm ${
            sizeClasses.thumb
          } ${checked ? sizeClasses.translate : 'translate-x-0'}`}
        />
      </div>

      {(label || description) && (
        <div className="flex flex-col text-left">
          {label && (
            <span className="text-xs sm:text-sm font-semibold text-[#0f172a] leading-tight group-hover:text-[#2563eb] transition-colors">
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
  );
};
