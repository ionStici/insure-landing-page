import logo from "./../imgs/logo.svg";
import iconHamb from "./../imgs/icon-hamburger.svg";
import iconClose from "./../imgs/icon-close.svg";
import bgPatternMobileNav from "./../imgs/bg-pattern-mobile-nav.svg";

export const NavBar = function (props) {
  const openNav = (target) => {
    target.dataset.nav = "close";
    target.src = iconHamb;
    document.body.classList.remove("open");
  };

  const closeNav = (target) => {
    target.dataset.nav = "open";
    target.src = iconClose;
    document.body.classList.add("open");
  };

  const handleClick = ({ target }) => {
    if (target.dataset.nav === "open") {
      openNav(target);
      return;
    }

    if (target.dataset.nav === "close") {
      closeNav(target);
      return;
    }
  };

  return (
    <nav className="nav">
      <a className="nav__logo-link" href=".">
        <img src={logo} alt="logo" />
      </a>

      <button className="nav__btn" onClick={handleClick}>
        <img src={iconHamb} alt="" data-nav="close" />
      </button>

      <ul className="nav__ul">
        {props.links.map((link, i) => {
          return (
            <li className="nav__li" key={i}>
              <a className={`${"link"} ${link === "View plans" ? "link--custom" : ""}`} href=".">
                {link.toUpperCase()}
              </a>
            </li>
          );
        })}
        <img className="nav__ul__bg-pattern" src={bgPatternMobileNav} alt="" />
      </ul>
    </nav>
  );
};
