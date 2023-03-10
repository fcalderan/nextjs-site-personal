import { useState, useEffect } from "react";
import SymbolsSVG from "../svgsymbols/svgsymbols";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Indexlayout(props) {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [theme, setTheme] = useState();

  const toggleThemeHandler = (selectedState, toggleThemeButton) => {
    localStorage.setItem("theme", selectedState);
    setTheme((_) => selectedState);
    toggleThemeButton.current.focus();
  };

  const toggleMenuHandler = () => {
    setMobileMenuOpened((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    if (mobileMenuOpened) {
      setMobileMenuOpened(false);
    }
  };

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

    /* close mobile menu on resize */
    window.matchMedia("(min-width: 48rem)").addEventListener("change", () => {
      closeMobileMenu();
    });

    /* detect ESC key */
    document.body.addEventListener("keyup", (ev) => {
      if (ev.key === "Escape" && mobileMenuOpened) {
        closeMobileMenu();
      }
    });

    /* load theme information */
    setTheme(currentTheme);
    document.documentElement.dataset.theme = currentTheme;
  });

  return (
    <>
      <SymbolsSVG />

      {/* This condition can be removed when Firefox
       * will implement by default the "inert" attribute
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
