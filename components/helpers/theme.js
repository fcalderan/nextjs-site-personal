import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState();
  const mq = "(prefers-color-scheme: dark)";

  const setThemeHandler = (theme) => {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
    setTheme(theme);
  };

  const toggleThemeHandler = (selectedState, toggleThemeButton) => {
    setThemeHandler(selectedState);
    toggleThemeButton.current.focus();
  };

  const getCurrentTheme = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia(mq).matches ? "dark" : "light";
  };

  useEffect(() => {
    const currentTheme = getCurrentTheme();
    setThemeHandler(currentTheme);

    window.matchMedia(mq).addEventListener("change", (ev) => {
      setThemeHandler(ev.matches ? "dark" : "light");
    });
  }, []);

  return {
    theme,
    toggleThemeHandler,
  };
}
