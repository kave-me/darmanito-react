import React from 'react';
import PharmacyPicture from '../../../../asset/image/pharmacy.svg';
import styles from './register-modal.module.scss';

const MainDownloadModal = (props) => {
    return(
        <div className={styles.mainDownloadModal} onClick={props.click}>
            <div className={styles.mainDownloadModal__card}>
                <img src={PharmacyPicture} alt="pharmacy" className={styles.mainDownloadModal__card__img}/>
                <h2 className={styles.mainDownloadModal__card__title}>پیام شما با موفقیت ارسال شد</h2>
                <p className={styles.mainDownloadModal__card__desc}>برای اعلام توضیحات با شما تماس خواهیم گرفت.</p>
                <button className={styles.mainDownloadModal__card__button}>بستن</button>
            </div>
        </div>
    );
}

export default MainDownloadModal;