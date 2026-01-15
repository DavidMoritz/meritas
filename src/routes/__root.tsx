import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import Navbar from '@/components/navbar/Navbar.tsx';
import ScrollToTop from '@/components/scroll-to-top/ScrollToTop.tsx';
import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';
import appCss from '../styles.css?url';

import '@/styles/globals.css';
import Footer from '@/components/_templates/footer/Footer.tsx';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Meritas Digital',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument() {
  return (
    <html
      className="h-svh max-h-svh min-h-svh overflow-hidden selection:bg-red-600 selection:text-white"
      lang="en"
    >
      <head>
        <HeadContent />
      </head>

      <body className="no-scrollbar m-0 h-full max-h-full min-h-full overflow-y-scroll bg-black font-sans text-white">
        <ScrollToTop />
        <Navbar />

        <Outlet />

        <Footer />

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
