import style from "./inspiration.module.scss";
import Contentblock from "../contentblock/contentblock";
import Link from "next/link";

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default function Inspiration(props) {
  const data = props.data;

  //console.log(data);

  return (
    <>
      <section aria-labelledby="content" className={style.inspiration}>
        <div className={style.section_cnt}>
          <div className={style.title}>
            {" "}
            <h1>{data.title}</h1>
            <ConditionalWrapper
              condition={data.demoUrl !== ""}
              wrapper={(children) => (
                <Link href={data.demoUrl}>{children}</Link>
              )}
            >
              <img
                src={`https:${data.imagePost.fields.file.url}`}
                alt={data.imagePost.fields.description}
              />
            </ConditionalWrapper>
          </div>
        </div>
        <div className={style.section_cnt}>
          {data.content.content.map((p, i) => {
            return <Contentblock key={`${data.slug}-${i}`} data={p} />;
          })}
        </div>
      </section>
    </>
  );
}
