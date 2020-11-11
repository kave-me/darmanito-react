import React from 'react';

const FaqIcon = (props) => {
    return(
        <div className="FaqIconContainer">
            <img className="FaqIconContainer__img" src={props.img} alt="alt"/>
            <p className="FaqIconContainer__text p2">{props.text}</p>
        </div>);
}
export default FaqIcon;