import style from "./inspiration.module.scss";
import Contentblock from "../contentblock/contentblock";
import Image from "next/image";
import Link from "next/link";

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export default function Inspiration(props) {
  const data = props.data;

  const dateOpts = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateString = new Intl.DateTimeFormat("en", dateOpts).format(
    new Date(data.createdAt)
  );

  return (
    <>
      <section aria-labelledby="content" className={style.inspiration}>
        <div className={style.section_cnt}>
          <div className={style.title}>
            <h1>{data.title}</h1>

            <div className={style.imagecnt}>
              <ConditionalWrapper
                condition={data.demoUrl !== ""}
                wrapper={(children) => (
                  <Link href={data.demoUrl}>{children}</Link>
                )}
              >
                <Image
                  src={`https:${data.imagePost.fields.file.url}`}
                  alt={data.imagePost.fields.description}
                  fill
                />
              </ConditionalWrapper>
            </div>
          </div>
        </div>
        <div className={style.section_cnt}>
          <p className={style.datepub}>
            Published on <em>{dateString}</em>
          </p>

          {data.content.content.map((p, i) => {
            return <Contentblock key={`${data.slug}-${i}`} data={p} />;
          })}
        </div>
      </section>
    </>
  );
}
