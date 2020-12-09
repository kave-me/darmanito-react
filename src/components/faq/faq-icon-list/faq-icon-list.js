import React, {useState} from 'react';
import shortid from 'shortid';
import FaqIcon from './faq-icon';
import marketIcon from '../../../asset/image/market.svg';
import pharmacyIcon from '../../../asset/image/pharmacy.svg';
import scheduleIcon from '../../../asset/image/schedule.svg';
import stethoscopeIcon from '../../../asset/image/stethoscope.svg';
import './faq-icon-list.scss';


const FaqIconList = () => {
    const [iconsStat, setIconsState] = useState(
        [{
            img: marketIcon,
            text: "فروشگاه",
            isActive: true,
            id: 1
        }, {
            img: pharmacyIcon,
            text: "داروخانه",
            isActive: false,
            id: 2
        }, {
            img: scheduleIcon,
            text: "نوبت دهی آنلاین",
            isActive: false,
            id: 3
        }, {
            img: stethoscopeIcon,
            text: "ویزیت آنلاین",
            isActive: false,
            id: 4
        }]);

    const activateIcon = (id) => {
        const newStat = [];
        for (const icon of iconsStat) {
            if (icon.id === id) {
                icon.isActive = true;
                newStat.push(icon)
            } else {
                icon.isActive = false;
                newStat.push(icon)
            }
        }
        setIconsState(newStat);
    }
    return(
        <div className="FaqIconListContainer">
           { iconsStat.map((item) => {
                return(<FaqIcon
                    img={item.img}
                    text={item.text}
                    active={item.isActive}
                    key={shortid.generate()}
                    click={()=>activateIcon(item.id)}
                />);
            })}
        </div>
    );
}

export default FaqIconList;