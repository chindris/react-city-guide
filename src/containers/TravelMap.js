import React, {Component} from 'react';
import Map, {Marker, InfoWindow}  from 'google-maps-react';
import {connect} from 'react-redux';
import Reviews from '../components/Map/reviews';
import {getAttractionsForMap} from '../selectors/map';
import styled from 'styled-components';
import Paths from '../components/Map/Paths';

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
      selectedAttraction: props.attractionId
    });
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false
    });
  }

  getSelectedAttraction = (id) => {
    const {attractions} = this.props;
    return attractions.find(attraction => attraction.id === id);
  }

  onMapReady = (mapProps, map) => {
    const {attractions, google} = this.props;
    const markers = this.getMarkersFromAttractionList(attractions);
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }




    const {attractions, attractions_selected} = this.props;
    const selected_attraction_obj = this.getSelectedAttraction(attractions_selected);

    const attraction = this.getSelectedAttraction(this.state.selectedAttraction);



    return (
      <MapContainer>
        <CustomMap google={this.props.google}
                   mapType="terrain"
             center={selected_attraction_obj ? selected_attraction_obj.location : null}
             onReady={this.onMapReady}
        >
          {
            this.getMarkersFromAttractionList(attractions).map(marker =>

              <Marker
                key={marker.name}
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
            { attraction &&
            <div>
              <image src={attraction.image}/>
              <h2>{attraction.title}<Reviews rating={attraction.rating} name={`attraction-map-${attraction.id}`}/></h2>
              <h3>{attraction.address}</h3>
              <p>{attraction.description}</p>
              <button onClick={() => {
              }}>Details
              </button>

            </div>
            }
          </InfoWindow>
          <Paths map={this.props.map} flightPlanCoordinates={this.getMarkersFromAttractionList(attractions).map(attraction => attraction.position)}/>
        </CustomMap>
      </MapContainer>
    );
  }
}

const CustomMap = styled(Map)`
  position: relative;
  width: 50%!important;
`

const MapContainer = styled.div`
  display: block;
  float: right;
  width: 50%;
`;

const mapStateToProps = (state, ownProps) => {
  return {
    attractions: getAttractionsForMap(state),
    attractions_selected: state.attractions_selected,
  }
}

const ReduxConnectedTravelMap = connect(mapStateToProps)(TravelMap);

export default GoogleApiComponent({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(ReduxConnectedTravelMap)
