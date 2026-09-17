'use client';

import React, { forwardRef } from 'react';
import { Button, ButtonProps } from './Button';

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
}

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ children, loading = false, loadingText, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        loading={loading}
        loadingText={loadingText}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

LoadingButton.displayName = 'LoadingButton';
