import React, {useState} from 'react';
import mainHeader from '../asset/image/mainHeader.svg';
import MainDownloadModal from './MainDownloadModal';
import {Link} from 'react-router-dom';

const MainHeader = () => {
    const [viewModal, setViewModal] = useState(false);
    return(
        <div className="mainHeader section">
            <div className="mainHeader__textAndButtons">
                <h1 className="mainHeader__textAndButtons__title">اپلیکیشن درمانیتو</h1>
                <p className="mainHeader__textAndButtons__description">درمانیتو سامانه هوشمند درمان و سلامت</p>
                <div className="mainHeader__textAndButtons__buttons">
                    <button onClick= {() => setViewModal(true)} className="mainHeader__textAndButtons__buttons__download">دانلود درمانیتو</button>
                    <button className="mainHeader__textAndButtons__buttons__register">
                        <Link to='registerPharmacy'>عضویت داروخانه ها </Link> </button>
                </div>
            </div>
                <img className="mainHeader__image" src={mainHeader} alt="header"/>
                {viewModal
                 ? <MainDownloadModal click={() => setViewModal(!viewModal)}/>
                 : null}
        </div>
    );
}

export default MainHeader;