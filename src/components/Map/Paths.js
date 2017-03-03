import React, {Component} from 'react';


export class Paths extends Component {

  constructor(props) {
    super(props);
    this.directionsService = new window.google.maps.DirectionsService;
    this.directionsDisplay = new window.google.maps.DirectionsRenderer({
      draggable: true,
      map: this.props.map,
      panel: document.getElementById('right-panel')
    });
  }

  displayRoute = (route) => {

    const waypoints = route.length > 2 ? route.slice(1, route.length - 2).map((point) => {
      return {
        location: point,
        stopover: true
      };
    }) : null;

    this.directionsService.route({
      origin: route[0],
      waypoints: waypoints,
      destination: route[route.length - 1],
      travelMode: 'WALKING',
      avoidTolls: true
    }, (response, status) => {
      if (status === 'OK') {
        console.log("JMOZGAWA: response", response);
        this.directionsDisplay.setDirections(response);

        const path = response.routes[0].overview_path;
        //
        var flightPath = new window.google.maps.Polyline({
          path: path,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2
        });


        console.log("JMOZGAWA: flightPlanCoordinates", this.props.flightPlanCoordinates);


        flightPath.setMap(this.props.map);


      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }

  render() {
    console.log("JMOZGAWA: this", this);

    this.displayRoute(this.props.flightPlanCoordinates);


    return null;
  }
}


export default Paths;
