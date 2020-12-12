import React from "react";
import style from './faq.module.scss';
import ear from '../asset/image/pharmacy.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '../components/faq/card';
import FaqQuestionList from '../components/faq/faq-question-list';
import TextBanner from '../components/base/text-banner';
import Footer from '../components/base/footer';
import Support from '../components/base/support';


const FAQ = (props) =>{
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return(
        <div>
        <TextBanner text="سوالات متداول"/>
        <div className={style.FAQ}>

            
            <div className={style.title} style={{marginTop:"2rem"}}>سوال شما درباره کدوم سرویس هست ؟</div>
        <div className="section">

        <div style={{display:"block", width:"95%", overflow:"none"}}>
                <Slider {...settings} className={style.padding}>
                <Card pic={ear} name="ویزیت آنلاین" />
                <Card pic={ear} name="فروشگاه آنلاین" />
                <Card pic={ear} name="داروخانه آنلاین" />
                <Card pic={ear} name="ویزیت آنلاین" />
                <Card pic={ear} name="ویزیت آنلاین" />
                </Slider>
        </div>


        <FaqQuestionList/>
        </div>
        </div>
        <Support/>
        <Footer/>
    </div>
    )
}

export default FAQ;