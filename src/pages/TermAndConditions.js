import React from 'react';
import TextBanner from '../components/TextBanner';
import Support from '../components/Support';
import Footer from '../components/Footer';
import TermAndConditionsList from '../components/TermAndConditionsList';


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