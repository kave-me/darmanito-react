import React from 'react';

const TextBanner = props => {
    return(
        <div className="section textBanner">
            <h2 className="textBanner__text">{props.text}</h2>
        </div>
    );
}

export default TextBanner