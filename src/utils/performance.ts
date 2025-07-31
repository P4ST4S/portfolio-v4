interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

export const reportWebVitals = (metric: WebVitalMetric) => {
  // Log Core Web Vitals with color coding
  const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`${emoji} [${metric.name}] ${metric.value}ms (${metric.rating})`);
  }
  
  // Store metrics for performance dashboard
  const perfData = JSON.parse(localStorage.getItem('portfolio-performance') || '[]');
  perfData.push({
    ...metric,
    timestamp: Date.now(),
    url: window.location.href
  });
  
  // Keep only last 50 entries
  if (perfData.length > 50) perfData.shift();
  localStorage.setItem('portfolio-performance', JSON.stringify(perfData));
  
  // Send to analytics service (uncomment when needed)
  // analytics.track('Web Vital', { metric: metric.name, value: metric.value, rating: metric.rating });
};

export const prefetchRoute = (route: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = route;
  document.head.appendChild(link);
};

export const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

export const measurePerformance = (name: string, fn: () => void) => {
  performance.mark(`${name}-start`);
  fn();
  performance.mark(`${name}-end`);
  performance.measure(name, `${name}-start`, `${name}-end`);
  
  const measure = performance.getEntriesByName(name)[0];
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${name}: ${measure.duration}ms`);
  }
};

// Hook to measure component render time
export const usePerformanceTracking = (componentName: string) => {
  const startTime = performance.now();
  
  return {
    measureRender: () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      if (process.env.NODE_ENV === 'development' && duration > 16) { // Slower than 60fps
        console.warn(`⚠️ [${componentName}] Slow render: ${duration.toFixed(2)}ms`);
      }
      
      return duration;
    }
  };
};

// Track navigation performance
export const trackNavigation = (to: string) => {
  const navigationStart = performance.now();
  
  return {
    complete: () => {
      const duration = performance.now() - navigationStart;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`🧭 Navigation to ${to}: ${duration.toFixed(2)}ms`);
      }
      
      // Store navigation metrics
      const navData = JSON.parse(localStorage.getItem('portfolio-navigation') || '[]');
      navData.push({
        to,
        duration,
        timestamp: Date.now()
      });
      
      if (navData.length > 20) navData.shift();
      localStorage.setItem('portfolio-navigation', JSON.stringify(navData));
    }
  };
};