import React from 'react';
import Logo from '../logo';
import {footerPages, footerServices} from './footer-navigation-items';
import BazarDownloadButton from '../../base/button/bazar';
import SibAppDownloadButton from '../../base/button/sibApp';
import {Link} from 'react-router-dom';
import styles from './footer.module.scss';
import cx from 'classnames';

const Footer = () => {
    return(
        <div className={cx(styles.footer, styles.section)}>
            
            <div className={styles.footer__branding}>
                <Logo />
                <h3 className={styles.footer__branding__title}>سوپر اپلیکیشن درمان و سلامت</h3>
                <p className={styles.footer__branding__copyright}>تمام حقوق مادی و معنوی این سایت متعلق به درماینیتو است.</p>
                <div className={styles.footer__branding__socialNetwork}>
                    <i className={cx(styles.footer__branding__socialNetwork__instagram, "fa fa-instagram")}></i>
                    <i className={cx(styles.footer__branding__socialNetwork__twitter, "fa fa-twitter")}></i>
                    <i className={cx(styles.footer__branding__socialNetwork__linkedin, "fa fa-linkedin")}></i>
                </div>
            </div>

            <div className={styles.footer__services}>
                <p className={styles.footer__services__title}><strong>خدمات درمانیتو</strong></p>
                <ul className={styles.footer__services__items}>
                    {footerPages.map((item,index) => 
                        <li className={cx(styles.footer__services__items__item, styles.p2)} key={index}><Link className={cx(styles.footer__services__items__item__a, styles.p2)} to={item.href}>{item.title} </Link></li>)}
                </ul>
            </div>

            <div className={styles.footer__pages}>
                <p className={styles.footer__pages__title}><strong>صفحات درمانیتو</strong></p>
                <ul className={styles.footer__pages__items}>
                {footerServices.map((item,index) => 
                        <li className={cx(styles.footer__services__items__item, styles.p2)} key={index}><Link className={cx(styles.footer__services__items__item__a, styles.p2)} to={item.href}>{item.title} </Link></li>)}
                </ul>
            </div>

            <div className={styles.footer__download}>
                <p className={styles.footer__download__title}><strong>دانلود درمانیتو</strong></p>
                <div className={styles.footer__download__icons}>
                    <BazarDownloadButton backgroundColor="black" href="https://cafebazaar.ir/install"/>
                    <SibAppDownloadButton backgroundColor="black" href="https://sibapp.com"/>
                </div>
            </div>
        </div>
    );
}
export default Footer;