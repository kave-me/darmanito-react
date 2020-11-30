import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import icon from 'leaflet/dist/images/marker-icon.png';

// import NeshanMap from 'react-neshan-map-leaflet';

const SimpleMap = (props) => {
  let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;

  return(
    <MapContainer center={[35.701568, 51.365874]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Marker position={[35.701568, 51.365874]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    {props.children}
</MapContainer>
  );

}

export default SimpleMap;