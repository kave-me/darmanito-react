import React from 'react';
import MainHeader from '../components/main/header';
import MainAbout from '../components/main/about';
import MainFeatures from '../components/main/features';
import MainDownload from '../components/main/download';
import MainRegister from '../components/main/register';
import Support from '../components/base/support';
import Footer from '../components/base/footer';

const Main = () => {
    return (
        <div className="mainContainer container">
            <MainHeader/>
            <MainAbout/>
            <MainFeatures/>
            <MainDownload/>
            <MainRegister/>
            <Support/>
            <Footer/>
        </div>
    );
}

export default Main