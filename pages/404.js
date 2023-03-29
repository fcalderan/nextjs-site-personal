import { useEffect, useState } from "react";
import Link from "next/link";
import Defaultlayout from "../components/layout/default";

export default function FourOhFour(props) {
  return (
    <Defaultlayout>
      <section className="err404">
        <h1>
          Ooops! <br />
          Page Not Found
        </h1>

        <Link href="/" className="go">
          Go to Homepage
        </Link>
      </section>
    </Defaultlayout>
  );
}
