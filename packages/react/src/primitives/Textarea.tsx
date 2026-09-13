'use client';

import React, { forwardRef } from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isRequired?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      isRequired,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const hasError = !!errorMessage;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label htmlFor={textareaId} className="text-xs font-semibold text-[#334155]">
            {label} {isRequired && <span className="text-[#dc2626]">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={props.rows || 4}
          className={`w-full bg-white text-[#0f172a] text-sm placeholder:text-[#94a3b8] rounded-[8px] border p-3 transition-all duration-150 outline-none resize-y ${
            hasError
              ? 'border-[#dc2626] focus:border-[#dc2626] focus:ring-2 focus:ring-[#fecaca]'
              : 'border-[#cbd5e1] hover:border-[#94a3b8] focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]'
          } disabled:bg-[#f8fafc] disabled:text-[#94a3b8] ${className}`}
          {...props}
        />

        {hasError ? (
          <p className="text-xs text-[#dc2626] font-medium">{errorMessage}</p>
        ) : helperText ? (
          <p className="text-xs text-[#64748b]">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
