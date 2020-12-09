import React from 'react';
import PharmacyPicture from '../../../../asset/image/pharmacy.svg';
import './register-modal.scss';

const MainDownloadModal = (props) => {
    return(
        <div className="mainDownloadModal" onClick={props.click}>
            <div className="mainDownloadModal__card">
                <img src={PharmacyPicture} alt="pharmacy" className="mainDownloadModal__card__img"/>
                <h2 className="mainDownloadModal__card__title">پیام شما با موفقیت ارسال شد</h2>
                <p className="mainDownloadModal__card__desc">برای اعلام توضیحات با شما تماس خواهیم گرفت.</p>
                <button className="mainDownloadModal__card__button">بستن</button>
            </div>
        </div>
    );
}

export default MainDownloadModal;