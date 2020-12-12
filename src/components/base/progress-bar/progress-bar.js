import React from 'react';
import styles from './progress-bar.module.scss';

const ProgressBar = (props) => {
    return(
        <div className={styles.progressBarContainer}>
            <p className={styles.progressBarContainer__label}>{props.value}% درصد تکمیل شده است</p>
            <div className={styles.progressBarContainer__background}>
                <div className={styles.progressBarContainer__progress}
                style={{width:`${props.value}%`}}>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;