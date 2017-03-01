import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Map extends Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMaps();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      const google = this.props.google;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
    }
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}
