import React, {useState} from 'react';
import TextBanner from '../components/base/text-banner';
import Support from '../components/base/support';
import Footer from '../components/base/footer';
import SimpleMap from '../components/contactUs/map';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import RegisterModal from '../components/base/modal/contactUs-modal';
import styles from './contactUs.module.scss';
import cx from 'classnames';

const emailRegex = RegExp(/^\S{3,}@\S{2,}\.\S{2,}$/);
const phoneRegex = RegExp(/^\d{5,10}$/);

const ContactUs = () => {
    const formik = useFormik(
        {
            initialValues: {
                fullName: "",
                emailAndPhone: "",
                message: ""
            },
            validationSchema:  Yup.object({
                fullName:
                    Yup.string()
                    .required("فیلد اجباری"),
                emailAndPhone:
                    Yup.string()
                    .matches(`${emailRegex.source}|${phoneRegex.source}`,
                        "فرمت صحیح نیست")
                    .required("فیلد اجباری"),
                message:
                    Yup.string()
                    .required("فیلد اجباری"),
            })
        }
    );
    const [viewModal, setViewModal] = useState(false);
    return (
        <div className={styles.container}>
                        {viewModal
             ? <RegisterModal click={() => setViewModal(!viewModal)}/>
             : null}
            <TextBanner text="تماس با ما"/>
            <div className={cx(styles.contactUsFormAndMap, styles.section)}>
                <div className={styles.messageForm}>
                    <form className={styles.messageForm__form}>
                        <label className={styles.messageForm__form__label} htmlFor="fullName">نام و نام خانوادگی</label>
                        <input className={styles.messageForm__form__input} id="fullName" name="fullName" type="text" placeholder="نام و نام خانوادگی"
                        onChange={formik.handleChange}/>
                        <p className={styles.inputError__message}>{formik.errors.fullName}</p>

                        <label className={styles.messageForm__form__label} htmlFor="emailAndPhone">ایمیل یا شماره همراه</label>
                        <input className={cx(styles.messageForm__form__input, styles.ltr)} id="emailAndPhone" type="text" placeholder="ایمیل یا شماره همراه"
                        onChange={formik.handleChange} name="emailAndPhone"/>
                        <p className={styles.inputError__message}>{formik.errors.emailAndPhone}</p>


                        <label className={styles.messageForm__form__label} htmlFor="message">پیام شما</label>
                        <textarea className={styles.messageForm__form__textarea} name="message" id="message" cols="30" rows="9" placeholder="متن پیام"
                        onChange={formik.handleChange}></textarea>
                        <p className={styles.inputError__message}>{formik.errors.message}</p>

                        <button type="button" className={styles.messageForm__form__button} onClick={() => formik.isValid &&formik.values.emailAndPhone!== formik.initialValues.emailAndPhone ?setViewModal(true):null}>ارسال پیام</button>
                    </form>
                </div>
                <div className={styles.contactUS__map}> 
                <SimpleMap>
                    <div className={styles.contactUs__map__cover}>
                        <div className={styles.contactUs__map__cover__emailAndPhoneNumberContainer}>
                            <div className={styles.contactUs__map__cover__email}>
                                <p className={styles.contactUs__map__cover__email__label}>ایمیل</p>
                                <p className={styles.contactUs__map__cover__email__value}>info@nahiratech.com</p>
                            </div>
                            <div className={styles.contactUs__map__cover__phoneNumber}>
                                <p className={styles.contactUs__map__cover__phoneNumber__label}>شماره ثابت</p>
                                <p className={styles.contactUs__map__cover__phoneNumber__value}>021-44219671</p>
                            </div>
                        </div>
                        <div className={styles.contactUs__map__cover__address}>
                            <p className={styles.contactUs__map__cover__address__label}>آدرس</p>
                            <p className={styles.contactUs__map__cover__address__value}>تهران، طرشت، خیابان شهید چوب تراش، خیابان شهید حسین مردی، بن بست پنجم، پلاک 15، واحد 1</p>
                        </div>

                    </div>
                </SimpleMap>
                </div>
            </div>
            <Support/>
            <Footer/>

        </div>
    );
}

export default ContactUs