import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster
        position='bottom-center'
        toastOptions={{
          style: {
            background: '#3b3b3b',
            color: '#fff',
          },
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>
);
