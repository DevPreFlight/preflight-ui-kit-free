/**
 * Type definitions for DevPreFlight UI Component Kit
 */

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'subtle';
export type ComponentSize = 'sm' | 'md' | 'lg';
export type StatusType = 'active' | 'pending' | 'failed' | 'trial' | 'pro' | 'enterprise' | 'neutral';
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingTier {
  id: string;
  title: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  originalPriceMonthly?: number;
  originalPriceYearly?: number;
  popular?: boolean;
  badge?: string;
  tierNumber: 1 | 2 | 3;
  features: PricingFeature[];
  metrics?: {
    setupTime: string;
    linesOfCode: string;
  };
  ctaText?: string;
  checkoutUrl?: string;
}

export interface ComparisonFeatureRow {
  category: string;
  feature: string;
  description?: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

export interface MetricItem {
  label: string;
  value: string | number;
  delta?: string;
  deltaType?: 'positive' | 'negative' | 'neutral';
  comparisonPeriod?: string;
  sparklineData?: number[];
  iconName?: string;
}

export interface ActivityEvent {
  id: string;
  user: {
    name: string;
    avatar?: string;
    email?: string;
  };
  action: string;
  target?: string;
  timestamp: string;
  status?: StatusType;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  verified?: boolean;
}
