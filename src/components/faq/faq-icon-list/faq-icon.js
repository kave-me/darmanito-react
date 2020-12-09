import React from 'react';
import './faq-icon.scss';

const FaqIcon = (props) => {
    return(
        <div onClick={props.click} className={props.active ? "FaqIconContainer FaqIconContainer__active" : "FaqIconContainer" }>
            <img className="FaqIconContainer__img" src={props.img} alt="alt"/>
            <p className="FaqIconContainer__text p2">{props.text}</p>
        </div>);
}
export default FaqIcon;