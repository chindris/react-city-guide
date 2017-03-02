import React, { Component } from 'react';
import Map from 'google-maps-react';
import styled from 'styled-components';

class TravelMap extends Component {

  render() {
    return (
      <MapContainer>
        <Map google="" />
      </MapContainer>
    );
  }
}

const MapContainer = styled.div`
  display: inline-block;
  float: right;
  width: 50%;
`


export default TravelMap;
