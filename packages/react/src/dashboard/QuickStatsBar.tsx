'use client';

import React from 'react';
import { MetricItem } from '../types';

export interface QuickStatsBarProps {
  stats: MetricItem[];
  className?: string;
}

export const QuickStatsBar: React.FC<QuickStatsBarProps> = ({ stats, className = '' }) => {
  return (
    <div
      className={`w-full grid grid-cols-2 md:grid-cols-4 rounded-[12px] border border-[#cbd5e1] bg-white shadow-xs overflow-hidden ${className}`}
    >
      {stats.map((stat, idx) => {
        const isPositive = stat.deltaType === 'positive' || (stat.delta && stat.delta.startsWith('+'));
        
        // Responsive borders for 2-column mobile and 4-column desktop
        const borderClasses = `
          ${idx % 2 === 0 ? 'border-r border-[#e2e8f0]' : ''}
          ${idx < 2 ? 'border-b md:border-b-0 border-[#e2e8f0]' : ''}
          ${idx === 1 ? 'md:border-r md:border-[#e2e8f0]' : ''}
          ${idx === 2 ? 'md:border-r md:border-[#e2e8f0]' : ''}
        `;

        return (
          <div
            key={idx}
            className={`p-3.5 sm:p-5 text-left flex flex-col justify-between ${borderClasses}`}
          >
            <span className="text-[11px] sm:text-xs font-semibold text-[#64748b] block mb-1 truncate">
              {stat.label}
            </span>
            <div className="flex flex-wrap items-baseline gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-2xl font-extrabold text-[#0f172a] tracking-tight">
                {stat.value}
              </span>
              {stat.delta && (
                <span
                  className={`text-[10px] sm:text-[11px] font-bold ${
                    isPositive ? 'text-[#16a34a]' : 'text-[#dc2626]'
                  }`}
                >
                  {isPositive ? '▲' : '▼'} {stat.delta}
                </span>
              )}
            </div>
            {stat.comparisonPeriod && (
              <span className="text-[9px] sm:text-[10px] text-[#94a3b8] mt-1 block truncate">
                {stat.comparisonPeriod}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
