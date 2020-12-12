import React from 'react';
import shortid from 'shortid';
import Card from '../../../aboutUs/header/aboutUs-header-card';
import ProgressBar from '../../../base/progress-bar/progress-bar';
import styles from './mandatory.module.scss';
import cx from 'classnames';

const invalidInput = (formik, id, _class) => {
    
    const result = formik.errors[id]
                   ? cx(_class,  styles.inputError)
                   : _class
    return(formik.initialValues[id] !== formik.values[id] ? result: _class);
}
const invalidError = (formik, id) =>  formik.values[id] !== formik.initialValues[id]

const isValid = (errors) => {
    return    errors.fullName ? false :
              errors.medicId ? false :
              errors.medicId ? false:
              true;
}
const Mandatory = (props) => {
    return(
        <div className={styles.RegisterPharmacyMandatoryFormContainer}>
            <div className={styles.RegisterPharmacyMandatoryFormContainer__cards}>
                <Card
                width={100}
                opacity={1}
                name= {props.formik.values.placeName}
                address= {props.formik.values.fullAddress}
                img= {props.formik.values.photo}
                isBoarding= {props.formik.values.isBoarding}
                id= {shortid.generate()}/>
                <Card
                width={80}
                opacity={.6}
                name= {props.formik.values.placeName}
                address= {props.formik.values.fullAddress}
                img= {props.formik.values.photo}
                isBoarding= {props.formik.values.isBoarding}
                id= {shortid.generate()}/>
                <Card
                width={75}
                opacity={.4}
                name= {props.formik.values.placeName}
                address= {props.formik.values.fullAddress}
                img= {props.formik.values.photo}
                isBoarding= {props.formik.values.isBoarding}
                id= {shortid.generate()}/>
            </div>

            <form className={styles.RegisterPharmacyMandatoryFormContainer__form}>
                <div className={styles.RegisterPharmacyMandatoryFormContainer__form__head}>
                    <h3 className={styles.RegisterPharmacyMandatoryFormContainer__form__title}>عضویت به عنوان داروخانه</h3>
                    <div className={styles.RegisterPharmacyMandatoryFormContainer__form__progressBar}>
                        <ProgressBar
                        value={26}/>
                    </div>
                </div>
                <div className={styles.RegisterPharmacyMandatoryFormContainer__form__fullName}>
                    <label className={styles.RegisterPharmacyMandatoryFormContainer__form__fullName__label}
                    htmlFor="fullName">نام و نام خانوادگی موسس</label>
                    <input type="text" onChange={props.formik.handleChange}
                    className={invalidInput(props.formik, "fullName", styles.RegisterPharmacyMandatoryFormContainer__form__fullName__input)} name="fullName"
                    value={props.formik.values.fullName}/>
                    {invalidError(props.formik, "fullName")? 
                    <p className={styles.inputError__message}>{props.formik.errors.fullName}</p>
                    :null}
                </div>
                <div className={styles.RegisterPharmacyMandatoryFormContainer__form__medicId}>
                    <label className={styles.RegisterPharmacyMandatoryFormContainer__form__medicId__label}
                    htmlFor="medicId">شماره نظام پزشکی</label>
                    <input onChange={props.formik.handleChange}
                    className={invalidInput(props.formik, "medicId" ,styles.RegisterPharmacyMandatoryFormContainer__form__medicId__input)}
                    name="medicId" value={props.formik.values.medicId}/>
                    {invalidError(props.formik, "medicId")? 
                    <p className={styles.inputError__message}>{props.formik.errors.medicId}</p>
                    :null}

                </div>
                <div className={styles.RegisterPharmacyMandatoryFormContainer__form__placeName}>
                    <label className={styles.RegisterPharmacyMandatoryFormContainer__form__placeName__label}
                    htmlFor="placeName">نام داروخانه / فروشگاه</label>
                    <input onChange={props.formik.handleChange}
                    className={invalidInput(props.formik, "placeName", styles.RegisterPharmacyMandatoryFormContainer__form__placeName__input)}
                    name="placeName" value={props.formik.values.placeName}/>
                    {invalidError(props.formik, "placeName")? 
                    <p className={styles.inputError__message}>{props.formik.errors.placeName}</p>
                    :null}

                </div>
                <div className={styles.RegisterPharmacyMandatoryFormContainer__form__placePhone}>
                    <label className={styles.RegisterPharmacyMandatoryFormContainer__form__placePhone__label}
                    htmlFor="placePhone">شماره داروخانه</label>
                    <input onChange={props.formik.handleChange}
                    className={invalidInput(props.formik, "placePhone" ,styles.RegisterPharmacyMandatoryFormContainer__form__placePhone__input)}
                    name="placePhone" value={props.formik.values.placePhone}/>
                    {invalidError(props.formik, "placePhone")? 
                    <p className={styles.inputError__message}>{props.formik.errors.placePhone}</p>
                    : null
                    }

                </div>
            <button className={styles.RegisterPharmacyMandatoryFormContainer__form__button} onClick={props.nextStep}
            disabled={!isValid(props.formik.errors)}>مرحله بعد</button>
            </form>
            </div>
    );
}

export default Mandatory;