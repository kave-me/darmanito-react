import React, {useState} from 'react';
import MainFeaturesIcon from './main-features-icon';
import shortid from 'shortid';
import pharmacyPic from '../../../asset/image/pharmacy.svg';
import marketPic from '../../../asset/image/market.svg';
import schedulePic from '../../../asset/image/schedule.svg';
import stethoscopePic from '../../../asset/image/stethoscope.svg';
import arrowDownPic from '../../../asset/image/down-arrow.svg';
import checkPic from '../../../asset/image/done-check.svg';
import './main-features.scss';



const MainFeatures = () => {
    const [features, setFeatures] = useState([
        {
            title: 'داروخانه',
            image: pharmacyPic,
            description: 'در سرویس داروخانه شما می توانید نسخه دارویی یا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید.',
            step1: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            step2: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            step3: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            isActive: true,
            id: shortid.generate(),
        },
        {
            title: 'فروشگاه',
            image: marketPic,
            description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،استفاده قرار گیرد.',
            step1: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            step2: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            step3: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            isActive: false,
            id: shortid.generate(),
        },
        {
            title: 'ویزیت آنلاین',
            image: stethoscopePic,
            description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون  فراوان جامعه و متخصصان را می طلبد',
            step1: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            step2: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            step3: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            isActive: false,
            id: shortid.generate(),
        },
        {
            title: 'نوبت دهی آنلاین',
            image: schedulePic,
            description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد',
            step1: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            step2: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            step3: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
            isActive: false,
            id: shortid.generate(),
        },
    ]);
    const switchFeatures = (id) => (
        setFeatures(features.map((item) => {
            item.id === id
            ? item.isActive=true
            : item.isActive=false;
            return(item);
        }))
    )
    return(
        <div className="mainFeaturesContainer section">
            <div className="mainFeatures">
                <h2 className="mainFeatures__title">امکانات درمانیتو</h2>
                <div className="mainFeatures__icons">
                    {features.map((item) => (
                        <MainFeaturesIcon
                        title={item.title}
                        image={item.image}
                        isActive={item.isActive}
                        click={()=>switchFeatures(item.id)}
                        key={item.id}/>
                    ))}
                </div>
                <div className="mainFeatures__info">

                    {features.filter((item)=> item.isActive === true).map((item) => {
                        return(
                            <div key={item.description}>
                                <p className="mainFeatures__info__description">
                                    {item.description}
                                </p>
                                <div className="mainFeatures__info__step1">
                                    <div>
                                        <img className="mainFeatures__info__step1__img" src={arrowDownPic} alt="arrowDown"/>
                                        <p className="mainFeatures__info__step1__title"><strong>قدم اول</strong></p>
                                    </div>
                                    <p className="mainFeatures__info__step1__description">{item.step1}</p>
                                </div>
                                <div className="mainFeatures__info__step2">
                                    <div>
                                        <img className="mainFeatures__info__step2__img" src={arrowDownPic} alt="arrowDown"/>
                                        <p className="mainFeatures__info__step2__title"><strong>قدم دوم</strong></p>
                                    </div>
                                    <p className="mainFeatures__info__step2__description">{item.step2}</p>
                                </div>
                                <div className="mainFeatures__info__step3">
                                    <div>
                                        <img className="mainFeatures__info__step3__img" src={checkPic} alt="check"/>
                                        <p className="mainFeatures__info__step3__title"><strong>قدم سوم</strong></p>
                                    </div>
                                    <p className="mainFeatures__info__step3__description">{item.step3}</p>
                                </div>
                            </div>
                        );
                    })}
                    <p className="mainFeatures__info__title"><strong></strong></p>
                </div>
            </div>
        </div>
    );
}

export default MainFeatures;