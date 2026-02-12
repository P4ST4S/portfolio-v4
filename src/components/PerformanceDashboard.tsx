import { useState, useEffect } from "react";

interface PerformanceMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  timestamp: number;
  url: string;
}

const PerformanceDashboard = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const loadMetrics = () => {
      const stored = localStorage.getItem("portfolio-performance");
      if (stored) {
        setMetrics(JSON.parse(stored));
      }
    };

    loadMetrics();

    // Refresh every 5 seconds
    const interval = setInterval(loadMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  const clearMetrics = () => {
    localStorage.removeItem("portfolio-performance");
    setMetrics([]);
  };

  const getLatestMetrics = () => {
    const latest: { [key: string]: PerformanceMetric } = {};
    metrics.forEach((metric) => {
      if (
        !latest[metric.name] ||
        metric.timestamp > latest[metric.name].timestamp
      ) {
        latest[metric.name] = metric;
      }
    });
    return Object.values(latest);
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "good":
        return "text-green-600 dark:text-green-400";
      case "needs-improvement":
        return "text-yellow-600 dark:text-yellow-400";
      case "poor":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-slate-500 dark:text-slate-400";
    }
  };

  const getRatingEmoji = (rating: string) => {
    switch (rating) {
      case "good":
        return "✅";
      case "needs-improvement":
        return "⚠️";
      case "poor":
        return "❌";
      default:
        return "⏱️";
    }
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          title="Show Performance Dashboard"
        >
          📊
        </button>
      </div>
    );
  }

  const latestMetrics = getLatestMetrics();

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-4 w-80 max-h-96 overflow-y-auto shadow-xl">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
          Performance Dashboard
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-lg"
        >
          ×
        </button>
      </div>

      {latestMetrics.length === 0 ? (
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          No metrics collected yet...
        </p>
      ) : (
        <>
          <div className="space-y-2 mb-3">
            {latestMetrics.map((metric) => (
              <div
                key={metric.name}
                className="flex justify-between items-center text-xs"
              >
                <span className="text-slate-700 dark:text-slate-300">
                  {getRatingEmoji(metric.rating)} {metric.name}
                </span>
                <span className={getRatingColor(metric.rating)}>
                  {Math.round(metric.value)}ms
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700 pt-2 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex justify-between">
              <span>Total metrics: {metrics.length}</span>
              <button
                onClick={clearMetrics}
                className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
              >
                Clear
              </button>
            </div>
          </div>
        </>
      )}

      <div className="mt-2 text-xs text-slate-500 dark:text-slate-500">
        <div>✅ Good | ⚠️ Needs improvement | ❌ Poor</div>
        <div className="mt-1">
          CLS: Layout Shift | FID: First Input | FCP: First Paint
          <br />
          LCP: Largest Paint | TTFB: Time to Byte
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
