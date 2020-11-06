import React from 'react'
import logo from '../asset/image/logo.svg'


const Logo = () => {
    return (
        <div class="logo">
            <img class="logo__img" src={logo} alt="logo" />
            <div class="logo__text">
                <p class="logo__text__head"><strong>درمانیتو</strong></p>
                <p class="logo__text__body">همراه شما در درمان</p>
            </div>
        </div>
    );
}

export default Logo