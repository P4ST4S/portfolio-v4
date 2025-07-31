import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { reportWebVitals } from './utils/performance'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Report web vitals for performance monitoring
reportWebVitals({ name: 'initial', value: 0 })

// Defensive: Catch and suppress external script errors
window.addEventListener('error', (event) => {
  // Suppress errors from external scripts we don't control
  if (event.filename && (
    event.filename.includes('share-modal') ||
    event.filename.includes('chrome-extension') ||
    event.filename.includes('moz-extension')
  )) {
    event.preventDefault();
    return false;
  }
});
