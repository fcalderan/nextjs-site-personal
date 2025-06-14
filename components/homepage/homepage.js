import style from "./homepage.module.scss";
import Social from "../social/social";
import Card from "../card/card";
import Fadein from "../helpers/fadein";
import Image from "next/image";

import skill1 from "../../public/img/code-in-the-dark.jpg";
import skill2 from "../../public/img/iaap-was-certificate.jpg";

export default function Index(props) {
  return (
    <>
      <section aria-labelledby="hello" className={style.section}>
        <div className="section_cnt">
          <div className={style.title}>
            <h1 id="hello" data-codeviewport>
              Hello. I am
              <br />
              <span>Fabrizio Calderan</span>
              <span aria-hidden="true" data-code-html="h1">
                .
              </span>
              <br />
              <small>A frontend developer based in Treviso area, Italy</small>
            </h1>

            <Social />
          </div>

          <figure className={style.portrait}>
            <div>
              <picture className={style.image}>
                <source srcSet="/img/me-front-3.png.avif" type="image/avif" />
                <img
                  fetchpriority="high"
                  width="230"
                  height="230"
                  src="/img/me-front-3.png"
                  alt="my portrait, a young-inside and still curious developer"
                />
              </picture>
            </div>
          </figure>
        </div>
      </section>

      <Fadein>
        <section aria-labelledby="about" className={style.section}>
          <div className="section_cnt">
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
              A Master's Degree in Computer Science at Ca' Foscari university in
              Venice, more than 20 years of experience in beautifully
              handcrafting thousands lines of code and a growing knowledge built
              day by day. In the last 17 years I've been working at{" "}
              <a href="https://www.akqa.com/studios/venice/">AKQA</a> in Venice.
            </p>

            <p data-codeviewport>
              I love inclusivity &amp; diversity, so I care accessibility.
            </p>
          </div>
        </section>
      </Fadein>

      <Fadein>
        <section aria-labelledby="skills" className={style.section}>
          <div className="section_cnt">
            <h2 id="skills" tabIndex="-1">
              <svg aria-hidden="true" focusable="false" height="50" width="50">
                <use xlinkHref="#svg-skills"></use>
              </svg>
              <br />
              Skills
            </h2>

            <p>
              Throughout my professional journey I gained a lot of experience by
              working on several projects for many international companies (like
              Diesel, <span lang="it">Illy</span>, Whirlpool,{" "}
              <span lang="it">Telecom Italia</span>, Gore, Nike and many more).
            </p>
            <p data-codeviewport>
              My toolset includes Atom, VSCode, Git (GitHub), Voiceover, Figma,
              Photoshop
              <span
                aria-hidden="true"
                data-code-css="p&#x2009;:&#x2009;last-of-type"
              >
                ,
              </span>{" "}
              and Sketch (also: Udemy, Frontend Masters and ChatGPT for
              learning).
            </p>

            <div className={style.cards}>
              <section
                className={style.card}
                aria-labelledby="skill skills-frontend"
              >
                <div>
                  <h3 id="skills-frontend">Front-end &amp; Frameworks</h3>

                  <p>
                    I usually build styleguides in HTML, JavaScript and CSS/SASS
                    (Fractal/Storybook) but I also build landing pages, static
                    or nextJS sites with a mobile-first approach. I do love CSS
                    and I like creating inspiring demos on Codepen. Sometimes I
                    enjoy participating in coding challenges, like a{" "}
                    <a href="https://www.interlogica.it/en/insight-en/winner-codeinthedark-venice/">
                      “Code in the Dark” event
                    </a>{" "}
                    won in 2019.
                  </p>
                  <p>
                    In 2022 I started to explore ReactJS/NextJS and building
                    integrations with Next-Auth, GraphQL, MongoDB, Contentful or
                    AWS.
                  </p>
                </div>

                <figure
                  className={`${style["card__image"]} ${style["card__image--colorized"]}`}
                >
                  <Image
                    src={skill1}
                    alt="Me and other partecipants in the elimination round of the Code in the Dark in Venice, 2019."
                  />
                  <figcaption>
                    Me at code in the Dark, Venice edition. 2019.
                  </figcaption>
                </figure>
              </section>

              <section
                className={style.card}
                aria-labelledby="skill skills-a11y"
                data-codeviewport
              >
                <div>
                  <h3 id="skills-a11y">Accessibility</h3>

                  <p>
                    I like writing and testing my code for accessibility
                    <span aria-hidden="true" data-code-html="section">
                      ,
                    </span>{" "}
                    as an ongoing process during all the development phase. In
                    2022 I also completed the{" "}
                    <a href="https://www.accessibilityassociation.org/s/wascertification">
                      <abbr title="Web Accessibility Specialist">WAS</abbr> (Web
                      Accessibility Specialist) course
                    </a>{" "}
                    (by Deque University) and I improved myself in the creation
                    of a better web experience for everyone.
                  </p>
                  <p>
                    I often prepare reports about the WCAG/AA conformity of some
                    websites, aiming to propose a list of strategies and
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
        <section aria-labelledby="inspirations" className={style.section}>
          <div className="section_cnt">
            <h2 id="inspirations" tabIndex="-1">
              <svg aria-hidden="true" focusable="false" width="50" height="50">
                <use xlinkHref="#svg-inspiration"></use>
              </svg>
              <br />
              Inspirations
            </h2>

            <p className={style.intro}>
              Some of my latest projects, ideas or just experiments led by
              serendipity.
            </p>

            <div className={style.inspirations}>
              {props.inspirations.map((i) => {
                return <Card inspiration={i} key={i.sys.id} />;
              })}
            </div>
          </div>
        </section>
      </Fadein>
    </>
  );
}
