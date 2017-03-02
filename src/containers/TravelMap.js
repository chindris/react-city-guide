import React, {Component} from 'react';
import Map, {Marker, InfoWindow}  from 'google-maps-react';
import {connect} from 'react-redux';


import GoogleApiComponent from '../libs/GoogleApiComponent';

export class TravelMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      selectedAttraction: null,
    };
  }

  getMarkersFromAttractionList = (list) => {
    return list.map(attraction => {
      return {
        name: attraction.title,
        position: attraction.location,
        attractionId: attraction.id
      }
    });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      selectedAttraction: this.getSelectedAttraction(props.attractionId)
    });
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false
    });
  }

  getSelectedAttraction = (id) => {
    const {attractions} = this.props.store;
    return attractions.list.find(attraction => attraction.id === id);
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    const {attractions, selectedAttraction} = this.props.store;

    console.log("JMOZGAWA: this", this);

    return (
      <Map google={this.props.google}
           className={'map'}>
        {
          this.getMarkersFromAttractionList(attractions.list).map(marker =>

            <Marker
              name={marker.name}
              position={marker.position}
              attractionId={marker.attractionId}
              onClick={this.onMarkerClick}
            />
          )
        }

        <InfoWindow
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          { this.state.selectedAttraction &&
          <div>
            <image src={this.state.selectedAttraction.image}/>
            <h2>{this.state.selectedAttraction.title}</h2>
          </div>
          }
        </InfoWindow>
      </Map>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("JMOZGAWA: state", state);
  return {
    store: state
  }
}

const ReduxConnectedTravelMap = connect(mapStateToProps)(TravelMap);

export default GoogleApiComponent({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(ReduxConnectedTravelMap)
