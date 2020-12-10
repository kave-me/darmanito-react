import React from 'react';
import style from './card.module.scss';

const Card = (props) => {
    return (
        <div className={style.grid_item}>
            <div className={[style.grid_item_detail, style.speci3].join(' ')}>
                <div className={style.pic}>
                    <img src={props.pic} alt="img" />
                </div>
                <p className={style.desc}>{ props.name}</p>
            </div>
        </div>
    );
}

export default Card;