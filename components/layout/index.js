import { useState, useEffect, useCallback } from "react";
import SymbolsSVG from "../svgsymbols/svgsymbols";
import Header from "../header/header";
import Footer from "../footer/footer";

const mq = "(prefers-color-scheme: dark)";

export default function Indexlayout(props) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [theme, setTheme] = useState();

  const toggleThemeHandler = useCallback((selectedState, toggleThemeButton) => {
    localStorage.setItem("theme", selectedState);
    setTheme((_) => selectedState);
    toggleThemeButton.current.focus();
  });

  const toggleMenuHandler = useCallback(() => {
    setMobileMenuOpened((prevState) => !prevState);
  });

  const closeMobileMenu = useCallback(() => {
    if (mobileMenuOpened) {
      setMobileMenuOpened(false);
    }
  });

  const getThemePreference = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return window.matchMedia(mq).matches ? "dark" : "light";
    }
  };

  useEffect(() => {
    const currentTheme = getThemePreference();
    setTheme(currentTheme);

    window
      .matchMedia("(min-width: 48rem)")
      .addEventListener("change", closeMobileMenu);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (ev) => {
        setTheme(ev.matches ? "dark" : "light");
      });

    return () => {
      window
        .matchMedia("(min-width: 48rem)")
        .removeEventListener("change", closeMobileMenu);
    };
  }, []);

  useEffect(() => {
    /* detect ESC key */
    const keyUpHandler = (ev) => {
      if (ev.key === "Escape") {
        closeMobileMenu();
      }
    };
    document.body.addEventListener("keyup", keyUpHandler);
    return () => {
      document.body.removeEventListener("keyup", keyUpHandler);
    };
  }, [mobileMenuOpened]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <SymbolsSVG />

      {/* This condition can be removed when Firefox
       * will implement the "inert" attribute
       */}
      {mobileMenuOpened !== true && (
        <a
          href="#content"
          className="skiplink"
          inert={mobileMenuOpened === true ? "" : null}
        >
          Skip to main content
        </a>
      )}

      <Header
        onToggleMenu={toggleMenuHandler}
        onToggleTheme={toggleThemeHandler}
        closeMobileMenu={closeMobileMenu}
        mobileMenuOpened={mobileMenuOpened}
        currentTheme={theme}
        key="header"
        type="index"
      />

      <main
        id="content"
        tabIndex="-1"
        inert={mobileMenuOpened === true ? "" : null}
      >
        {props.children}
      </main>

      <Footer inert={mobileMenuOpened === true ? "" : null} />
    </>
  );
}
