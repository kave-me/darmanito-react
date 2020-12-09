import React from 'react';
import TextBanner from '../components/base/text-banner';
import Support from '../components/base/support';
import Footer from '../components/base/footer';
import TermAndConditionsList from '../components/term-and-conditions';


const TermAndConditions = () => {
    return (
        <div className="container">
            <TextBanner text="قوانین و شرایط"/>
            <TermAndConditionsList/>
            <Support/>
            <Footer/>
        </div>
    );
}

export default TermAndConditions