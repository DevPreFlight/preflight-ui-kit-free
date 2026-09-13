'use client';

import React, { useState } from 'react';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }[position];

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-[#0f172a] border-x-transparent border-b-transparent border-t-[5px] border-x-[5px]',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-[#0f172a] border-x-transparent border-t-transparent border-b-[5px] border-x-[5px]',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-[#0f172a] border-y-transparent border-r-transparent border-l-[5px] border-y-[5px]',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-[#0f172a] border-y-transparent border-l-transparent border-r-[5px] border-y-[5px]',
  }[position];

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      onClick={() => setIsVisible(!isVisible)}
    >
      {children}

      {isVisible && (
        <div
          role="tooltip"
          className={`absolute z-50 pointer-events-none whitespace-nowrap bg-[#0f172a] text-white text-xs font-medium px-2.5 py-1.5 rounded-[6px] shadow-lg animate-in fade-in zoom-in-95 duration-100 ${positionClasses} ${className}`}
        >
          {content}
          <div className={`absolute w-0 h-0 border-solid ${arrowClasses}`} />
        </div>
      )}
    </div>
  );
};
