import React from 'react';
import Logo from './Logo';
import {footerPages, footerServices} from './FooterNavigationItems';
import BazarLogoButton from '../components/BazarLogoButton'
import SibAppLogoButton from '../components/SibAppLogoButton'

const Footer = () => {
    return(
        <div className="footer section">
            
            <div className="footer__branding">
                <Logo />
                <h3 className="footer__branding__title">سوپر اپلیکیشن درمان و سلامت</h3>
                <p className="footer__branding__copyright">تمام حقوق مادی و معنوی این سایت متعلق به درماینیتو است.</p>
                <div className="footer__branding__socialNetwork">
                    <i className="footer__branding__socialNetwork__instagram fa fa-instagram"></i>
                    <i className="footer__branding__socialNetwork__twitter fa fa-twitter"></i>
                    <i className="footer__branding__socialNetwork__linkedin fa fa-linkedin"></i>
                </div>
            </div>

            <div className="footer__services">
                <p className="footer__services__title"><strong>خدمات درمانیتو</strong></p>
                <ul className="footer__services__items">
                    {footerPages.map((item,index) => 
                        <li className="footer__services__items__item p2" key={index}>{item.title}</li>)}
                </ul>
            </div>

            <div className="footer__pages">
                <p className="footer__pages__title"><strong>صفحات درمانیتو</strong></p>
                <ul className="footer__pages__items">
                {footerServices.map((item,index) => 
                        <li className="footer__pages__items__item p2" key={index}>{item.title}</li>)}
                </ul>
            </div>

            <div className="footer__download">
                <p className="footer__download__title"><strong>دانلود درمانیتو</strong></p>
                <div className="footer__download__icons">
                    <BazarLogoButton backgroundColor="black" href="https://cafebazaar.ir/install"/>
                    <SibAppLogoButton backgroundColor="black" href="https://sibapp.com"/>
                </div>
            </div>
        </div>
    );
}
export default Footer;