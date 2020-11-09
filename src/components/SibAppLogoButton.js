import sibAppLogo from '../asset/image/sib-app-logo.svg';
import sibAppText from '../asset/image/sib-app-text.svg';
import React from 'react';

const SibAppLogoButton = (props) => {
    return(
        <a href={props.href} className="sibAppButtonContainer" target="_blank" rel="noreferrer">
            <button className="sibAppButton" style={{backgroundColor: props.backgroundColor}}>
                    <img className="sibAppButton__text__img" src={sibAppLogo} alt="sibAppLogo"/>
                <div className="sibAppButton__text">
                    <p className="sibAppButton__text__text p2">دریافت نسخه ios از</p>
                    <img className="sibAppButton__logoText" src={sibAppText} alt="sibAppLogoText"/>
                </div>
            </button>
        </a>
    );
}

export default SibAppLogoButton;
