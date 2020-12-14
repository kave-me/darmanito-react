import React, {useState} from 'react';
import Card from '../../../aboutUs/header/aboutUs-header-card';
import shortid from 'shortid';
import RegisterModal from '../../../base/modal/register-modal';
import styles from './confirmation.module.scss';

const Confirmation = (props) => {
    const [viewModal, setViewModal] = useState(false);
    return(
        <div className={styles.RegisterPharmacyConfirmation}>
            <div className={styles.RegisterPharmacyConfirmation__cards}>
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
                name= {props.formik.values.place.Name}
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
            <div className={styles.RegisterPharmacyConfirmation__preview}>
                    <div className={styles.RegisterPharmacyConfirmation__preview__placeName}>
                        <p className={styles.RegisterPharmacyConfirmation__preview__placeName__label}>نام داروخانه</p>
                        <p className={styles.RegisterPharmacyConfirmation__preview__placeName__value}>{props.formik.values.placeName}</p>
                    </div>

                    <div className={styles.RegisterPharmacyConfirmation__preview__placePhone}>
                        <p className={styles.RegisterPharmacyConfirmation__preview__placePhone__label}>شماره داروخانه</p>
                        <p className={styles.RegisterPharmacyConfirmation__preview__placePhone__value}>{props.formik.values.placePhone}</p>
                    </div>
                    <div className={styles.RegisterPharmacyConfirmation__preview__city}>
                        <p className={styles.RegisterPharmacyConfirmation__preview__city__label}>شهر</p>
                        <p className={styles.RegisterPharmacyConfirmation__preview__city__value}>{props.formik.values.city}</p>
                    </div>
                    <div className={styles.RegisterPharmacyConfirmation__preview__district}>
                        <p className={styles.RegisterPharmacyConfirmation__preview__district__label}>منطقه</p>
                        <p className={styles.RegisterPharmacyConfirmation__preview__district__value}>{props.formik.values.district}</p>
                    </div>
                    <div className={styles.RegisterPharmacyConfirmation__preview__workingHours}>
                        <p className={styles.RegisterPharmacyConfirmation__preview__workingHours__label}>ساعت کاری</p>
                        <p className={styles.RegisterPharmacyConfirmation__preview__workingHours__value}>{props.formik.values.district? "شبانه روزی" : "روزانه"}</p>
                    </div>
                    <div className={styles.RegisterPharmacyConfirmation__preview__fullAddress}>
                        <p className={styles.RegisterPharmacyConfirmation__preview__fullAddress__label}>آدرس دقیق</p>
                        <p className={styles.RegisterPharmacyConfirmation__preview__fullAddress__value}>{props.formik.values.fullAddress}</p>
                    </div>

                <div className={styles.RegisterPharmacyConfirmation__preview__line}></div>
                    <div className={styles.RegisterPharmacyConfirmation__preview__fullName}>
                        <p className={styles.RegisterPharmacyConfirmation__preview__fullName__label}>نام و نام خانوادگی موسس</p>
                        <p className={styles.RegisterPharmacyConfirmation__preview__fullName__value}>{props.formik.values.fullName}</p>
                    </div>
                    <div className={styles.RegisterPharmacyConfirmation__preview__medicId}>
                        <p className={styles.RegisterPharmacyConfirmation__preview__medicId__label}>شماره نظام پزشکی</p>
                        <p className={styles.RegisterPharmacyConfirmation__preview__medicId__value}>{props.formik.values.medicId}</p>
                    </div>

                <form className={styles.RegisterPharmacyConfirmation__preview__form}
                 onSubmit={props.formik.handleSubmit}>
                <div className={styles.RegisterPharmacyConfirmation__preview__form__buttons}>
                    <button className={styles.RegisterPharmacyConfirmation__preview__form__buttons__edit}
                    type="button" onClick={props.stepZero}>ویراش اطلاعات</button>
                    <button className={styles.RegisterPharmacyConfirmation__preview__form__buttons__submit}
                    type="button" onClick={() => setViewModal(true)} >تکمیل ثبت نام</button>
                </div>
                </form>
            </div>
            {viewModal
             ? <RegisterModal click={() => setViewModal(!viewModal)}/>
             : null}
        
        </div>


    );
}

export default Confirmation;