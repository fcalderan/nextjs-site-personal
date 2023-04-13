import { TwitterTweetEmbed } from "react-twitter-embed";
import Prism from "prismjs";
import "prismjs/plugins/autoloader/prism-autoloader";
import "prismjs/themes/prism.css";
//import 'prism-theme-vars/base.css'
import { useEffect, useRef } from "react";

export default function Contentblock(props) {
  const ref = useRef();
  const content = props.data.content[0];
  const isCodeBlock = content.marks[0]?.type === "code";

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, []);

  if (isCodeBlock) {
    const [, lang, code] = content.value.match(/^\^(\w+?)\^([\s\S]+)/);
    return (
      <div className="codeblock">
        <pre>
          <code ref={ref} className={`language-${lang}`}>
            {code}
          </code>
        </pre>
      </div>
    );
  } else {
    let markup = content.value;

    const tweet = markup.match(/^\[tweetembed=(\d+?)\]$/);
    console.log(markup, tweet);
    if (tweet && tweet[1]) {
      return (
        <div class="tweetembed">
          <TwitterTweetEmbed tweetId={tweet[1]} />
        </div>
      );
    }

    /* replace links */
    markup = markup.replace(/\[(.+?)\]\((.+?)\)/g, (m, text, link) => {
      return `<a href="${link}">${text}</a>`;
    });

    markup = markup.replace(/`(.+?)`/g, (m, inlinecode) => {
      return `<code>${inlinecode}</code>`;
    });

    return <p dangerouslySetInnerHTML={{ __html: markup }} />;
  }
}
