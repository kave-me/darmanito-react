import React from 'react';
import mapLocationMarker from '../asset/image/map-marker-alt-solid.svg';
import userRegular from '../asset/image/user-regular.svg';

const AboutUsHeaderCard = (props) => {
    return(
        <div className="AboutUsHeaderCard">
            <img className="AboutUsHeaderCard__profile" src={userRegular} alt="user"/>
            <div className="AboutUsHeaderCard__info">
                <h2 className="AboutUsHeaderCard__name">{props.name}</h2>
                <div className="AboutUsHeaderCard__address">
                <img className="AboutUsHeaderCard__address__icon" src={mapLocationMarker} alt="map marker"/>
                <p className="AboutUsHeaderCard__address__text p2">{props.address}</p>
                </div>
            </div>
            {props.isBoarding
             ? <p className="AboutUsHeaderCard__boarding">شبانه روزی</p>
             : null}
        </div>
    );
}

export default AboutUsHeaderCard;