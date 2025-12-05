import React, { useEffect, useState } from "react";
import "./GoToTop.css";

const GoToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  const calculateScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;

    setScrollPercent(Math.round(scrolled));

    // Show button after 100px scrolling
    setVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScroll);
    return () => window.removeEventListener("scroll", calculateScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`goTop ${visible ? "show" : ""}`}
      onClick={goToTop}
      style={{
        background: `conic-gradient(#0044ff ${scrollPercent}%, #ddd ${scrollPercent}%)`,
      }}
    >
      <div className="insideCircle">{scrollPercent}%</div>
    </div>
  );
};

export default GoToTop;
