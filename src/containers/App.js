import React, { Component } from 'react';
import AttractionsList from './List/AttractionsList';
import logo from '../logo.svg';
import TravelMap from './TravelMap';
import SearchBar from './Search/SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        {/* <AttractionsList />
        <TravelMap /><br /> */}
        <SearchBar />
        {/* search bar need to be in header */}
      </div>
    );
  }
}

export default App;
