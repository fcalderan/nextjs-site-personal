export default function Metadata(props) {
  const metadata = props.metadata;

  return (
    <>
      <meta key="title" name="title" content={metadata.title} />
      <meta
        key="description"
        name="description"
        content={metadata.description}
      />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:url" name="twitter:url" content={metadata.url} />
      <meta key="twitter:title" name="twitter:title" content={metadata.title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={metadata.description}
      />
      <meta
        key="twitter:image"
        name="twitter:image"
        content={metadata.imagetwitter}
      />

      <meta key="og:title" property="og:title" content={metadata.title} />
      <meta
        key="og:description"
        property="og:description"
        content={metadata.description}
      />
      <meta key="og:image" property="og:image" content={metadata.image} />
      <meta key="og:url" property="og:url" content={metadata.url} />
      <meta key="og:type" property="og:type" content="website" />
      <meta
        key="og:site_name"
        property="og:site_name"
        content={metadata.name}
      />

      <meta
        key="image_thumb_src"
        name="image_thumb_src"
        content={metadata.image}
      />
      <meta key="thumb" name="thumb" content={metadata.image} />

      <link href="https://front-end.social/@fcalderan" rel="me" />
    </>
  );
}
