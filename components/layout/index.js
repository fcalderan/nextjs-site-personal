import { useState, useEffect, useCallback } from "react";
import SymbolsSVG from "../svgsymbols/svgsymbols";
import Header from "../header/header";
import Footer from "../footer/footer";

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
    const mq = "(prefers-color-scheme: dark)";

    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return window.matchMedia(mq).matches ? "dark" : "light";
    }
  };

  useEffect(() => {
    const currentTheme = getThemePreference();
    setTheme(currentTheme);

    /* close mobile menu on resize */
    const menuHandler = () => {
      closeMobileMenu();
    };

    /* detect ESC key */
    const keyUpHandler = (ev) => {
      if (ev.key === "Escape" && mobileMenuOpened) {
        menuHandler();
      }
    };

    window
      .matchMedia("(min-width: 48rem)")
      .addEventListener("change", menuHandler);
    document.body.addEventListener("keyup", keyUpHandler);

    return () => {
      window
        .matchMedia("(min-width: 48rem)")
        .removeEventListener("change", menuHandler);
      document.body.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

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
