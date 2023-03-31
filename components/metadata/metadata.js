export default function Metadata(props) {
  const metadata = props.metadata;

  return (
    <>
      <title>{metadata.title}</title>
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={metadata.url} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />

      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={metadata.name} />

      <meta name="image_thumb_src" content={metadata.image} />
      <meta name="thumb" content={metadata.image} />
    </>
  );
}
