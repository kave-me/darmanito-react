import React from 'react';
import shortid from 'shortid';
import Card from '../../../aboutUs/header/aboutUs-header-card';
import ProgressBar from '../../../base/progress-bar/progress-bar';
import './mandatory.scss';
const invalidInput = (error, _class) => {
    const result = error
                   ? `${_class}  inputError`
                   : _class
    return(result);
}
const isValid = (errors) => {
    return    errors.fullName ? false :
              errors.medicId ? false :
              errors.medicId ? false:
              true;
}
const Mandatory = (props) => {

    return(
        <div className="RegisterPharmacyMandatoryFormContainer">
            <div className="RegisterPharmacyMandatoryFormContainer__cards">
                <Card
                name= {props.formik.values.placeName}
                address= {props.formik.values.fullAddress}
                img= {props.formik.values.photo}
                isBoarding= {props.formik.values.isBoarding}
                id= {shortid.generate()}/>
                <Card
                name= {props.formik.values.placeName}
                address= {props.formik.values.fullAddress}
                img= {props.formik.values.photo}
                isBoarding= {props.formik.values.isBoarding}
                id= {shortid.generate()}/>
                <Card
                name= {props.formik.values.placeName}
                address= {props.formik.values.fullAddress}
                img= {props.formik.values.photo}
                isBoarding= {props.formik.values.isBoarding}
                id= {shortid.generate()}/>
            </div>

            <form className="RegisterPharmacyMandatoryFormContainer__form">
                <div className="RegisterPharmacyMandatoryFormContainer__form__head">
                    <h3 className="RegisterPharmacyMandatoryFormContainer__form__title">عضویت به عنوان داروخانه</h3>
                    <div className="RegisterPharmacyMandatoryFormContainer__form__progressBar">
                        <ProgressBar
                        value={26}/>
                    </div>
                </div>
                <div className="RegisterPharmacyMandatoryFormContainer__form__fullName">
                    <label className="RegisterPharmacyMandatoryFormContainer__form__fullName__label"
                    htmlFor="fullName">نام و نام خانوادگی موسس</label>
                    <input type="text" onChange={props.formik.handleChange}
                    className={invalidInput(props.formik.errors.fullName, "RegisterPharmacyMandatoryFormContainer__form__fullName__input")} name="fullName"
                    value={props.formik.values.fullName}/>
                    <p className="inputError__message">{props.formik.errors.fullName}</p>
                </div>
                <div className="RegisterPharmacyMandatoryFormContainer__form__medicId">
                    <label className="RegisterPharmacyMandatoryFormContainer__form__medicId__label"
                    htmlFor="medicId">شماره نظام پزشکی</label>
                    <input onChange={props.formik.handleChange}
                    className={invalidInput(props.formik.errors.medicId ,"RegisterPharmacyMandatoryFormContainer__form__medicId__input")}
                    name="medicId" value={props.formik.values.medicId}/>
                    <p className="inputError__message">{props.formik.errors.medicId}</p>

                </div>
                <div className="RegisterPharmacyMandatoryFormContainer__form__placeName">
                    <label className="RegisterPharmacyMandatoryFormContainer__form__placeName__label"
                    htmlFor="placeName">نام داروخانه / فروشگاه</label>
                    <input onChange={props.formik.handleChange}
                    className={invalidInput(props.formik.errors.placeName ,"RegisterPharmacyMandatoryFormContainer__form__placeName__input")}
                    name="placeName" value={props.formik.values.placeName}/>
                    <p className="inputError__message">{props.formik.errors.placeName}</p>

                </div>
                <div className="RegisterPharmacyMandatoryFormContainer__form__placePhone">
                    <label className="RegisterPharmacyMandatoryFormContainer__form__placePhone__label"
                    htmlFor="placePhone">شماره داروخانه</label>
                    <input onChange={props.formik.handleChange}
                    className={invalidInput(props.formik.errors.placePhone ,"RegisterPharmacyMandatoryFormContainer__form__placePhone__input")}
                    name="placePhone" value={props.formik.values.placePhone}/>
                    <p className="inputError__message">{props.formik.errors.placePhone}</p>

                </div>
            <button className="RegisterPharmacyMandatoryFormContainer__form__button" onClick={props.nextStep}
            disabled={!isValid(props.formik.errors)}>مرحله بعد</button>
            </form>
            </div>
    );
}

export default Mandatory;