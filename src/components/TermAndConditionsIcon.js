import React from 'react';

const TermAndConditionsIcon = (props) => {
    return (
        <div onClick={props.click} className={props.active
                        ? "TermAndConditionsIconContainer TermAndConditionsIconContainer__active"
                        : "TermAndConditionsIconContainer"}>
            <p className="TermAndConditionsIconContainer__text">{props.title}</p>
        </div>
    );
}

export default TermAndConditionsIcon;