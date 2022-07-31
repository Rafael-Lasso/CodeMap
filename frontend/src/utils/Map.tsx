import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '92vh'
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