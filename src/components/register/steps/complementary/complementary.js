import React from 'react';
import shortid from 'shortid';
import Card from '../../../aboutUs/header/aboutUs-header-card';
import ProgressBar from '../../../base/progress-bar/progress-bar';
import './complementary.scss';

const invalidInput = (error, _class) => {
    const result = error
                   ? `${_class}  inputError`
                   : _class
    return(result);
}
const isValid = (errors) => {
    return errors.fullAddress ? false :
              true;
}

const Complementary = (props) => {
    return(
        <div className="RegisterPharmacyComplementaryFormContainer">
        <div className="RegisterPharmacyComplementaryFormContainer__cards">
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

        <form className="RegisterPharmacyComplementaryFormContainer__form">
            <div className="RegisterPharmacyComplementaryFormContainer__form__head">
                <h3 className="RegisterPharmacyComplementaryFormContainer__form__title">عضویت به عنوان داروخانه</h3>
                <div className="RegisterPharmacyComplementaryFormContainer__form__progressBar">
                    <ProgressBar
                    value={76}/>
                </div>
            </div>
            <div className="RegisterPharmacyComplementaryFormContainer__form__city">
                <label className="RegisterPharmacyComplementaryFormContainer__form__city__label"
                htmlFor="city">شهر</label>
                <select  onChange={props.formik.handleChange}
                className="RegisterPharmacyComplementaryFormContainer__form__city__input" name="city"
                value={props.formik.values.city}>
                    <option value="Tehran">تهران</option>
                    <option value="Alborz">البرز</option>
                </select>
            </div>
            <div className="RegisterPharmacyComplementaryFormContainer__form__district">
                <label className="RegisterPharmacyComplementaryFormContainer__form__district__label"
                htmlFor="district">منطقه</label>
                <select  onChange={props.formik.handleChange}
                className="RegisterPharmacyComplementaryFormContainer__form__district__input" name="district"
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
            <div className="RegisterPharmacyComplementaryFormContainer__form__address">
                <label className="RegisterPharmacyComplementaryFormContainer__form__address__label"
                htmlFor="fullAddress">آدرس دقیق</label>
                <input onChange={props.formik.handleChange}
                className={invalidInput(props.formik.errors.fullAddress, "RegisterPharmacyComplementaryFormContainer__form__address__input")}
                name="fullAddress"
                value={props.formik.values.fullAddress}/>
                <p className="inputError__message">{props.formik.errors.fullAddress}</p>
            </div>
                <p className="RegisterPharmacyComplementaryFormContainer__form__workingHour__label">ساعات کاری</p>
            <div className="RegisterPharmacyComplementaryFormContainer__form__workingHour"
            >
                <div className="RegisterPharmacyComplementaryFormContainer__form__workingHour__box">
                    <label htmlFor="nonBoarding">روزانه</label>
                    <input type='radio' 
                    className="RegisterPharmacyComplementaryFormContainer__form__workingHour__input"
                    name="isBoarding" value={props.formik.values.isBoarding} id="nonBoarding" onChange={e => props.formik.setFieldValue('isBoarding', false)}/>
                </div>

                <div className="RegisterPharmacyComplementaryFormContainer__form__workingHour__box"
                 >
                    <label htmlFor="boarding">شبانه روزی</label>
                    <input type='radio'
                    className="RegisterPharmacyComplementaryFormContainer__form__workingHour__input"
                    name="isBoarding" value={props.formik.values.isBoarding} id="boarding"
                    onChange={e => props.formik.setFieldValue('isBoarding', true)}/>
                </div>
            </div>

            {!props.formik.values.isBoarding ?
            <div>
            <label className="RegisterPharmacyComplementaryFormContainer__form__workingHourDuration__label"
            htmlFor="workingHourDuration">ساعات کاری</label>
            <div className="RegisterPharmacyComplementaryFormContainer__form__workingHourDuration">
                <div>
                    <input onChange={props.formik.handleChange}
                    className={(props.formik.errors.openingHour ,"RegisterPharmacyComplementaryFormContainer__form__workingHourDuration__input")}
                    placeholder="از"
                    name="openingHour"
                    value={props.formik.values.openingHour}/>
                    <p className="inputError__message">{props.formik.errors.openingHour}</p>
                </div>
                <div>
                    <input onChange={props.formik.handleChange}
                    className={(props.formik.errors.closingHour ,"RegisterPharmacyComplementaryFormContainer__form__workingHourDuration__input")}
                    placeholder="تا"
                    name="closingHour"
                    value={props.formik.values.closingHour}/>
                    <p className="inputError__message">{props.formik.errors.closingHour}</p>
                </div>
            </div></div> :null}
        <button className="RegisterPharmacyComplementaryFormContainer__form__button"
        disabled={!isValid(props.formik.errors)} onClick={props.nextStep}>مرحله بعد</button>
        </form>
        </div>
    );
}
export default Complementary;