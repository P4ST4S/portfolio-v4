import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { reportWebVitals } from "./utils/performance";
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Track all Core Web Vitals
onCLS(reportWebVitals);
onINP(reportWebVitals);
onFCP(reportWebVitals);
onLCP(reportWebVitals);
onTTFB(reportWebVitals);
