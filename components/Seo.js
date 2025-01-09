import React from "react";
import Head from "next/head";

export default function Seo(props) {
  const { title, description, keywords } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
  );
}
