import React, { Component } from 'react';
import Map from 'google-maps-react';
import GoogleApiComponent from '../libs/GoogleApiComponent';


export class TravelMap extends Component {

  render() {
    return (
      <Map google={this.props.google} />
    );
  }
}

export default GoogleApiComponent({
   apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
 })(TravelMap)
