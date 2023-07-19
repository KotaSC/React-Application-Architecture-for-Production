import {
  ChakraProvider,
  GlobalStyle,
} from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { theme } from '@/config/theme';
import { queryClient } from '@/lib/react-query';

import { Notifications } from '@/components/notifications';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({
  children,
}: AppProviderProps) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Notifications />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ErrorBoundary
          fallback={<div>Something went wrong!</div>}
          onError={console.error}
        >
          {children}
        </ErrorBoundary>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
