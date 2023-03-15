import React, { useEffect } from 'react';

import imgIntroMobile from './../imgs/image-intro-mobile.jpg';
import imgIntroDesktop from './../imgs/image-intro-desktop.jpg';

import bgPatternIntroLeftMobile from './../imgs/bg-pattern-intro-left-mobile.svg';
import bgPatternIntroLeftDesktop from './../imgs/bg-pattern-intro-left-desktop.svg';

import bgPatternIntroRightMobile from './../imgs/bg-pattern-intro-right-mobile.svg';
import bgPatternIntroRightDesktop from './../imgs/bg-pattern-intro-right-desktop.svg';

export const Hero = function (props) {
    const mediaMatch = window.matchMedia('(min-width: 600px)');
    const [matches, setMatches] = React.useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addEventListener('change', handler);
        console.log(matches);
        return () => mediaMatch.removeEventListener('change', handler);
    });

    return (
        <header className="header">
            <div className="header__img-box">
                <img
                    className="header__hero-img"
                    src={matches ? imgIntroDesktop : imgIntroMobile}
                    alt="Happy Family"
                />
            </div>

            <div className="header__content-box">
                <img
                    className="header__left-pattern"
                    src={
                        matches
                            ? bgPatternIntroLeftDesktop
                            : bgPatternIntroLeftMobile
                    }
                    alt=""
                />
                <img
                    className="header__right-pattern"
                    src={
                        matches
                            ? bgPatternIntroRightDesktop
                            : bgPatternIntroRightMobile
                    }
                    alt=""
                />

                <h1 className="h1">Humanizing your insurance.</h1>
                <p className="p">
                    Get your life insurance coverage easier and faster. We blend
                    our expertise and technology to help you find the plan
                    that’s right for you. Ensure you and your loved ones are
                    protected.
                </p>
                <a className="a" href="./view-plans">
                    View plans
                </a>
            </div>
        </header>
    );
};
