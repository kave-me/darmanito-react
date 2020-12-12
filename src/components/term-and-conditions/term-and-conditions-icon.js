import React from 'react';
import styles from './term-and-conditions-icon.module.scss';
import cx from 'classnames';

const TermAndConditionsIcon = (props) => {
    return (
        <div onClick={props.click} className={props.active
                        ? cx(styles.TermAndConditionsIconContainer, styles.TermAndConditionsIconContainer__active)
                        : styles.TermAndConditionsIconContainer}>
            <p className={styles.TermAndConditionsIconContainer__text}>{props.title}</p>
        </div>
    );
}

export default TermAndConditionsIcon;