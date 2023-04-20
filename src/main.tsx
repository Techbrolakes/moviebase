import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import theme from './config/theme';
import router from './config/routes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>,
);
