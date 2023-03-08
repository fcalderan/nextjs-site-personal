import { useRef, useEffect, useState } from "react";
import style from "./fadein.module.scss";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((element) => {
      const isIntersecting = element[0].isIntersecting;
      setVisible(isIntersecting);
      if (isIntersecting) {
        observer.unobserve(domRef.current);
      }
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, [isVisible]);
  return (
    <div
      className={`${style["fade-in-section"]} ${
        isVisible ? style["is-visible"] : ""
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
