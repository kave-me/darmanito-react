import React from 'react';
import PharmacyPicture from '../../../../asset/image/pharmacy.svg';
import './download-modal.scss';
const MainDownloadModal = (props) => {
    return(
        <div className="mainDownloadModal" onClick={props.click}>
            <div className="mainDownloadModal__card">
                <img src={PharmacyPicture} alt="pharmacy" className="mainDownloadModal__card__img"/>
                <h2 className="mainDownloadModal__card__title">ارسال موفق</h2>
                <p className="mainDownloadModal__card__desc">لینک دانلود برای شما ارسال شد.</p>
                <button className="mainDownloadModal__card__button">برگشت</button>
            </div>
        </div>
    );
}

export default MainDownloadModal;