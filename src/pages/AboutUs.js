import React from 'react';
import Header from '../components/AboutUsHeader';
import Statics from '../components/AboutUsStatics';
import Services from '../components/AboutUsServices';
import Support from '../components/Support';
import Footer from '../components/Footer';


const AboutUs = () => {
    return (
        <div className="container">
            <Header/>
            {/* <Statics/> */}
            {/* <Services/> */}
            <Support/>
            <Footer/>
        </div>
    );
}

export default AboutUs