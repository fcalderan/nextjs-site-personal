import style from "./social.module.scss";

export default function Social() {
  return (
    <div className={style["social-icons"]}>
      <a
        href="https://twitter.com/fcalderan"
        target="_blank"
        aria-label="My Twitter profile (open in a new window)"
      >
        <svg aria-hidden="true" focusable="false" width="30" height="30">
          <use xlinkHref="#svg-twitter"></use>
        </svg>
      </a>
      <a
        href="https://front-end.social/@fcalderan"
        target="_blank"
        aria-label="My Mastodon profile (open in a new window)"
      >
        <svg aria-hidden="true" focusable="false" width="30" height="30">
          <use xlinkHref="#svg-mastodon"></use>
        </svg>
      </a>
      <a
        href="https://stackoverflow.com/users/1098851/fabrizio-calderan"
        target="_blank"
        aria-label="My Stackoverflow profile (open in a new window)"
      >
        <svg aria-hidden="true" focusable="false" width="30" height="30">
          <use xlinkHref="#svg-so"></use>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/fabriziocalderan/"
        target="_blank"
        aria-label="My Linkedin profile (open in a new window)"
      >
        <svg aria-hidden="true" focusable="false" width="30" height="30">
          <use xlinkHref="#svg-linkedin"></use>
        </svg>
      </a>
    </div>
  );
}
