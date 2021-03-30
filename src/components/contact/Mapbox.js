import React from 'react';
//Map
import ReactMapboxGl, { Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Mapbox() {
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_mapKey,
    zoom: [10],
  });

  return (
    <>
      <Map
        // eslint-disable-next-line
        style='mapbox://styles/mapbox/streets-v9'
        center={[13.253552, 46.072764]}
        zoom={[15]}
        containerStyle={{
          height: '50vw',
          width: '100vh',
        }}
      >
        <Popup coordinates={[13.253552, 46.072764]} className='text-gray-900'>
          <h1>Cezary</h1>
        </Popup>
      </Map>
    </>
  );
}

export default Mapbox;
