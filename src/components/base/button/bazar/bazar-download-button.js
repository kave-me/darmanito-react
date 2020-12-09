import React from 'react';
import './bazar-download-button.scss';
import bazarLogo from '../../../../asset/image/bazzar-logo.svg';
import bazarText from '../../../../asset/image/bazzar-text.svg';

const BazarDownloadButton = (props) => {
    return(
        <a className="bazarButtonContainer" href={props.href} target="_blank" rel="noreferrer">
            <button className="bazarButton" style={{backgroundColor: props.backgroundColor}}>
                <p className="bazarButton__text p2">دریافت از</p>
                <img src={bazarText} alt="Bazar text" className="bazarButton__logoText"/>
                <img src={bazarLogo} alt="Bazar logo" className="bazarButton__logo"/>
            </button>
        </a>
    );
}

export default BazarDownloadButton;