import style from "./homepage.module.scss";
import Social from "../social/social";
import Fadein from "../helpers/fadein";
import Image from "next/image";

import profilePic from "../../public/img/me-front2.png";
import skill1 from "../../public/img/code-in-the-dark.jpg";
import skill2 from "../../public/img/iaap-was-certificate.jpg";

export default function Index() {
  return (
    <>
      <section aria-labelledby="content" className={style.section}>
        <div>
          <div>
            <h1 data-codeviewport>
              Hello
              <span aria-hidden="true" data-code-html="h1">
                ,
              </span>{" "}
              I am
              <br />
              <span>Fabrizio Calderan</span>
              <br />
              <small>a frontend developer based in Treviso area, Italy</small>
            </h1>

            <Social />
          </div>

          <figure className={style.portrait}>
            <div>
              <img
                width="230"
                src="/img/me-front2.png"
                alt="my portrait, a not-so-young but still curious developer"
              />
            </div>
          </figure>
        </div>
      </section>

      <Fadein>
        <section aria-labelledby="about" className={style.section}>
          <div>
            <h2 id="about" tabIndex="-1" data-codeviewport>
              <svg aria-hidden="true" focusable="false" width="30" height="30">
                <use xlinkHref="#svg-about"></use>
              </svg>
              <br />I am an inclusive{" "}
              <strong>
                frontend developer
                <span aria-hidden="true" data-code-html="h2">
                  .
                </span>
              </strong>
            </h2>

            <p>
              More than 20 years of experience in beautifully handcrafting
              thousands lines of code and a growing knowledge built day by day.
              In the last 17 years I've been working for H-art and AKQA in
              Venice headquarter, Italy.
            </p>

            <p data-codeviewport>
              I love inclusivity &amp; diversity, so I care accessibility.
            </p>
          </div>
        </section>
      </Fadein>

      <Fadein>
        <section aria-labelledby="skills" className={style.section}>
          <div>
            <h2 id="skills" tabIndex="-1">
              <svg aria-hidden="true" focusable="false" height="50" width="50">
                <use xlinkHref="#svg-skills"></use>
              </svg>
              <br />
              Skills
            </h2>

            <p>
              Throughout my professional journey I gained a lot of knowledge by
              working on several projects for many international customers (like
              Diesel, <span lang="it">Illy</span>, Whirlpool,
              <span lang="it">Telecom Italia</span>, Gore, Nike and many more).
            </p>
            <p data-codeviewport>
              My toolset includes Atom, VSCode, Git, Figma, Sketch, Adobe
              Photoshop
              <span aria-hidden="true" data-code-css="p:last-of-type">
                ,
              </span>{" "}
              and the OSx Terminal.
            </p>

            <div className={style.cards}>
              <section
                className={style.card}
                aria-labelledby="about skills-frontend"
              >
                <div>
                  <h3 id="skills-frontend">Front-end &amp; Frameworks</h3>

                  <p>
                    I usually build styleguides in HTML, JavaScript and CSS/SASS
                    (Fractal/Storybook) but I also create landing pages or
                    static sites with a &ldquo;mobile-first&rdquo; approach. I
                    do love CSS and I like creating inspiring demos on Codepen.
                    Sometimes I get involved by participating in coding contests
                    such as the{" "}
                    <a
                      href="https://www.interlogica.it/en/insight-en/winner-codeinthedark-venice/"
                      target="_blank"
                    >
                      “Code in the Dark” won in 2019
                    </a>
                    .
                  </p>
                  <p>
                    One year ago I started to explore ReactJS/NextJS studying
                    many courses (Udemy/FrontendMasters) and trying to integrate
                    these frameworks with Next-Auth, GraphQL, MongoDB,
                    Contentful, AWS and Vercel.
                  </p>
                </div>

                <figure
                  className={`${style["card__image"]} ${style["card__image--colorized"]}`}
                >
                  <Image
                    src={skill1}
                    alt="Me and other partecipants in the elimination round of the Code in the Dark in 2019."
                  />
                  <figcaption>Code in the Dark, 2019.</figcaption>
                </figure>
              </section>

              <section
                className={style.card}
                aria-labelledby="about skills-a11y"
                data-codeviewport
              >
                <div>
                  <h3 id="skills-a11y">Accessibility</h3>

                  <p>
                    I like to write and test my code for accessibility
                    <span aria-hidden="true" data-code-html="section">
                      ,
                    </span>{" "}
                    as an ongoing process during all the development phase. In
                    2022 I also completed the{" "}
                    <a
                      href="https://www.accessibilityassociation.org/s/wascertification"
                      target="_blank"
                    >
                      <abbr title="Internet Association of Accessibility Specialist">
                        IAAP
                      </abbr>
                      /<abbr title="Web Accessibility Specialist">WAS</abbr>
                    </a>{" "}
                    course (by Deque University) and I improved myself in the
                    creation of a better web experience for people with
                    impairments.
                  </p>
                  <p>
                    I'm often asked to make reports of some websites, to check
                    their WCAG compliance and propose a list of strategies and
                    adjustments to remove or limit the main accessibility
                    issues.
                  </p>
                </div>

                <figure className={style["card__image"]}>
                  <Image
                    src={skill2}
                    alt="My certificate for successfully completing the IAAP/WAS course"
                  />
                  <figcaption>A deep dive into accessibility.</figcaption>
                </figure>
              </section>
            </div>
          </div>
        </section>
      </Fadein>

      <Fadein>
        <section aria-labelledby="inspiration" className={style.section}>
          <div>
            <h2 id="inspiration" tabIndex="-1">
              <svg aria-hidden="true" focusable="false" width="30" height="30">
                <use xlinkHref="#svg-inspiration"></use>
              </svg>
              <br />
              Inspiration
            </h2>

            <p>
              Some of my latest projects, ideas or just experiments led by
              serendipity.
            </p>
          </div>
        </section>
      </Fadein>
    </>
  );
}
