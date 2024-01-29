import { useRef, useEffect, useState } from "react";
import style from "./fadein.module.scss";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState();
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((element) => {
      const isIntersecting = element[0].isIntersecting;
      setVisible(isIntersecting);
      if (isIntersecting && domRef.current) {
        observer.unobserve(domRef.current);
      }
    });
    setTimeout(() => {
      domRef.current && observer.observe(domRef.current);
    }, 100);
    return () => domRef.current && observer.unobserve(domRef.current);
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
