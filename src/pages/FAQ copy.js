import React from 'react';
import TextBanner from '../components/base/text-banner';
import Footer from '../components/base/footer';
import Support from '../components/base/support';
import FaqIconList from '../components/faq/faq-icon-list';
import FaqQuestionList from '../components/faq/faq-question-list';



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