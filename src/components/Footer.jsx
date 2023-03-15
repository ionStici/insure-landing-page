import logo from './../imgs/logo.svg';
import bgPatternMobile from './../imgs/bg-pattern-footer-mobile.svg';
import bgPatternDesktop from './../imgs/bg-pattern-footer-desktop.svg';
import iconFb from './../imgs/icon-facebook.svg';
import iconTw from './../imgs/icon-twitter.svg';
import iconPin from './../imgs/icon-pinterest.svg';
import iconIn from './../imgs/icon-instagram.svg';
const socialIcons = [iconFb, iconTw, iconPin, iconIn];

export const Footer = function (props) {
    return (
        <footer className="footer">
            <picture>
                <source srcSet={bgPatternMobile} media="(max-width: 649px)" />
                <img
                    src={bgPatternDesktop}
                    className="footer__bg-pattern"
                    alt=""
                />
            </picture>

            <div className="footer__wrapper">
                <div className="footer__social-box">
                    <img className="footer__logo" src={logo} alt="" />

                    <div>
                        {socialIcons.map((icon, i) => (
                            <img
                                className="footer__icon"
                                key={i}
                                src={icon}
                                alt=""
                            />
                        ))}
                    </div>
                </div>

                <div className="footer__box">
                    <div className="footer__links-box">
                        <h3 className="footer__h3">Out Company</h3>
                        <ul className="footer__ul">
                            {props.ourCompany.map((link, i) => {
                                return (
                                    <li className="footer__li" key={i}>
                                        <a
                                            className="footer__link"
                                            href={link
                                                .toLowerCase()
                                                .split(' ')
                                                .join('-')}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="footer__links-box">
                        <h3 className="footer__h3">Help Me</h3>
                        <ul className="footer__ul">
                            {props.helpMe.map((link, i) => {
                                return (
                                    <li className="footer__li" key={i}>
                                        <a
                                            className="footer__link"
                                            href={link
                                                .toLowerCase()
                                                .split(' ')
                                                .join('-')}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="footer__links-box">
                        <h3 className="footer__h3">Contact</h3>
                        <ul className="footer__ul">
                            {props.contact.map((link, i) => {
                                return (
                                    <li className="footer__li" key={i}>
                                        <a
                                            className="footer__link"
                                            href={link
                                                .toLowerCase()
                                                .split(' ')
                                                .join('-')}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="footer__links-box">
                        <h3 className="footer__h3">Others</h3>
                        <ul className="footer__ul">
                            {props.others.map((link, i) => {
                                return (
                                    <li className="footer__li" key={i}>
                                        <a
                                            className="footer__link"
                                            href={link
                                                .toLowerCase()
                                                .split(' ')
                                                .join('-')}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
