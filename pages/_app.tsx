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
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icon-160.png"
          rel="icon"
          type="image/png"
          sizes="160x160"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default XmasOne;
