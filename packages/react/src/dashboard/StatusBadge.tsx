'use client';

import React from 'react';
import { StatusType } from '../types';

export interface StatusBadgeProps {
  status: StatusType | string;
  variant?: 'subtle' | 'solid' | 'dot';
  size?: 'sm' | 'md';
  label?: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  variant = 'subtle',
  size = 'md',
  label,
  className = '',
}) => {
  const displayLabel = label || status.charAt(0).toUpperCase() + status.slice(1);

  const statusConfigs: Record<
    string,
    { subtle: string; solid: string; dot: string; text: string }
  > = {
    active: {
      subtle: 'bg-[#f0fdf4] text-[#16a34a] border-[#bbf7d0]',
      solid: 'bg-[#16a34a] text-white border-transparent',
      dot: 'bg-[#16a34a]',
      text: 'text-[#16a34a]',
    },
    pending: {
      subtle: 'bg-[#fff7ed] text-[#ea580c] border-[#fed7aa]',
      solid: 'bg-[#ea580c] text-white border-transparent',
      dot: 'bg-[#ea580c]',
      text: 'text-[#ea580c]',
    },
    failed: {
      subtle: 'bg-[#fef2f2] text-[#dc2626] border-[#fecaca]',
      solid: 'bg-[#dc2626] text-white border-transparent',
      dot: 'bg-[#dc2626]',
      text: 'text-[#dc2626]',
    },
    trial: {
      subtle: 'bg-[#eff6ff] text-[#2563eb] border-[#bfdbfe]',
      solid: 'bg-[#2563eb] text-white border-transparent',
      dot: 'bg-[#2563eb]',
      text: 'text-[#2563eb]',
    },
    pro: {
      subtle: 'bg-[#eff6ff] text-[#1d4ed8] border-[#93c5fd] font-bold',
      solid: 'bg-[#1d4ed8] text-white border-transparent',
      dot: 'bg-[#1d4ed8]',
      text: 'text-[#1d4ed8]',
    },
    enterprise: {
      subtle: 'bg-[#0f172a] text-[#93c5fd] border-[#334155]',
      solid: 'bg-[#0f172a] text-white border-transparent',
      dot: 'bg-[#38bdf8]',
      text: 'text-[#0f172a]',
    },
    neutral: {
      subtle: 'bg-[#f1f5f9] text-[#475569] border-[#e2e8f0]',
      solid: 'bg-[#64748b] text-white border-transparent',
      dot: 'bg-[#94a3b8]',
      text: 'text-[#475569]',
    },
  };

  const key = status.toLowerCase();
  const config = statusConfigs[key] || statusConfigs.neutral;

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs font-semibold px-2.5 py-0.5 gap-1.5',
  }[size];

  if (variant === 'dot') {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs font-medium text-[#334155] ${className}`}>
        <span className={`w-2 h-2 rounded-full ${config.dot}`} />
        <span>{displayLabel}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border ${
        variant === 'solid' ? config.solid : config.subtle
      } ${sizeStyles} select-none ${className}`}
    >
      <span>{displayLabel}</span>
    </span>
  );
};
