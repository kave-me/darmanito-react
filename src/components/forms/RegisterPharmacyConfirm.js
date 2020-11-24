import React from 'react';
import Card from '../AboutUsHeaderCard';
import shortid from 'shortid';

const RegisterPharmacyConfirm = (props) => {
    return(
        <div className="RegisterPharmacyThirdFormContainer">
            <div className="RegisterPharmacyThirdFormContainer__cards">
                <Card
                name= {props.formik.values.fullName}
                address= {props.formik.values.fullAddress}
                img= {props.formik.values.photo}
                isBoarding= {props.formik.values.isBoarding}
                id= {shortid.generate()}/>
                <Card
                name= {props.formik.values.fullName}
                address= {props.formik.values.fullAddress}
                img= {props.formik.values.photo}
                isBoarding= {props.formik.values.isBoarding}
                id= {shortid.generate()}/>
                <Card
                name= {props.formik.values.fullName}
                address= {props.formik.values.fullAddress}
                img= {props.formik.values.photo}
                isBoarding= {props.formik.values.isBoarding}
                id= {shortid.generate()}/>
            </div>
            <form>
            <div className="RegisterPharmacyThirdFormContainer__preview">
                <div className="RegisterPharmacyThirdFormContainer__preview-row1">
                    <div className="RegisterPharmacyThirdFormContainer__preview__placeName">
                        <p className="RegisterPharmacyThirdFormContainer__preview__placeName__label">نام داروخانه</p>
                        <p className="RegisterPharmacyThirdFormContainer__preview__placeName__value">{props.formik.values.placeName}</p>
                    </div>

                    <div className="RegisterPharmacyThirdFormContainer__preview__placePhone">
                        <p className="RegisterPharmacyThirdFormContainer__preview__placePhone__label">شماره داروخانه</p>
                        <p className="RegisterPharmacyThirdFormContainer__preview__placePhone__value">{props.formik.values.placePhone}</p>
                    </div>
                    <div className="RegisterPharmacyThirdFormContainer__preview__city">
                        <p className="RegisterPharmacyThirdFormContainer__preview__city__label">شهر</p>
                        <p className="RegisterPharmacyThirdFormContainer__preview__city__value">{props.formik.values.city}</p>
                    </div>
                </div>
                <div className="RegisterPharmacyThirdFormContainer__preview-row2">
                    <div className="RegisterPharmacyThirdFormContainer__preview__district">
                        <p className="RegisterPharmacyThirdFormContainer__preview__district__label">منطقه</p>
                        <p className="RegisterPharmacyThirdFormContainer__preview__district__value">{props.formik.values.district}</p>
                    </div>
                    <div className="RegisterPharmacyThirdFormContainer__preview__workingHours">
                        <p className="RegisterPharmacyThirdFormContainer__preview__workingHours__label">ساعت کاری</p>
                        <p className="RegisterPharmacyThirdFormContainer__preview__workingHours__value">{props.formik.values.district? "شبانه روزی" : "روزانه"}</p>
                    </div>
                </div>
                <div className="RegisterPharmacyThirdFormContainer__preview-row3">
                    <div className="RegisterPharmacyThirdFormContainer__preview__fullAddress">
                        <p className="RegisterPharmacyThirdFormContainer__preview__fullAddress__label">آدرس دقیق</p>
                        <p className="RegisterPharmacyThirdFormContainer__preview__fullAddress__value">{props.formik.values.fullAddress}</p>
                    </div>
                </div>

                <div className="RegisterPharmacyThirdFormContainer__preview-line"></div>
                <div className="RegisterPharmacyThirdFormContainer__preview-row4">
                    <div className="RegisterPharmacyThirdFormContainer__preview__fullName">
                        <p className="RegisterPharmacyThirdFormContainer__preview__fullName__label">نام و نام خانوادگی موسس</p>
                        <p className="RegisterPharmacyThirdFormContainer__preview__fullName__value">{props.formik.values.fullName}</p>
                    </div>
                    <div className="RegisterPharmacyThirdFormContainer__preview__medicId">
                        <p className="RegisterPharmacyThirdFormContainer__preview__medicId__label">شماره نظام پزشکی</p>
                        <p className="RegisterPharmacyThirdFormContainer__preview__medicId__value">{props.formik.values.medicId}</p>
                    </div>
                </div>


                <div className="RegisterPharmacyThirdFormContainer__preview__buttons">
                    <button type="submit" onSubmit={() => props.formik.onSubmit()}>Submit</button>
                    <button onClick={props.nextStep}>next</button>
                    <button onClick={props.prevStep}>prev</button>
                </div>
            </div>
        
            </form>
        </div>


    );
}

export default RegisterPharmacyConfirm;