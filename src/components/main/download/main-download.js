import React, {useState} from 'react';
import mobileDemoPic from '../../../asset/image/mainPage-download.png';
import SibAppLogoButton from '../../base/button/sibApp';
import BazarLogoButton from '../../base/button/bazar';
import AndroidLogoButton from '../../base/button/android';
import MainDownloadModal from '../../base/modal/download-modal';
import styles from './main-download.module.scss';
import {useFormik} from 'formik';
import * as Yup from 'yup';



const MainDownload = () => {
    const [viewModal, setViewModal] = useState(false);
    const formik = useFormik({
        initialValues: {
            phoneNumber: ""
        },
        validationSchema: Yup.object({
          phoneNumber: Yup.number()
                   .min(10000000, 'فرمت صحیح نیست.')
                   .typeError("فقط از اعداد استفاده کنید")})});
    return(
        <div>
        <div className={styles.mainDownloadContainer}>
            <div className={styles.mainDownload}>
                <div className={styles.mainDownload__info}>
                    <h2 className={styles.mainDownload__info__title}>دانلود اپلیکیشن درمانیتو</h2>
                    <p className={styles.mainDownload__info__description}>برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید.</p>
                    <div className={styles.mainDownload__info__input}>
                            <button className={styles.mainDownload__info__input__button} onClick={() => !formik.errors.phoneNumber && formik.values.phoneNumber !== ""? setViewModal(true): null}>بفرست</button>
                            <input type="text" placeholder="شماره همراه را وارد کنید 09127654321" className={styles.mainDownload__info__input__input}
                            name="phoneNumber" onChange={formik.handleChange} value={formik.values.phoneNumber}
                            onBlur={formik.handleBlur}/>
                    </div>
                            <p style={{ height: '2rem', color: 'red', fontSize: '14px'}}>{formik.errors.phoneNumber}</p>
                    <div className={styles.mainDownload__icons}>
                        <SibAppLogoButton
                        backgroundColor="#2361B5"/>
                        <BazarLogoButton
                        backgroundColor="#2361B5"/>
                        <AndroidLogoButton
                        backgroundColor="#2361B5"/>
                    </div>
                </div>
                <img className={styles.mainDownload__img} src={mobileDemoPic} alt="mobile application"/>
            </div>
        </div>
        {viewModal 
            ? <MainDownloadModal click={() => setViewModal(!viewModal)}/>
            : null}
        </div>
    );
}

export default MainDownload;