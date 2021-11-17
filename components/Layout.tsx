import { ReactNode } from "react";
import Head from "next/head";
import { Header, Footer, ScrollToTop } from "./";
import { NextSeo } from "next-seo";
import { BASE_URL } from "../data/Links";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  relativeCanonicalURL: string;
}

export const Layout = ({
  children,
  title,
  description,
  relativeCanonicalURL,
}: LayoutProps) => {
  const canonicalURL = `${BASE_URL}/${relativeCanonicalURL}`;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalURL}
        openGraph={{
          url: canonicalURL,
          title: title,
          description: description,
        }}
      />
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" type="image/png" href="/images/logo.png" />
          <meta httpEquiv="content-language" content="en-gb" />
        </Head>
        <header>
          <Header />
        </header>
        {children}
        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
};
