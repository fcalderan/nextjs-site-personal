import Prism from "prismjs";
import "prismjs/plugins/autoloader/prism-autoloader";
import "prismjs/themes/prism-coy.min.css";

import { useEffect } from "react";

export default function Contentblock(props) {
  const content = props.data.content[0];
  const isCodeBlock = content.marks[0]?.type === "code";

  useEffect(() => {
    Prism.highlightAll();
  });

  if (isCodeBlock) {
    return (
      <pre>
        <code className="language-css">{content.value}</code>
      </pre>
    );
  }

  return <p>{content.value}</p>;
}
