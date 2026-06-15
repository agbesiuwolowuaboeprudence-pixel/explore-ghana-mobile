export const APP_VERSION = '1.0.0';
export const APP_BUILD = 1;

export const API_TIMEOUT = 10000;
export const PAGINATION_SIZE = 10;

export const CACHE_DURATION = 3600000; // 1 hour

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
} as const;

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
} as const;
