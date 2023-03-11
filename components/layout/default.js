import { useState, useEffect } from "react";
import SymbolsSVG from "../svgsymbols/svgsymbols";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Defaultlayout(props) {
  const [theme, setTheme] = useState();

  const toggleThemeHandler = (selectedState, toggleThemeButton) => {
    localStorage.setItem("theme", selectedState);
    setTheme((_) => selectedState);
    toggleThemeButton.current.focus();
  };

  const toggleMenuHandler = () => {
    setMobileMenuOpened((prevState) => !prevState);
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

    /* load theme information */
    setTheme(currentTheme);
    document.documentElement.dataset.theme = currentTheme;
  });

  return (
    <>
      <SymbolsSVG />

      <Header
        onToggleTheme={toggleThemeHandler}
        currentTheme={theme}
        type="default"
      />

      <main id="content" tabIndex="-1">
        {props.children}
      </main>

      <Footer />
    </>
  );
}
