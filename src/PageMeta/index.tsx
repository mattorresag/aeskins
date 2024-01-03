/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useEffect, useState } from "react";

interface Props {
  subtitle?: string;
}

const PageMeta = ({ subtitle = "Aeskins" }: Props) => {
  const [title, setTitle] = useState<string>("Aeskins");

  useEffect(() => {
    setTitle(subtitle);
  }, [subtitle]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={`Landing Page ${subtitle}`} />
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
  );
};

export default PageMeta;
