import React from 'react';
import PharmacyPicture from '../../../../asset/image/pharmacy.svg';
import styles from './download-modal.module.scss';

const MainDownloadModal = (props) => {
    return(
        <div className={styles.mainDownloadModal} onClick={props.click}>
            <div className={styles.mainDownloadModal__card}>
                <img src={PharmacyPicture} alt="pharmacy" className={styles.mainDownloadModal__card__img}/>
                <h2 className={styles.mainDownloadModal__card__title}>ارسال موفق</h2>
                <p className={styles.mainDownloadModal__card__desc}>لینک دانلود برای شما ارسال شد.</p>
                <button className={styles.mainDownloadModal__card__button}>برگشت</button>
            </div>
        </div>
    );
}

export default MainDownloadModal;