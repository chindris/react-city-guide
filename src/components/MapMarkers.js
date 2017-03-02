import React, {Component} from 'react';
import {Marker}  from 'google-maps-react';


export class MapMarkers extends Component {

  render() {
  console.log("JMOZGAWA: this.props",this.props);
    return(
      <div>
        {
          this.props.markers.map(marker =>

            <Marker />
          )
        }
      </div>
    )
  }
}

export default MapMarkers;