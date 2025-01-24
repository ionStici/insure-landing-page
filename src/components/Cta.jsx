import React from "react";
import bgPatternMobile from "./../imgs/bg-pattern-how-we-work-mobile.svg";
import bgPatternDesktop from "./../imgs/bg-pattern-how-we-work-desktop.svg";

export const Cta = function () {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  const [match, setMatch] = React.useState(mediaQuery.matches);

  React.useEffect(() => {
    const handler = (e) => setMatch(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  });

  return (
    <section className="cta">
      <div className="cta__wrapper">
        <img className="cta__bg-pattern" src={match ? bgPatternDesktop : bgPatternMobile} alt="" />

        <h2 className="cta__h2">Find out more about how we work</h2>
        <a className="cta__link" href=".">
          How we work
        </a>
      </div>
    </section>
  );
};
