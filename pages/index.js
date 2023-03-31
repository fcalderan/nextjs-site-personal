import Head from "next/head";
import Indexlayout from "../components/layout/index";
import Homepage from "../components/homepage/homepage";
import Metadata from "../components/metadata/metadata";
import getContentfulClient from "../lib/db";

const metadata = {
  url: "https//fabrizio.dev/",
  name: "fabrizio.dev",
  title: "Fabrizio Calderan, frontend developer in Treviso area, Italy",
  description:
    "Hello. I am Fabrizio Calderan, a professional frontend developer based in Treviso, Italy. Proficient in HTML, CSS, SVG, Responsive Design, Accessibility (a11y), JavaScript, React and NextJS",
  image: "https://fabrizio.dev/share.jpg",
  imagetwitter: "https://fabrizio.dev/share-twitter.jpg",
};

export default function Index(props) {
  return (
    <Indexlayout>
      <Head>
        <title>{metadata.title}</title>
        <Metadata metadata={metadata} />
      </Head>

      <Homepage inspirations={props.inspirations} />
    </Indexlayout>
  );
}

export async function getStaticProps(context) {
  const client = await getContentfulClient();
  const inspirations = await client.getEntries({
    content_type: "inspirations",
  });

  return {
    props: {
      inspirations: inspirations.items,
    },
  };
}
