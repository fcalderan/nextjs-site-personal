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

  console.log(field);
  return (
    <div className={style.card}>
      <figure>
        <img
          src={`https:${image.file.url}`}
          alt={image.description}
          loading="lazy"
        />

        <figcaption>
          <time dateTime={createdAt}>{createdAtLabel}</time>

          <Link href={postUrl}>{title}</Link>
        </figcaption>
      </figure>
    </div>
  );
}
