export const reportWebVitals = (metric: { name: string; value: number }) => {
  // Log Core Web Vitals for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Performance] ${metric.name}:`, metric.value);
  }
  
  // You can send metrics to analytics service here
  // Example: analytics.track('Web Vital', { metric: metric.name, value: metric.value });
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