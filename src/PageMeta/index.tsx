/* eslint-disable @next/next/no-page-custom-font */
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useEffect, useState } from "react";

interface Props {
  subtitle?: string;
  seoDescription?: string;
  url?: string;
}

const PageMeta = ({ subtitle, url }: Props) => {
  const [title, setTitle] = useState<string>("Aeskins Pharmaceutical");

  useEffect(() => {
    setTitle(`Aeskins Pharmaceutical ${subtitle ? `| ${subtitle}` : ""}`);
  }, [subtitle]);

  return (
    <>
      <NextSeo
        title={`Aeskins Pharmaceutical ${subtitle ? `| ${subtitle}` : ""}`}
        canonical={`https://www.aeskins.com/${url ? url : ""}`}
        twitter={{
          site: `https://www.aeskins.com/${url ? url : ""}`,
        }}
        description="A Aeskins Pharmaceutical nasceu com a missão de descomplicar o mercado de procedimentos estéticos, colocando nossos clientes em primeiro lugar."
        openGraph={{
          title: "Aeskins Pharmaceutical",
          type: "website",
          locale: "pt_BR",
          url: `https://www.aeskins.com/${url ? url : ""}`,
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
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`Aeskins Pharmaceutical ${subtitle}`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
};

export default PageMeta;
