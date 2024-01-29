import Head from "next/head";

export default function Metadata(props) {
  const metadata = props.metadata;

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta key="title" name="title" content={metadata.title} />
      <meta
        key="description"
        name="description"
        content={metadata.description}
      />

      <meta
        key="twitterCard"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitterUrl" name="twitter:url" content={metadata.url} />
      <meta key="twitterTitle" name="twitter:title" content={metadata.title} />
      <meta
        key="twitterDescription"
        name="twitter:description"
        content={metadata.description}
      />
      <meta
        key="twitterImage"
        name="twitter:image"
        content={metadata.imagetwitter}
      />

      <meta key="ogTitle" property="og:title" content={metadata.title} />
      <meta
        key="ogDescription"
        property="og:description"
        content={metadata.description}
      />
      <meta key="ogImage" property="og:image" content={metadata.image} />
      <meta key="ogUrl" property="og:url" content={metadata.url} />
      <meta key="ogType" property="og:type" content="website" />
      <meta key="ogSitename" property="og:site_name" content={metadata.name} />

      <meta
        key="imageThumbSrc"
        name="image_thumb_src"
        content={metadata.image}
      />
      <meta key="thumb" name="thumb" content={metadata.image} />

      <link href="https://front-end.social/@fcalderan" rel="me" />
    </Head>
  );
}
