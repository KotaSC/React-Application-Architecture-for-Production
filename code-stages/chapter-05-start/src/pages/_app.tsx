import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import React, { ReactElement, ReactNode } from 'react';

import { AppProvider } from '@/providers/app';
import { API_MOCKING } from '@/config/constants';
import { MSWWrapperProps } from '@/lib/msw';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MSWWrapper = dynamic<MSWWrapperProps>(() =>
  import('@/lib/msw').then(({ MSWWrapper }) => MSWWrapper)
);

const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => page);

  const pageContent = getLayout(
    <Component {...pageProps} />
  );

  return (
    <AppProvider>
      {API_MOCKING ? (
        <MSWWrapper>{pageContent}</MSWWrapper>
      ) : (
        pageContent
      )}
    </AppProvider>
  );
};

export default App;
