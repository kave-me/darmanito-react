import React from 'react';
const RegisterPharmacy = (props) => {


    const borderControl = (error, class_name) => error? class_name+" borderError" : class_name

    return(
        <div className="RegisterPharmacyFirstFormContainer">
            <form className="RegisterPharmacyFirstFormContainer__form"
            onSubmit={props.formik.onSubmit}>

                <div className="RegisterPharmacyFirstFormContainer__form__fullName">
                    <label className="RegisterPharmacyFirstFormContainer__form__fullName__label"
                    htmlFor="fullName">نام و نام خانوادگی</label>
                    <input className={borderControl(props.formik.errors.fullName,"RegisterPharmacyFirstFormContainer__form__fullName__input")}
                    value={props.formik.values.fullName} onChange={props.formik.handleChange} type="text" name="fullName"/>
                    <p className="RegisterPharmacyFirstFormContainer__form__error">{props.formik.errors.fullName}</p>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__medicId">
                    <label className="RegisterPharmacyFirstFormContainer__form__medicId__label"
                    htmlFor="medicId">شماره نظام پزشکی</label>
                    <input className={borderControl(props.formik.errors.medicId,"RegisterPharmacyFirstFormContainer__form__medicId__input")}
                    value={props.formik.values.medicId} onChange={props.formik.handleChange} type="number" name="medicId"/>
                    <p className="RegisterPharmacyFirstFormContainer__form__error">{props.formik.errors.medicId}</p>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__placeName">
                    <label className="RegisterPharmacyFirstFormContainer__form__placeName__label"
                    htmlFor="placeName">نام داروخانه</label>
                    <input className={borderControl(props.formik.errors.placeName,"RegisterPharmacyFirstFormContainer__form__placeName__input")}
                    value={props.formik.values.placeName} onChange={props.formik.handleChange} type="text" name="placeName"/>
                    <p className="RegisterPharmacyFirstFormContainer__form__error">{props.formik.errors.placeName}</p>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__placePhone">
                    <label className="RegisterPharmacyFirstFormContainer__form__placePhone__label"
                    htmlFor="placePhone">شماره داروخانه</label>
                    <input className={borderControl(props.formik.errors.placePhone, "RegisterPharmacyFirstFormContainer__form__placePhone__input")}
                    value={props.formik.values.placePhone} onChange={props.formik.handleChange} type="number" name="placePhone"/>
                    <p className="RegisterPharmacyFirstFormContainer__form__error">{props.formik.errors.placePhone}</p>
                </div>
                
                <div className="RegisterPharmacyFirstFormContainer__form__city">
                    <label className="RegisterPharmacyFirstFormContainer__form__city__label"
                    htmlFor="city">شهر</label>
                    <input className={borderControl(props.formik.errors.city, "RegisterPharmacyFirstFormContainer__form__city__input")}
                    value={props.formik.values.city} onChange={props.formik.handleChange} type="text" name="city"/>
                    <p className="RegisterPharmacyFirstFormContainer__form__error">{props.formik.errors.city}</p>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__district">
                    <label className="RegisterPharmacyFirstFormContainer__form__district__label"
                    htmlFor="district">منطقه</label>
                    <input className={borderControl(props.formik.errors.district, "RegisterPharmacyFirstFormContainer__form__district__input")}
                    value={props.formik.values.district} onChange={props.formik.handleChange} type="text" name="district"/>
                    <p className="RegisterPharmacyFirstFormContainer__form__error">{props.formik.errors.district}</p>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__fullAddress">
                    <label className="RegisterPharmacyFirstFormContainer__form__fullAddress__label"
                    htmlFor="fullAddress">آدرس دقیق</label>
                    <input className={borderControl(props.formik.errors.fullAddress, "RegisterPharmacyFirstFormContainer__form__fullAddress__input")}
                    value={props.formik.values.fullAddress} onChange={props.formik.handleChange} type="text" name="fullAddress"/>
                    <p className="RegisterPharmacyFirstFormContainer__form__error">{props.formik.errors.fullAddress}</p>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__timeSection">
                    <div className="RegisterPharmacyFirstFormContainer__form__boarding">
                        <p className="RegisterPharmacyFirstFormContainer__form__boarding__label">ساعات کاری</p>
                        <div className="RegisterPharmacyFirstFormContainer__form__boarding__select">
                            <div className="RegisterPharmacyFirstFormContainer__form__boarding__true">
                                <label className="RegisterPharmacyFirstFormContainer__form__boarding__true__label"
                                htmlFor="isBoarding">شبانه روزی</label>
                                <input className="RegisterPharmacyFirstFormContainer__form__boarding__true__input"
                                value={true} onChange={props.formik.handleChange} type="radio" name="isBoarding"/>
                            </div>
                            <div className="RegisterPharmacyFirstFormContainer__form__boarding__false RegisterPharmacyFirstFormContainer__form__boarding__false-active">
                                <label className="RegisterPharmacyFirstFormContainer__form__boarding__false__label"
                                htmlFor="isBoarding">روزانه</label>
                                <input className="RegisterPharmacyFirstFormContainer__form__boarding__false__input"
                                value={false} onChange={props.formik.handleChange} checked="checked" type="radio" name="isBoarding"/>
                            </div>
                        </div>
                    <p className="RegisterPharmacyFirstFormContainer__form__error">{props.formik.errors.isBoarding}</p>
                    </div>

                    <div className="RegisterPharmacyFirstFormContainer__form__workTimeRange">
                        <label className="RegisterPharmacyFirstFormContainer__form__workTimeRange__label"
                        htmlFor="workTimeRange">ساعات کاری</label>
                        <div>
                            <input className="RegisterPharmacyFirstFormContainer__form__workTimeRange__fromInput"
                            type="text" placeholder="از" name="workTimeRangeFrom"/>
                            <input className="RegisterPharmacyFirstFormContainer__form__workTimeRange__toInput"
                            type="text" placeholder="تا" name="workTimeRangeTo"/>
                        </div>
                    </div>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__button">
                    <div className="RegisterPharmacyFirstFormContainer__form__uploadButton">
                        <input type="file" className="RegisterPharmacyFirstFormContainer__form__uploadButton__button"
                        accept="image/*" name='photo' value={props.formik.photo}  onChange={event => props.formik.setFieldValue('photo', URL.createObjectURL(event.currentTarget.files[0]))}/>
                    </div>
                    <div className="RegisterPharmacyFirstFormContainer__form__nextButton">
                        <button className="RegisterPharmacyFirstFormContainer__form__nextButton__button" onClick={props.nextStep} 
                        disabled={props.formik.isValid? true: false}>مرحله بعد</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default RegisterPharmacy;