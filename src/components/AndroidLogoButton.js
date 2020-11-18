import React from 'react';
import androidLogo from '../asset/image/android.svg';

const AndroidLogoButton = (props) => {
    return(
        <a className="androidButtonContainer" href={props.href} target="_blank" rel="noreferrer">
            <button className="androidButton" style={{backgroundColor: props.backgroundColor}}>
                <img src={androidLogo} alt="Android logo" className="androidButton__logo"/>
                <p className="androidButton__text">دانلود مستقیم</p>
            </button>
        </a>
    );
}

export default AndroidLogoButton;