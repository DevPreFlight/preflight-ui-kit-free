'use client';

import React from 'react';

export interface AvatarProps {
  src?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'busy' | 'away';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  status,
  className = '',
}) => {
  const sizeClasses = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  }[size];

  const statusSizeClasses = {
    xs: 'w-1.5 h-1.5 ring-1',
    sm: 'w-2 h-2 ring-1.5',
    md: 'w-2.5 h-2.5 ring-2',
    lg: 'w-3 h-3 ring-2',
    xl: 'w-4 h-4 ring-2',
  }[size];

  const statusColors = {
    online: 'bg-[#16a34a]',
    offline: 'bg-[#94a3b8]',
    busy: 'bg-[#dc2626]',
    away: 'bg-[#ea580c]',
  };

  const getInitials = (n?: string) => {
    if (!n) return 'U';
    const parts = n.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return n.slice(0, 2).toUpperCase();
  };

  return (
    <div className={`relative inline-flex shrink-0 ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name || 'Avatar'}
          className={`${sizeClasses} rounded-full object-cover border border-[#e2e8f0] bg-[#f8fafc]`}
        />
      ) : (
        <div
          className={`${sizeClasses} rounded-full bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] font-bold flex items-center justify-center select-none`}
        >
          {getInitials(name)}
        </div>
      )}

      {status && (
        <span
          className={`absolute bottom-0 right-0 rounded-full ring-white ${
            statusSizeClasses
          } ${statusColors[status]}`}
        />
      )}
    </div>
  );
};

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  totalCount?: number;
  size?: AvatarProps['size'];
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 4,
  totalCount,
  size = 'md',
}) => {
  const childrenArray = React.Children.toArray(children);
  const visibleAvatars = childrenArray.slice(0, max);
  const remainingCount = totalCount ? totalCount - max : childrenArray.length - max;

  const sizeClasses = {
    xs: 'w-6 h-6 text-[10px] -ml-1.5',
    sm: 'w-8 h-8 text-xs -ml-2',
    md: 'w-10 h-10 text-sm -ml-2.5',
    lg: 'w-12 h-12 text-base -ml-3',
    xl: 'w-16 h-16 text-lg -ml-4',
  }[size];

  return (
    <div className="flex items-center">
      {visibleAvatars.map((child, index) => (
        <div
          key={index}
          className={`${index > 0 ? sizeClasses.split(' ').pop() : ''} ring-2 ring-white rounded-full transition-transform hover:scale-105 hover:z-10`}
        >
          {child}
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className={`${sizeClasses} rounded-full bg-[#f1f5f9] text-[#475569] border border-[#cbd5e1] ring-2 ring-white font-semibold flex items-center justify-center select-none shrink-0`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
