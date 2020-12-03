import React, {useState} from 'react';
import mobileDemoPic from '../asset/image/mainPage-download.png';
import SibAppLogoButton from './SibAppLogoButton';
import BazarLogoButton from './BazarLogoButton';
import AndroidLogoButton from './AndroidLogoButton';
import MainDownloadModal from './MainDownloadModal';

const MainDownload = () => {
    const [viewModal, setViewModal] = useState(false);
    return(
        <div>
        <div className="mainDownloadContainer">
            <div className="mainDownload">
                <div className="mainDownload__info">
                    <h2 className="mainDownload__info__title">دانلود اپلیکیشن درمانیتو</h2>
                    <p className="mainDownload__info__description">برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید.</p>
                    <div className="mainDownload__info__input">
                        <button className="mainDownload__info__input__button" onClick={() => setViewModal(true)}>بفرست</button>
                        <input type="text" placeholder="شماره همراه را وارد کنید 09127654321" className="mainDownload__info__input__input"/>
                    </div>
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