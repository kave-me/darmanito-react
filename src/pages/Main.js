import React from 'react';
import MainHeader from '../components/MainHeader';
import MainAbout from '../components/MainAbout';
import MainFeatures from '../components/MainFeatures';
import MainDownload from '../components/MainDownload';
import MainRegister from '../components/MainRegister';
import Support from '../components/Support';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className="mainContainer container">
            <MainHeader/>
            <MainAbout/>
            {/* <MainFeatures/>
            <MainDownload/>
            <MainRegister/> */}
            <Support/>
            <Footer/>
        </div>
    );
}

export default Main