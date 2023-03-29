import Head from "next/head";
import Defaultlayout from "../../components/layout/default";

const metadata = {
  url: "https//fabrizio.dev/",
  name: "Fabrizio.dev",
  title: "Fabrizio Calderan, frontend developer in Treviso area, Italy",
  description:
    "Hello. I am Fabrizio Calderan, a professional frontend developer based in Treviso, Italy. Proficient in HTML, CSS, SVG, Responsive Design, Accessibility (a11y), JavaScript, React and NextJS",
  image: "https//fabrizio.dev/share.jpg",
};

export default function Index() {
  return (
    <Defaultlayout>
      <Head>
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
      </Head>

      <div>hello</div>
    </Defaultlayout>
  );
}

export async function getStaticPaths(context) {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
