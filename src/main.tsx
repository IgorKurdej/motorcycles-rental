import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import '@smastrom/react-rating/style.css';
import { CartProvider } from 'react-use-cart';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
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
    </CartProvider>
  </React.StrictMode>
);
