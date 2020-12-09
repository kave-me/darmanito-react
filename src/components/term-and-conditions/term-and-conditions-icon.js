import React from 'react';
import './term-and-conditions-icon.scss';

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