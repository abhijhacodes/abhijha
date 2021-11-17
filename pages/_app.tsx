import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO_CONFIG } from "../data/SEO";
import "../styles/global.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO_CONFIG} />
      <ChakraProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/images/logo.png" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
