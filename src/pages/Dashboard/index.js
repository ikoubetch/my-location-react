import React, { useState, useEffect } from 'react';

import Map from "../../components/atoms/GoogleMaps";


function Dashboard() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      });
    }
  }, [])


  return <div>
    <Map latitude={latitude} longitude={longitude} />
  </div>;
}

export default Dashboard;