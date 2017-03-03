import React, {Component} from 'react';


export class Paths extends Component {
  render () {
    console.log("JMOZGAWA: this", this);

    var flightPath = new window.google.maps.Polyline({
      path: this.props.flightPlanCoordinates,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });



    console.log("JMOZGAWA: flightPlanCoordinates", this.props.flightPlanCoordinates);



    flightPath.setMap(this.props.map);

    return null;
  }
}


export default Paths;
