import React from 'react';
import styles from './aboutUs-header-card.module.scss';
import cx from 'classnames';

const AboutUsHeaderCard = (props) => {
    return(
        <div className={styles.AboutUsHeaderCard} style={{width: props.width*4, height:props.width, opacity:props.opacity}}>
            {props.img
             ? <img className={styles.AboutUsHeaderCard__profile} src={props.img} alt="profile" style={{width: props.width/2, height: props.width/2}}/>
             : <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" style={{width: props.width/2, height: props.width/2}} className={cx("svg-inline--fa fa-user fa-w-14", styles.AboutUsHeaderCard__profile)} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
            }
            <div className={styles.AboutUsHeaderCard__info}>
                <h2 className={styles.AboutUsHeaderCard__name} style={{fontSize: props.width*.24}}>{props.name}</h2>
                <div className={styles.AboutUsHeaderCard__address}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className={cx("svg-inline--fa fa-map-marker-alt fa-w-12", styles.AboutUsHeaderCard__address__icon) } role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                <p className={cx(styles.AboutUsHeaderCard__address__text, styles.p2)} style={{fontSize: props.width*.14}}>{props.address}</p>
                </div>
            </div>
            {props.isBoarding
             ? <p className={styles.AboutUsHeaderCard__boarding} style={{fontSize: props.width*.12}}>شبانه روزی</p>
             : null}
        </div>
    );
}

export default AboutUsHeaderCard;