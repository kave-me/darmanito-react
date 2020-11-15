import React from 'react';
import MainHeader from '../components/MainHeader';
import Support from '../components/Support';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className="mainContainer container">
            <MainHeader/>
            <h1>Main page</h1>
            <Support/>
            <Footer/>
        </div>
    );
}

export default Main