import React, {useState} from 'react';
import mobileDemoPic from '../../../asset/image/mainPage-download.png';
import SibAppLogoButton from '../../base/button/sibApp';
import BazarLogoButton from '../../base/button/bazar';
import AndroidLogoButton from '../../base/button/android';
import MainDownloadModal from '../../base/modal/download-modal';
import './main-download.scss';
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
                   .typeError("شماره وارد شده صحیح نیست")})});
    return(
        <div>
        <div className="mainDownloadContainer">
            <div className="mainDownload">
                <div className="mainDownload__info">
                    <h2 className="mainDownload__info__title">دانلود اپلیکیشن درمانیتو</h2>
                    <p className="mainDownload__info__description">برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید.</p>
                    <div className="mainDownload__info__input">
                            <button className="mainDownload__info__input__button" onClick={() => formik.errors.phoneNumber? null: setViewModal(true)}>بفرست</button>
                            <input type="text" placeholder="شماره همراه را وارد کنید 09127654321" className="mainDownload__info__input__input"
                            name="phoneNumber" onChange={formik.handleChange} value={formik.values.phoneNumber}/>
                    </div>
                            <p className="inputError__message">{formik.errors.phoneNumber}</p>
                    <div className="mainDownload__icons">
                        <SibAppLogoButton
                        backgroundColor="#2361B5"/>
                        <BazarLogoButton
                        backgroundColor="#2361B5"/>
                        <AndroidLogoButton
                        backgroundColor="#2361B5"/>
                    </div>
                </div>
                <img className="mainDownload__img" src={mobileDemoPic} alt="mobile application"/>
            </div>
        </div>
        {viewModal 
            ? <MainDownloadModal click={() => setViewModal(!viewModal)}/>
            : null}
        </div>
    );
}

export default MainDownload;