import { useEffect, useCallback } from 'react';
import { trackVisitor } from '../services/telegram/telegramService';

interface TrackingOptions {
  trackOnMount?: boolean;
  pageData?: {
    page?: string;
    referrer?: string;
  };
}

/**
 * Hook to track page visitors
 */
export function useVisitorTracking(options: TrackingOptions = {}) {
  const { trackOnMount = true, pageData = {} } = options;
  
  // Memoize the trackVisitor function with the current pageData
  const track = useCallback(() => {
    trackVisitor(pageData);
  }, [pageData]);
  
  useEffect(() => {
    if (trackOnMount) {
      track();
    }
  }, [trackOnMount, track]);
  
  return { trackVisitor: track };
}