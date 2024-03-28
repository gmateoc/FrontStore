import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./App";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";


const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          refetchOnWindowFocus: false,
      },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools/>
      </QueryClientProvider>
  </React.StrictMode>
)
