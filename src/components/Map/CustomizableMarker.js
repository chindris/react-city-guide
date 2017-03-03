import {Marker}  from 'google-maps-react';


export class CustomizableMarker extends Marker {
  render() {
    if (this.props.active && this.props.selectedAttractionId !== this.props.attractionId) {
      this.props.onActive(this.props, this.marker);
    }
    return null;
  }
}

export default CustomizableMarker;
