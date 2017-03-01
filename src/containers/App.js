import React, { Component } from 'react';
import AttractionsList from './List/AttractionsList';
import logo from '../logo.svg';
import TravelMap from './TravelMap';

class App extends Component {
  render() {
    return (
      <div>
        <AttractionsList />
        <TravelMap />
      </div>
    );
  }
}

export default App;
