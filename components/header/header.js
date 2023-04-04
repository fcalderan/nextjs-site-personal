import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import style from "./header.module.scss";

let toggleMenuHandler, clickMenuHandler;

export default function Header(props) {
  const firstMenuItem = useRef();
  const toggleMenuButton = useRef();
  const toggleThemeButton = useRef();

  const menuSettings = [
    {
      ariaLabel: "Open main menu",
      focusElement: toggleMenuButton,
    },
    {
      ariaLabel: "Close main menu (press Escape key)",
      focusElement: firstMenuItem,
    },
  ];

  const themeSettings = {
    light: "Light theme, switch to dark mode",
    dark: "Dark theme, switch to light mode",
  };

  const [menuLabel, setMenuLabel] = useState("Open main menu");

  const toggleThemeHandler = () => {
    const selectedTheme = props.currentTheme === "dark" ? "light" : "dark";
    props.onToggleTheme(selectedTheme, toggleThemeButton);
  };

  if (props.type === "index") {
    useEffect(() => {
      toggleMenuHandler = () => {
        props.onToggleMenu();
      };

      clickMenuHandler = (ev) => {
        ev.preventDefault();
        props.closeMobileMenu();
        const hash = ev.target.getAttribute("href").replace(/^\//, "");
        setTimeout(() => (location.hash = hash), 100);
      };

      /* menu */
      const statusInt = +props.mobileMenuOpened;
      const settings = menuSettings[statusInt];
      setMenuLabel(settings.ariaLabel);
      settings.focusElement.current.focus();
    }, [props.mobileMenuOpened]);
  }

  return (
    <header className={`${style.header} ${props.type}`}>
      <nav aria-label="Main" className={style["header__nav"]}>
        {props.type === "index" && (
          <>
            <button
              aria-expanded={props.mobileMenuOpened.toString()}
              aria-live="polite"
              ref={toggleMenuButton}
              onClick={toggleMenuHandler}
              className={`${style["header__toggle"]} ${style["header__toggle--menu"]}`}
              aria-label={menuLabel}
              hidden
            >
              <svg
                viewBox="10 10 80 80"
                className={style["header__toggle--menu-closed"]}
              >
                <path d="M30,37 L70,37 Z"></path>
                <path d="M30,50 L70,50 Z"></path>
                <path d="M30,63 L70,63 Z"></path>
              </svg>
              <svg
                viewBox="10 10 80 80"
                className={style["header__toggle--menu-open"]}
              >
                <path d="M30,30 L70,70 Z"></path>
                <path d="M30,70 L70,30 Z"></path>
              </svg>
            </button>

            <ul role="list" className={style["header__menu"]}>
              <li>
                <Link
                  href="#about"
                  ref={firstMenuItem}
                  onClick={clickMenuHandler}
                >
                  <svg aria-hidden="true" focusable="false">
                    <use xlinkHref="#svg-about"></use>
                  </svg>
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" onClick={clickMenuHandler}>
                  <svg aria-hidden="true" focusable="false">
                    <use xlinkHref="#svg-skills"></use>
                  </svg>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#inspirations" onClick={clickMenuHandler}>
                  <svg aria-hidden="true" focusable="false">
                    <use xlinkHref="#svg-inspiration"></use>
                  </svg>
                  Inspirations
                </Link>
              </li>
            </ul>
          </>
        )}

        {props.type === "default" && (
          <Link href="/" className={style.backtohome}>
            <svg viewBox="0 0 22 16" aria-hidden="true" focusable="false">
              <path d="M 8 1 L 1 8 L 8 15 M 1 8 L 20 8" />
            </svg>{" "}
            Homepage
          </Link>
        )}

        <button
          inert={props.mobileMenuOpened === true ? "" : null}
          id="theme-toggle"
          aria-label={themeSettings[props.currentTheme]}
          aria-live="polite"
          ref={toggleThemeButton}
          onClick={toggleThemeHandler}
          className={`${style["header__toggle"]} ${style["header__toggle--theme"]}`}
          hidden
        >
          <svg
            className={style["sun-and-moon"]}
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <mask className={style["moon"]} id="moon-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle cx="24" cy="10" r="6" fill="black" />
            </mask>
            <circle
              className={style["sun"]}
              cx="12"
              cy="12"
              r="5"
              mask="url(#moon-mask)"
              fill="currentColor"
            />
            <g className={style["sun-beams"]} stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </button>
      </nav>
    </header>
  );
}
