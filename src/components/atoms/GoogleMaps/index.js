import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class GoogleMaps extends Component {

  render() {
    return (
      <Map google={this.props.google}
        initialCenter={{
          lat: -15,
          lng: -52
        }}
        zoom={4}>

        <Marker
          name={'Me'}
          position={{ lat: this.props.latitude, lng: this.props.longitude }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(GoogleMaps)