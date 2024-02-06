import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClient and QueryClientProvider
import './index.css';
import Routing from './Routing';

// Create a QueryClient instance
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Wrap with QueryClientProvider */}
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
