import SymbolsSVG from "../svgsymbols/svgsymbols";
import Header from "../header/header";
import Footer from "../footer/footer";
import useThemeHook from "../../hooks/theme";

export default function Defaultlayout(props) {
  const { theme, toggleThemeHandler } = useThemeHook();

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
