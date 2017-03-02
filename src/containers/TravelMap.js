import React, {Component} from 'react';
import Map, {Marker, InfoWindow}  from 'google-maps-react';
import store from '../store/configureStore'


import GoogleApiComponent from '../libs/GoogleApiComponent';

export class TravelMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      selectedPlace: {
        name: ""
      }
    };
  }

  getMarkersFromStore = (state) => {
    return state.attractions.list.map(attraction => {
      return {
        name: attraction.title,
        position: attraction.location,
      }
    });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false
    });
  }

  render() {
    
    console.log("JMOZGAWA: this", );
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <Map google={this.props.google}
           className={'map'}>
        {
          this.getMarkersFromStore(store.getState()).map(marker =>

            <Marker
              name={marker.name}
              position={marker.position}
              onClick={this.onMarkerClick}
            />
          )
        }

        <InfoWindow
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(TravelMap)
