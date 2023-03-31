import { useState, useEffect, useCallback } from "react";
import SymbolsSVG from "../svgsymbols/svgsymbols";
import Header from "../header/header";
import Footer from "../footer/footer";
export default function Defaultlayout(props) {
  const [theme, setTheme] = useState();

  const toggleThemeHandler = useCallback((selectedState, toggleThemeButton) => {
    localStorage.setItem("theme", selectedState);
    setTheme((_) => selectedState);
    toggleThemeButton.current.focus();
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
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <SymbolsSVG />

      <a href="#content" className="skiplink">
        Skip to main content
      </a>

      <Header
        onToggleTheme={toggleThemeHandler}
        currentTheme={theme}
        type="default"
        key="header"
      />

      <main id="content" tabIndex="-1">
        {props.children}
      </main>

      <Footer />
    </>
  );
}
