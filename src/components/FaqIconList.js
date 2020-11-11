import React, {useState} from 'react';
import FaqIcon from '../components/FaqIcon';
import markerIcon from '../asset/image/market.svg';
import pharmacyIcon from '../asset/image/pharmacy.svg';
import scheduleIcon from '../asset/image/schedule.svg';
import stethoscopeIcon from '../asset/image/stethoscope.svg';


const FaqIconList = () => {
    const [iconsStat, setIconsState] = useState(
        [{
            img: markerIcon,
            text: "فروشگاه",
            isActive: true
        }, {
            img: pharmacyIcon,
            text: "داروخانه",
            isActive: false
        }, {
            img: scheduleIcon,
            text: "نوبت دهی آنلاین",
            isActive: false
        }, {
            img: stethoscopeIcon,
            text: "ویزیت آنلاین",
            isActive: false
        }]);

    const switchActiveIcon = (index) => {
        for (const [i, v] of iconsStat.entries()){
            if (i === index) {
                iconsStat.isActive=true;
            }
            iconsStat.isActive=false;
        }
        setIconsState(iconsStat);
    }
    return(
        <div className="FaqIconListContainer">
           { iconsStat.map((item, index) => {
                return(<FaqIcon
                    img={item.img}
                    text={item.text}
                    active={item.isActive}
                    key={index}
                    onClick={switchActiveIcon}
                />);
            })}
        </div>
    );
}

export default FaqIconList;