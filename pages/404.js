import Link from "next/link";
import Head from "next/head";
import Defaultlayout from "../components/layout/default";

export default function FourOhFour(props) {
  return (
    <Defaultlayout>
      <Head>
        <title>Page not found : fabrizio.dev</title>
      </Head>
      <section className="err404">
        <h1>
          Ooops! <br />
          Page Not Found
        </h1>

        <Link href="/" className="go">
          Return to Homepage
        </Link>
      </section>
    </Defaultlayout>
  );
}
