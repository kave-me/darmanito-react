import React from 'react';
import Logo from './Logo';
import {footerPages, FooterServices} from './FooterNavigationItems';

const Footer = () => {
    return(
        <div className="footer section">
            
            <div className="footer__branding">
                <Logo />
                <h3 className="footer__branding__title">سوپر اپلیکیشن درمان و سلامت</h3>
                <p className="footer__branding__copyright">تمام حقوق مادی و معنوی این سایت متعلق به درماینیتو است.</p>
                <div className="footer__branding__socialNetwork">
                    <i class="footer__branding__socialNetwork__instagram fa fa-instagram"></i>
                    <i class="footer__branding__socialNetwork__twitter fa fa-twitter"></i>
                    <i class="footer__branding__socialNetwork__linkedin fa fa-linkedin"></i>
                </div>
            </div>

            <div className="footer__services">
                <p className="footer__services__title"><strong>خدمات درمانیتو</strong></p>
                <ul>
                    {footerPages.map((item,index) => 
                        <li key={index}>{item.title}</li>)}
                </ul>
            </div>

            <div className="footer__pages">
                <p className="footer__pages__title"><strong>صفحات درمانیتو</strong></p>
                <ul>
                {FooterServices.map((item,index) => 
                        <li key={index}>{item.title}</li>)}
                </ul>
            </div>

            <div className="footer__download">
                <p className="footer__download__title"><strong>دانلود درمانیتو</strong></p>
                <div className="footer__download__icons">
                    <button className="footer_download__icons__sibApp">دانلود از سیب اپ</button>
                    <button className="footer__download__icons__bazar">دانلود از بازار</button>
                </div>

            </div>
        </div>
    );
}
export default Footer