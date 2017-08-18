import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';

class GoogleMap extends Component {

  componentDidMount() {
    const that = this
    console.log(that.props.lat)
    GoogleMapsLoader.load(function (google) {
      new google.maps.Map(that.refs.map, {
        zoom: 11,
        center: {
          lat: that.props.lat,
          lng: that.props.lon,
        }
      });
    });
  }

  render() {
    return (
      <div ref='map' >

      </div>
    );
  }
}

export default GoogleMap;