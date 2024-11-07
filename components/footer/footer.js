import style from "./footer.module.scss";
import Social from "../social/social";

export default function Footer(props) {
  return (
    <footer className={style.footer} inert={props.inert}>
      <div>
        <div className={style.copyright}>
          <p>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 153.37 62.57"
              aria-hidden="true"
              focusable="false"
              width="200"
              className={style.signature}
            >
              <path
                d="M80.02,37.42C81.05,8.14,99.09,48.21,93.4,48.67c-4.42-5.28-5.07-13.33-9.47-18.37c-0.8,5.47-0.88,12.31,0.63,17.65
                c-3.85,2.84-3.88-2.19-5.06-4.96c-0.53,10.84-13.44,19.57-22.81,11.81c0.75-0.08,1.08-0.12,1.4-0.15
                c-0.17,0.15-0.35,0.31-0.52,0.46c-2.13-2.08-4.25-4.15-6.27-6.12c-4.68,10.57-18.39,5.53-27.03,4.82c1.2,1.74,4.5,3.89,5.21,6.33
                c-2.12,2.59-5.07,0.8-7.03-0.79c-6.47-5.98-11.29-13.94-18.9-18.48C2.21,40.2,2.5,39.43,3.2,38.38
                C-7.62,11.21,10.44-12.08,35.64,9.62c6.86,7.96,7.66,18.25,13.13,27.07c3.64-7.38-1.53-16.21,1.83-23.02
                c2.96,2.75-0.39,9.4,3.23,11.28C64.02,24.52,74.06,29.1,80.02,37.42z M44.69,40.51c-1.11-6.9-9.3-9.04-15.36-9.27
                c-8.69,0.33-5.08,11.27-7.15,16.67c-4.94-6.38-2.76-23.1,8.37-20.54c3.06-0.55,10.34,4.73,11.63,2.31
                C41.54,11.84,14.1-8.06,4.13,13.46c-6.98,23.32,17.42,41.6,39.14,38.17c3.22-0.38,5.96-2.2,4.36-6.68
                c-0.33-1.99-0.56-4.37-3.29-3.92C44.54,40.73,44.74,40.44,44.69,40.51z M64.96,54.84c26.39-4.36-4.99-40.58-11.32-17.95
                c0.37,3.72-0.76,9.63,2.29,11.98C57.83,51.78,62.27,54.09,64.96,54.84z"
              />
              <path
                d="M122.68,43.96c-1.58,9.38-8.32,4.55-14.08,3.29c-0.05,2.39,1.61,5.97-0.61,8.13c-4.65-5.24-3.92-13.92-7.7-19.98
                c-0.62-2.45,0.93-2.61,3.06-2.31c0.29-2.51-1.85-5.98-1.66-8.31c5.93,1.76,4.7,11.99,6.91,17.12c0.67,2.51,6.8,5.48,9.35,4.76
                c2.4-2.56,0.97-7.9,1.37-11.39c-0.35-2.29-3.13-4.11-1.59-6.76c5.11,2.87,4.77,10.83,9.26,14.98
                c-9.27-21.21,29.79-18.94,26.13-0.82C148.32,55.23,130.59,51.13,122.68,43.96z M128.84,44.16c6.48,5.75,25.9,4.36,20.28-7.83
                C141.35,28.21,125.77,29.9,128.84,44.16z"
              />
              <path
                d="M95.49,17.59c-1.45-1.03-3.02-1.94-4.29-3.16c-0.5-0.48-0.31-1.67-0.44-2.54c1.03-0.13,2.05-0.26,3.08-0.39
                c0,0.69-0.18,1.44,0.04,2.05c0.32,0.89,0.92,1.67,1.41,2.49c0.22,0.36,0.48,0.69,0.72,1.03C95.84,17.24,95.67,17.42,95.49,17.59z"
              />
              <path
                d="M128.2,8.36c-1.69-0.17-3.53-0.28-5.33-0.6c-0.39-0.07-1.02-1.14-0.89-1.33c0.4-0.62,1.12-1.49,1.68-1.46
                c1.41,0.07,2.85,0.45,4.14,1.01C128.16,6.14,128.06,7.36,128.2,8.36z"
              />
            </svg>
            &copy; Fabrizio Calderan, <span>2023&mdash;Today</span>.<br />
            <br />
            Made with love in nextJS and Contentful, hosted on Netlify.
          </p>

          <p>
            This is a{" "}
            <a href="https://www.websitecarbon.com/website/fabrizio-dev/">
              low carbon website
            </a>
            . It aims to be inclusive and{" "}
            <a href="https://www.w3.org/WAI/WCAG21/quickref/">WCAG 2.1/AA</a>{" "}
            conformant. If you encounter any accessibility issues or if you want
            to just say «Hi» feel free to contact me at{" "}
            <strong>
              m{/* */}e@f{/* */}abr{/* */}izio.dev
            </strong>
            .
            <br />
            <br />
          </p>
        </div>

        <div className={style.links}>
          <nav aria-label="Footer">
            <ul>
              <li>
                <a href="https://github.com/fcalderan/nextjs-site-personal">
                  Source code (GitHub)
                </a>
              </li>
            </ul>
          </nav>
          <Social />
        </div>
      </div>
    </footer>
  );
}
