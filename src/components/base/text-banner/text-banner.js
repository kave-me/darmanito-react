import React from 'react';
import styles from './text-banner.module.scss';
import cx from 'classnames';

const TextBanner = props => {
    return(
        <div className={cx(styles.section, styles.textBanner)}>
            <h2 className={styles.textBanner__text}>{props.text}</h2>
        </div>
    );
}

export default TextBanner;