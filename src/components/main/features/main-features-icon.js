import React from 'react';
import styles from './main-features-icon.module.scss';
import cx from 'classnames';

const MainFeaturesIcon = (props) => {
    return(
        <div onClick={props.click} className={props.isActive
                        ? cx(styles.mainFeaturesIcon, styles.mainFeaturesIcon__active)
                        : styles.mainFeaturesIcon}>
            <img className={styles.mainFeaturesIcon__image} src={props.image} alt={props.title}/>
    <p className={styles.mainFeaturesIcon__title}>{props.title}</p>
        </div>
    );
}

export default MainFeaturesIcon;