import React, { useState, useEffect } from 'react';

import imgIntroMobile from './../imgs/image-intro-mobile.jpg';
import imgIntroDesktop from './../imgs/image-intro-desktop.jpg';

import bgPatternIntroLeftMobile from './../imgs/bg-pattern-intro-left-mobile.svg';
import bgPatternIntroLeftDesktop from './../imgs/bg-pattern-intro-left-desktop.svg';

import bgPatternIntroRightMobile from './../imgs/bg-pattern-intro-right-mobile.svg';
import bgPatternIntroRightDesktop from './../imgs/bg-pattern-intro-right-desktop.svg';

export const Hero = function () {
    const mediaMatch600px = window.matchMedia('(min-width: 600px)');
    const mediaMatch768px = window.matchMedia('(min-width: 768px)');

    const [matches600px, setMatches600px] = useState(mediaMatch600px.matches);
    const [matches768px, setMatches768px] = useState(mediaMatch768px.matches);

    useEffect(() => {
        const handler600px = e => setMatches600px(e.matches);
        const handler768px = e => setMatches768px(e.matches);

        mediaMatch600px.addEventListener('change', handler600px);
        mediaMatch768px.addEventListener('change', handler768px);

        return () => {
            mediaMatch600px.removeEventListener('change', handler600px);
            mediaMatch768px.removeEventListener('change', handler768px);
        };
    });

    return (
        <header className="header">
            <img
                className="header__left-pattern"
                src={
                    matches768px
                        ? bgPatternIntroLeftDesktop
                        : bgPatternIntroLeftMobile
                }
                alt=""
            />
            <img
                className="header__right-pattern"
                src={
                    matches768px
                        ? bgPatternIntroRightDesktop
                        : bgPatternIntroRightMobile
                }
                alt=""
            />

            <div className="header__wrapper">
                <div className="header__img-box">
                    <img
                        className="header__hero-img"
                        src={matches600px ? imgIntroDesktop : imgIntroMobile}
                        alt="Happy Family"
                    />
                </div>

                <div className="header__content-box">
                    <h1 className="h1">Humanizing your insurance.</h1>
                    <p className="p">
                        Get your life insurance coverage easier and faster. We
                        blend our expertise and technology to help you find the
                        plan that’s right for you. Ensure you and your loved
                        ones are protected.
                    </p>
                    <a className="hero-link" href="./view-plans">
                        View plans
                    </a>
                </div>
            </div>
        </header>
    );
};
