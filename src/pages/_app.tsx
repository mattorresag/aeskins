import React from "react";
import { AppProps } from "next/app";

import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
