import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

import Map from "../../components/atoms/GoogleMaps";
import Header from '../../components/molecules/Header'

import { Context } from '../../store'
import { sendLocation } from '../../service/analytics'
import { logOut } from "../../service/auth";
import { removeUser } from "../../store/actions";

import db from '../../database'


function Dashboard() {
  const [state, dispatch] = useContext(Context);


  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setLatitude(latitude)
        setLongitude(longitude)

        sendLocation(latitude, longitude, state.user)

        db.table('lastLocation').add({
          uid: state.user.uid,
          lat: latitude,
          long: longitude
        })
      }, (err) => toast.error(err.message));
    }
  }, [])

  const handleLogout = () => {
    logOut();
    dispatch(removeUser())
  }


  return <div>
    <Header onClick={handleLogout} />
    <Map latitude={latitude} longitude={longitude} />
  </div>;
}

export default Dashboard;