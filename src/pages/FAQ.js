import React from 'react';
import TextBanner from '../components/TextBanner';
import Footer from '../components/Footer';
import Support from '../components/Support';
import FaqIconList from '../components/FaqIconList';
import FaqQuestionList from '../components/FaqQuestionList';



const FAQ = () => {
    return (
        <div className="container">
            <TextBanner
            text="سوالات متداول"/>
            <div className="faqPageMainSection section">
                <h3 className="faqPageMainSection__title">سوال شما درباره کدام سرویس است؟</h3>
                <FaqIconList/>
                <FaqQuestionList/>
            </div>

            <Support/>
            <Footer/>
        </div>
    );
}

export default FAQ;