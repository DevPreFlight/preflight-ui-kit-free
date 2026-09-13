'use client';

import React from 'react';

export interface ChipProps {
  label: string;
  onRemove?: () => void;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'accent';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  onRemove,
  variant = 'default',
  size = 'md',
  icon,
  className = '',
}) => {
  const variantClasses = {
    default: 'bg-[#f1f5f9] text-[#334155] border-[#e2e8f0]',
    primary: 'bg-[#eff6ff] text-[#2563eb] border-[#bfdbfe]',
    success: 'bg-[#f0fdf4] text-[#16a34a] border-[#bbf7d0]',
    warning: 'bg-[#fff7ed] text-[#ea580c] border-[#fed7aa]',
    accent: 'bg-[#f0f9ff] text-[#0284c7] border-[#bae6fd]',
  }[variant];

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs font-semibold px-3 py-1 gap-1.5',
  }[size];

  return (
    <span
      className={`inline-flex items-center rounded-full border ${variantClasses} ${sizeClasses} select-none ${className}`}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{label}</span>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="hover:opacity-75 focus:outline-none -mr-1 p-0.5 rounded-full hover:bg-black/5"
          aria-label={`Remove ${label}`}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
};
