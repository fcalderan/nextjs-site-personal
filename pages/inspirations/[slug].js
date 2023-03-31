import Head from "next/head";
import Metadata from "../../components/metadata/metadata";
import Defaultlayout from "../../components/layout/default";
import Inspiration from "../../components/inspiration/inspiration";
import getContentfulClient from "../../lib/db";

export default function InspirationSlug(props) {
  const data = props.inspiration.fields;

  const metadata = {
    url: `https://fabrizio.dev/inspirations/${data.slug}`,
    name: "fabrizio.dev",
    title: `${data.title} : inspirations : fabrizio.dev`,
    description: data.description,
    image: data.imagePost.fields.file.url,
  };

  return (
    <Defaultlayout>
      <Head>
        <Metadata metadata={metadata} />
      </Head>

      <Inspiration data={data} />
    </Defaultlayout>
  );
}

async function getInspirationsPosts() {
  const client = await getContentfulClient();
  const inspirations = await client.getEntries({
    content_type: "inspirations",
  });
  return inspirations.items;
}

export async function getStaticPaths(context) {
  const inspirations = await getInspirationsPosts();
  const paths = inspirations.map((i) => `/inspirations/${i.fields.slug}`);

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const inspirations = await getInspirationsPosts();

  const inspiration = inspirations.filter((i) => i.fields.slug === slug);
  if (inspiration.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      inspiration: inspiration[0],
    },
  };
}
