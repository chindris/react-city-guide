import React, {Component} from 'react';
import Map, {Marker, InfoWindow}  from 'google-maps-react';
import {connect} from 'react-redux';
import {Reviews} from '../components/Map/reviews';
import {getFilteredAttractions} from '../selectors/attractions';

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
    const {attractions} = this.props;
    return attractions.find(attraction => attraction.id === id);
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    const {attractions, attractions_selected} = this.props;
    const selected_attraction_obj= this.getSelectedAttraction(attractions_selected);

    return (
      <Map google={this.props.google}
           className={'map'}
            center={selected_attraction_obj? selected_attraction_obj.location : null}
      >
        {
          this.getMarkersFromAttractionList(attractions).map(marker =>

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
            <h2>{this.state.selectedAttraction.title}<Reviews ratings={
              this.state.selectedAttraction.reviews.map(review=> review.rating)
            } /></h2>
            <h3>{this.state.selectedAttraction.address}</h3>
            <p>{this.state.selectedAttraction.description}</p>
            <button onClick={()=> {console.log("JMOZGAWA: ")}}>Details</button>

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
    attractions: getFilteredAttractions(state),
    attractions_selected: state.attractions_selected,
  }
}

const ReduxConnectedTravelMap = connect(mapStateToProps)(TravelMap);

export default GoogleApiComponent({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(ReduxConnectedTravelMap)
