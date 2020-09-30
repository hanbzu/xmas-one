import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const APP_NAME = "next-pwa example";
const APP_DESCRIPTION = "This is an example of using next-pwa plugin";

function XmasOne({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="xmas-one description" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-160.png" />
        <link
          href="/icon-160.png"
          rel="icon"
          type="image/png"
          sizes="160x160"
        />
        <link
          href="/icon-512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default XmasOne;
