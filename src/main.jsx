import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorFallBack from './ui/ErrorFallBack.jsx';

import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallBack}
      onReset={() => window.location.replace('/')}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
