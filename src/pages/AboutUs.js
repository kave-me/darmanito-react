import React from 'react';
import Header from '../components/aboutUs/header';
import Statics from '../components/aboutUs/statics';
import Services from '../components/aboutUs/services';
import Support from '../components/base/support';
import Footer from '../components/base/footer';


const AboutUs = () => {
    return (
        <div className="container">
            <Header/>
            <Statics/>
            <Services/>
            <Support/>
            <Footer/>
        </div>
    );
}

export default AboutUs