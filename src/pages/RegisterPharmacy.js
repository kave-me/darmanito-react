import React from 'react';
import RegisterForm from '../components/register';
import Footer from '../components/base/footer';
import Support from '../components/base/support';

const RegisterPharmacy = () => {
    return (
        <div className="RegisterPharmacyContainer">
            <div className="RegisterPharmacy section">
            <RegisterForm/>
            </div>
            <Support/>
            <Footer/>
        </div>
    );
}

export default RegisterPharmacy