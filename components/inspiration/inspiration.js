import style from "./inspiration.module.scss";
import Contentblock from "../contentblock/contentblock";

export default function Inspiration(props) {
  const data = props.data;

  return (
    <>
      <section aria-labelledby="content" className={style.inspiration}>
        <div className="section_cnt">
          <div className={style.title}>
            <h1>{data.title}</h1>

            <img
              src={data.imagePost.fields.file.url}
              alt={data.imagePost.description}
            />
          </div>

          {data.content.content.map((p, i) => {
            return <Contentblock key={`${data.slug}-${i}`} data={p} />;
          })}
        </div>
      </section>

      <section></section>
    </>
  );
}
