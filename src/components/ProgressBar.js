import React from 'react';

const ProgressBar = (props) => {
    return(
        <div className="progressBarContainer">
            <p className="progressBarContainer__label">{props.value}% درصد تکمیل شده است</p>
            <div className="progressBarContainer__background">
                <div className="progressBarContainer__progress"
                style={{width:`${props.value}%`}}>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;