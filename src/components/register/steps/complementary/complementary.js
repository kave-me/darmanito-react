import React from 'react';
import shortid from 'shortid';
import Card from '../../../aboutUs/header/aboutUs-header-card';
import ProgressBar from '../../../base/progress-bar/progress-bar';
import styles from './complementary.module.scss';
import cx from 'classnames';

const invalidInput = (formik, id, _class) => {
    
    const result = formik.errors[id]
                   ? cx(_class,  styles.inputError)
                   : _class
    return(formik.initialValues[id] !== formik.values[id] ? result: _class);
}
const isValid = (errors) => {
    return errors.fullAddress ? false :
              true;
}

const Complementary = (props) => {
    return(
        <div className={styles.RegisterPharmacyComplementaryFormContainer}>
        <div className={styles.RegisterPharmacyComplementaryFormContainer__cards}>
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

        <form className={styles.RegisterPharmacyComplementaryFormContainer__form}>
            <div className={styles.RegisterPharmacyComplementaryFormContainer__form__head}>
                <h3 className={styles.RegisterPharmacyComplementaryFormContainer__form__title}>عضویت به عنوان داروخانه</h3>
                <div className={styles.RegisterPharmacyComplementaryFormContainer__form__progressBar}>
                    <ProgressBar
                    value={76}/>
                </div>
            </div>
            <div className={styles.RegisterPharmacyComplementaryFormContainer__form__city}>
                <label className={styles.RegisterPharmacyComplementaryFormContainer__form__city__label}
                htmlFor="city">شهر</label>
                <select  onChange={props.formik.handleChange}
                className={styles.RegisterPharmacyComplementaryFormContainer__form__city__input} name="city"
                value={props.formik.values.city}>
                    <option value="Tehran">تهران</option>
                    <option value="Alborz">البرز</option>
                </select>
            </div>
            <div className={styles.RegisterPharmacyComplementaryFormContainer__form__district}>
                <label className={styles.RegisterPharmacyComplementaryFormContainer__form__district__label}
                htmlFor="district">منطقه</label>
                <select  onChange={props.formik.handleChange}
                className={styles.RegisterPharmacyComplementaryFormContainer__form__district__input} name="district"
                value={props.formik.values.district}>
                    <option value="TehranD1" >منطقه یک تهران</option>
                    <option value="TehranD2">منطقه دو تهران</option>
                    <option value="TehranD3">منطقه سه تهران</option>
                    <option value="TehranD4">منطقه چهار تهران</option>
                    <option value="AlborzD1">منطقه یک البرز</option>
                    <option value="AlborzD2">منطقه دو البرز</option>
                    <option value="AlborzD3">منطقه سه البرز</option>
                    <option value="AlborzD4">منطقه چهار البرز</option>
                </select>
            </div>
            <div className={styles.RegisterPharmacyComplementaryFormContainer__form__address}>
                <label className={styles.RegisterPharmacyComplementaryFormContainer__form__address__label}
                htmlFor="fullAddress">آدرس دقیق</label>
                <input onChange={props.formik.handleChange}
                className={invalidInput(props.formik, "fullAddress", styles.RegisterPharmacyComplementaryFormContainer__form__address__input)}
                name="fullAddress"
                value={props.formik.values.fullAddress}/>
                <p className={styles.inputError__message}>{props.formik.errors.fullAddress}</p>
            </div>
                <p className={styles.RegisterPharmacyComplementaryFormContainer__form__workingHour__label}>ساعات کاری</p>
            <div className={styles.RegisterPharmacyComplementaryFormContainer__form__workingHour}
            >
                <div className={styles.RegisterPharmacyComplementaryFormContainer__form__workingHour__box}>
                    <label htmlFor="nonBoarding">روزانه</label>
                    <input type='radio' 
                    className={styles.RegisterPharmacyComplementaryFormContainer__form__workingHour__input}
                    checked={props.formik.values.isBoarding === false}
                    name="isBoarding" value={props.formik.values.isBoarding} id="nonBoarding" onChange={e => props.formik.setFieldValue('isBoarding', false)}/>
                </div>

                <div className={styles.RegisterPharmacyComplementaryFormContainer__form__workingHour__box}
                 >
                    <label htmlFor="boarding">شبانه روزی</label>
                    <input type='radio'
                    className={styles.RegisterPharmacyComplementaryFormContainer__form__workingHour__input}
                    checked={props.formik.values.isBoarding === true}
                    name="isBoarding" value={props.formik.values.isBoarding} id="boarding"
                    onChange={e => props.formik.setFieldValue('isBoarding', true)}/>
                </div>
            </div>

            {!props.formik.values.isBoarding ?
            <div>
            <label className={styles.RegisterPharmacyComplementaryFormContainer__form__workingHourDuration__label}
            htmlFor="workingHourDuration">ساعات کاری</label>
            <div className={styles.RegisterPharmacyComplementaryFormContainer__form__workingHourDuration}>
                <div>
                    <input onChange={props.formik.handleChange}
                    className={invalidInput(props.formik, "openingHour" , styles.RegisterPharmacyComplementaryFormContainer__form__workingHourDuration__input)}
                    placeholder="از"
                    name="openingHour"
                    value={props.formik.values.openingHour}/>
                    <p className={styles.inputError__message}>{props.formik.errors.openingHour}</p>
                </div>
                <div>
                    <input onChange={props.formik.handleChange}
                    className={invalidInput(props.formik, "closingHour" , styles.RegisterPharmacyComplementaryFormContainer__form__workingHourDuration__input)}
                    placeholder="تا"
                    name="closingHour"
                    value={props.formik.values.closingHour}/>
                    <p className={styles.inputError__message}>{props.formik.errors.closingHour}</p>
                </div>
            </div></div> :null}
        <button className={styles.RegisterPharmacyComplementaryFormContainer__form__button}
        disabled={!isValid(props.formik.errors)} onClick={props.nextStep}>مرحله بعد</button>
        </form>
        </div>
    );
}
export default Complementary;