import React, { Component } from 'react';
import AttractionsList from './List/AttractionsList';
import logo from '../logo.svg';
import TravelMap from './TravelMap';
import Header from '../components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AttractionsList />
        {/* <TravelMap /><br /> */}
        {/* search bar need to be in header */}
      </div>
    );
  }
}

export default App;
