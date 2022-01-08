import { injectGlobal } from "@emotion/css";
import type { AppProps } from "next/app";
import Head from "next/head";

const TITLE = "A.L.I.E.Z";

const DESCRIPTION = "a naive developer.";

const BASE_URL = "https://aliez.io/";

injectGlobal`
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;700&display=swap");

html,
body {
  padding: 0;
  margin: 0;
  font-family: Readex Pro, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  background: linear-gradient(90deg, #f6f6f7 28px, transparent 1%) 50%,
    linear-gradient(#f6f6f7 28px, transparent 1%) 50%, #cbcbcd;
  background-size: 30px 30px;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
        />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={BASE_URL} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`${BASE_URL}image.png`}
        />
        <meta name="twitter:creator" content="@aliez_eth" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:site_name" content={TITLE} />
        <meta property="og:url" content={BASE_URL} />
        <meta
          key="og:image"
          property="og:image"
          content={`${BASE_URL}image.png`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
