import Link from "next/link";
import Image from "next/image";
import style from "./card.module.scss";

export default function Card(props) {
  const field = props.inspiration.fields;
  const createdAt = field.createdAt;
  const createdAtLabel = createdAt.split("T")[0];
  const image = field.imageCard.fields;
  const postUrl = `/inspirations/${field.slug}`;
  const title = field.title;
  const description = field.description;

  console.log(field);
  return (
    <div className={style.card}>
      <article>
        <img
          src={`https:${image.file.url}`}
          alt={image.description}
          loading="lazy"
        />

        <header>
          <h3>
            <Link href={postUrl}>{title}</Link>
          </h3>
        </header>

        <p>
          {description}
          <br />
          <span className="sr-only">Post created at</span>
          <time dateTime={createdAt}>{createdAtLabel}</time>
        </p>
      </article>
    </div>
  );
}
