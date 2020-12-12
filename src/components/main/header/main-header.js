import React, {useState} from 'react';
import mainHeader from '../../../asset/image/mainHeader.svg';
import MainDownloadModal from '../../base/modal/download-modal';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import styles from './main-header.module.scss';

const MainHeader = () => {
    const [viewModal, setViewModal] = useState(false);
    return(
        <div className={cx(styles.mainHeader, styles.section)}>
            <div className={styles.mainHeader__textAndButtons}>
                <h1 className={styles.mainHeader__textAndButtons__title}>اپلیکیشن درمانیتو</h1>
                <p className={styles.mainHeader__textAndButtons__description}>درمانیتو سامانه هوشمند درمان و سلامت</p>
                <div className={styles.mainHeader__textAndButtons__buttons}>
                    <button onClick= {() => setViewModal(true)} className={styles.mainHeader__textAndButtons__buttons__download}>دانلود درمانیتو</button>
                    <button className={styles.mainHeader__textAndButtons__buttons__register}>
                        <Link to='registerPharmacy'>عضویت داروخانه ها </Link> </button>
                </div>
            </div>
                <img className={styles.mainHeader__image} src={mainHeader} alt="header"/>
                {viewModal
                 ? <MainDownloadModal click={() => setViewModal(!viewModal)}/>
                 : null}
        </div>
    );
}

export default MainHeader;