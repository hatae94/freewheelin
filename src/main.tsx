import './styles/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryErrorResetBoundary, queryClient } from 'providers/reactQuery';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        <App />
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  </StrictMode>
);
