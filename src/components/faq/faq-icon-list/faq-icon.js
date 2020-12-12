import React from 'react';
import styles from './faq-icon.module.scss';
import cx from 'classnames';

const FaqIcon = (props) => {
    return(
        <div onClick={props.click} className={props.active ?
         cx(styles.FaqIconContainer, styles.FaqIconContainer__active) :
          styles.FaqIconContainer }>
              
            <img className={styles.FaqIconContainer__img} src={props.img} alt="alt"/>
            <p className={cx(styles.FaqIconContainer__text, styles.p2)}>{props.text}</p>
        </div>);
}
export default FaqIcon;