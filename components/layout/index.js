import { useState, useEffect, useCallback } from "react";
import SymbolsSVG from "../svgsymbols/svgsymbols";
import Header from "../header/header";
import Footer from "../footer/footer";
import useTheme from "../helpers/theme";

const mq = "(prefers-color-scheme: dark)";

export default function Indexlayout(props) {
  const { theme, toggleThemeHandler } = useTheme();
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const toggleMenuHandler = useCallback(() => {
    setMobileMenuOpened((prevState) => !prevState);
  });

  const closeMobileMenu = useCallback(() => {
    if (mobileMenuOpened) {
      setMobileMenuOpened(false);
    }
  });

  useEffect(() => {
    window
      .matchMedia("(min-width: 48rem)")
      .addEventListener("change", closeMobileMenu);

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
