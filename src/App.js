import React, { Component } from 'react';
import './App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    const defaultPos = {
      lat: -22.0985498,
      lng: -51.4170715,
      name: 'Estádio Prudentão',
    };

    this.currPosName = defaultPos.name;
    this.center = defaultPos;
    this.markers = [defaultPos];
  }

  displayMarkersNames = () => {
    return this.markers.map((marker, index) => {
      return <span key={index}>{marker.name}</span>
    })
  }

  displayMarkers = () => {
    return this.markers.map((marker, index) => {
      return <Marker key={index} id={index} position={{
        lat: marker.lat,
        lng: marker.lng
      }}
      />
    })
  }

  render() {
    return (
        <div className="app">
          <h1>{this.currPosName}</h1>
          <p>Latitude: { this.center.lat.toFixed(2) }, Longitude: { this.center.lng.toFixed(2) }</p>

          <div className="markers">
            <strong>Markers: </strong>
            {this.displayMarkersNames()}
          </div>

          <Map
            className="map"
            google={this.props.google}
            zoom={15}
            initialCenter={this.center}
          >
            {this.displayMarkers()}
          </Map>

          <p>by Juliana Cochenski</p>
        </div>
    );
  }
}

export default GoogleApiWrapper(
  () => ({
    apiKey: process.env.REACT_GOOGLE_MAPS_API_KEY,
  }
  ))(MapContainer)