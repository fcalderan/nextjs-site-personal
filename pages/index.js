import Head from "next/head";
import Homepage from "../components/homepage/homepage";

const Metadata = {
  domain: "https//fabrizio.dev/",
  description:
    "Hello. I am Fabrizio Calderan, a professional frontend developer based in Treviso, Italy. Proficient in HTML, CSS, SVG, Responsive Design, Accessibility (a11y), JavaScript, React and NextJS",
};

export default function Index() {
  return (
    <>
      <Head>
        <title>Fabrizio Calderan, frontend developer in Treviso area</title>

        <meta name="description" content={Metadata.description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@fcalderan" />
        <meta name="twitter:url" content={Metadata.domain} />
        <meta
          name="twitter:title"
          content="Fabrizio Calderan, frontend developer"
        />
        <meta name="twitter:description" content={Metadata.description} />
        <meta
          name="twitter:image"
          content={`${Metadata.domain}img/twitter-card.png`}
        />
        <meta
          name="twitter:image:alt"
          content="Screenshot of my personal page."
        />
      </Head>

      <Homepage />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
