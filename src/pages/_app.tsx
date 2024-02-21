import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";

import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "next/router";
import PageLoading from "../components/PageLoading";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <DefaultSeo
        title="Aeskins Pharmaceutical"
        canonical="https://www.aeskins.com/"
        twitter={{
          site: "https://www.aeskins.com/",
        }}
        description="A Aeskins Pharmaceutical nasceu com a missão de descomplicar o mercado de procedimentos estéticos, colocando nossos clientes em primeiro lugar."
        openGraph={{
          title: "Aeskins Pharmaceutical",
          type: "website",
          locale: "pt_BR",
          url: "https://www.aeskins.com/",
          images: [
            {
              url: "https://aeskins.com/assets/logogrande.png",
              alt: "Logo Aeskins",
            },
          ],
          description:
            "Aeskins Pharmaceutical | A Aeskins Pharmaceutical nasceu com a missão de descomplicar o mercado de procedimentos estéticos, colocando nossos clientes em primeiro lugar.",
        }}
      />
      <QueryClientProvider client={queryClient}>
        <PageLoading isLoading={loading}>
          <Component {...pageProps} />
        </PageLoading>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
