import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Header from '../components/Header';

const containerStyle = {
  width: '100vw',
  height: '95vh',
  position: 'relative',
  top: 25
};

const center = {
  lat: -21.9865,
  lng: -51.6611
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDeHb17So0QupSGO_d6b8X-OyvJ32UQehs"
  })

  return isLoaded ? (
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
      </GoogleMap>
  ) : <></>
}

export default Map