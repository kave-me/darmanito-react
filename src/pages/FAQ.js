import React from 'react';
import TextBanner from '../components/TextBanner';
import Footer from '../components/Footer';
import Support from '../components/Support';
import FaqIcon from '../components/FaqIcon';
import markerIcon from '../asset/image/market.svg';

const faqItems = [
    {}]

const FAQ = () => {
    return (
        <div className="container">
            <TextBanner
            text="سوالات متداول"/>

            <div className="faqPageMainSection section">
                <FaqIcon
                img={markerIcon}
                text="متن"
                />
            </div>

            <h1>FAQ page</h1>
            <Support/>
            <Footer/>
        </div>
    );
}

export default FAQ;