import React from 'react';
import TextBanner from '../components/TextBanner'
import Support from '../components/Support'
import Footer from '../components/Footer'

const ContactUs = () => {
    return (
        <div className="container">
            <TextBanner text="تماس با ما"/>
            <h1 className="TemprorayPlaceHolder">place holder</h1>
            <Support/>
            <Footer/>
        </div>
    );
}

export default ContactUs