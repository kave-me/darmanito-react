import React from 'react';

const MainFeaturesIcon = (props) => {
    return(
        <div onClick={props.click} className={props.isActive
                        ? "mainFeaturesIcon mainFeaturesIcon__active"
                        : "mainFeaturesIcon"}>
            <img className="mainFeaturesIcon__image" src={props.image} alt="icon"/>
    <p className="mainFeaturesIcon__title">{props.title}</p>
        </div>
    );
}

export default MainFeaturesIcon;