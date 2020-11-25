import React from 'react';
import Card from '../AboutUsHeaderCard';
import ProgressBar from '../ProgressBar';
import shortid from 'shortid';

const RegisterPharmacyDetail = (props) => {
    return(
        <div className="RegisterPharmacySecondFormContainer ">
            <div className="RegisterPharmacySecondFormContainer__cards">
                <Card
                name= 'نام داروخانه شما'
                address= 'درمانیتو - سرویس داروخانه - داروخانه شما'
                img= {null}
                isBoarding= {true}
                id= {shortid.generate()}/>
                <Card
                name= 'نام داروخانه شما'
                address= 'درمانیتو - سرویس داروخانه - داروخانه شما'
                img= {null}
                isBoarding= {true}
                id= {shortid.generate()}/>
                <Card
                name= 'نام داروخانه شما'
                address= 'درمانیتو - سرویس داروخانه - داروخانه شما'
                img= {null}
                isBoarding= {true}
                id= {shortid.generate()}/>
            </div>

            <form className="RegisterPharmacySecondFormContainer__form">
                <div className="RegisterPharmacySecondFormContainer__form__head">
                    <h3 className="RegisterPharmacySecondFormContainer__form__title">عضویت به عنوان داروخانه</h3>
                    <div className="RegisterPharmacySecondFormContainer__form__progressBar">
                        <ProgressBar
                        value={26}/>
                    </div>
                </div>
                <div className="RegisterPharmacySecondFormContainer__form__city">
                    <label className="RegisterPharmacySecondFormContainer__form__city__label"
                    htmlFor="city">شهر</label>
                    <select className="RegisterPharmacySecondFormContainer__form__city__select" name="city">
                    <option value={props.formik.values.city}>
                        {props.formik.values.city}</option>
                        <option value="تهران">
                            تهران</option>
                        <option value="البرز">
                            البرز</option>
                        <option value="تهران">
                            تهران</option>
                        <option value="البرز">
                            البرز</option>
                    </select>
                </div>
                <div className="RegisterPharmacySecondFormContainer__form__district">
                    <label className="RegisterPharmacySecondFormContainer__form__district__label"
                    htmlFor="district">منطقه</label>
                    <select className="RegisterPharmacySecondFormContainer__form__district__select"
                    name="district">
                        <option value={props.formik.values.district}>
                        {props.formik.values.district}</option>
                        <option value="1">منطقه یک</option>
                        <option value="2">منطقه دو</option>
                        <option value="3">منطقه سه</option>
                        <option value="4">منطقه چهار</option>
                    </select>
                </div>
            <button className="RegisterPharmacySecondFormContainer__form__button" onClick={props.nextStep}>تکمیل ثبت نام</button>
            </form>
    
        {/* <div>Register pharmacy confirm
                        <button onClick={props.nextStep}>next</button>
            <button onClick={props.prevStep}>prev</button>
        </div> */}
    
    </div>

    );
}

export default RegisterPharmacyDetail;