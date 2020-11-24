import React from 'react';
const RegisterPharmacy = (props) => {





    return(
        <div className="RegisterPharmacyFirstFormContainer">

            <form className="RegisterPharmacyFirstFormContainer__form"
            onSubmit={props.formik.onSubmit}>

                <div className="RegisterPharmacyFirstFormContainer__form__fullName">
                    <label className="RegisterPharmacyFirstFormContainer__form__fullName__label"
                    htmlFor="fullName">نام و نام خانوادگی</label>
                    <input className="RegisterPharmacyFirstFormContainer__form__fullName__input"
                    value={props.formik.values.fullName} onChange={props.formik.handleChange} type="text" name="fullName"/>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__medicId">
                    <label className="RegisterPharmacyFirstFormContainer__form__medicId__label"
                    htmlFor="medicId">شماره نظام پزشکی</label>
                    <input className="RegisterPharmacyFirstFormContainer__form__medicId__input"
                    value={props.formik.values.medicId} onChange={props.formik.handleChange} type="number" name="medicId"/>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__placeName">
                    <label className="RegisterPharmacyFirstFormContainer__form__placeName__label"
                    htmlFor="placeName">نام داروخانه</label>
                    <input className="RegisterPharmacyFirstFormContainer__form__placeName__input"
                    value={props.formik.values.placeName} onChange={props.formik.handleChange} type="text" name="placeName"/>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__placePhone">
                    <label className="RegisterPharmacyFirstFormContainer__form__placePhone__label"
                    htmlFor="placePhone">شماره داروخانه</label>
                    <input className="RegisterPharmacyFirstFormContainer__form__placePhone__input"
                    value={props.formik.values.placePhone} onChange={props.formik.handleChange} type="number" name="placePhone"/>
                </div>
                
                <div className="RegisterPharmacyFirstFormContainer__form__city">
                    <label className="RegisterPharmacyFirstFormContainer__form__city__label"
                    htmlFor="city">شهر</label>
                    <input className="RegisterPharmacyFirstFormContainer__form__city__input"
                    value={props.formik.values.city} onChange={props.formik.handleChange} type="text" name="city"/>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__district">
                    <label className="RegisterPharmacyFirstFormContainer__form__district__label"
                    htmlFor="district">منطقه</label>
                    <input className="RegisterPharmacyFirstFormContainer__form__district__input"
                    value={props.formik.values.district} onChange={props.formik.handleChange} type="text" name="district"/>
                </div>

                <div className="RegisterPharmacyFirstFormContainer__form__fullAddress">
                    <label className="RegisterPharmacyFirstFormContainer__form__fullAddress__label"
                    htmlFor="fullAddress">آدرس دقیق</label>
                    <input className="RegisterPharmacyFirstFormContainer__form__fullAddress__input"
                    value={props.formik.values.fullAddress} onChange={props.formik.handleChange} type="text" name="fullAddress"/>
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
                                value={false} onChange={props.formik.handleChange} type="radio" name="isBoarding"/>
                            </div>
                        </div>
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
                    <div className="RegisterPharmacyFirstFormContainer__form__nextButton">
                        <button className="RegisterPharmacyFirstFormContainer__form__nextButton__button" onClick={props.nextStep}>مرحله بعد</button>
                    </div>
                    <div className="RegisterPharmacyFirstFormContainer__form__uploadButton">
                        <p className="RegisterPharmacyFirstFormContainer__form__uploadButton__fileName">drugstore.jpg</p>
                        <label htmlFor="uploadPhoto">آپلود عکس داروخانه</label>
                        <input type="file" className="RegisterPharmacyFirstFormContainer__form__uploadButton__button"
                        accept="image/*" name='photo' value={props.formik.photo}  onChange={props.formik.handleChange}/>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default RegisterPharmacy;