import type { AppProps } from 'next/app';
import React from 'react';

import { AppProvider } from '@/providers/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
