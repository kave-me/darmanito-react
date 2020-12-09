import React from 'react'
import logo from '../../../asset/image/logo.svg'
import './logo.scss';


const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__img" src={logo} alt="logo" />
            <div className="logo__text">
                <p className="logo__text__head"><strong>درمانیتو</strong></p>
                <p className="logo__text__body">همراه شما در درمان</p>
            </div>
        </div>
    );
}

export default Logo