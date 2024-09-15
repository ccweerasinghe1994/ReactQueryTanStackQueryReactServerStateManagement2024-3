import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const client = new QueryClient();
createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}>
        <StrictMode>
            <App/>
        </StrictMode>
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>,
)
