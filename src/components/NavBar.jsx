import logo from './../imgs/logo.svg';
import iconHamb from './../imgs/icon-hamburger.svg';
import iconClose from './../imgs/icon-close.svg';

export const NavBar = function (props) {
    return (
        <nav className="nav">
            <img src={logo} alt="logo" />
            <img className="nav__icon" src={iconHamb} alt="" />

            <ul className="nav__ul">
                {props.links.map((link, i) => {
                    return (
                        <li className="nav__li" key={i}>
                            <a
                                className="link"
                                href={link.toLowerCase().split(' ').join('-')}
                            >
                                {link.toUpperCase()}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
