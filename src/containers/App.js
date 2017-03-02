import React, { Component } from 'react';
import AttractionsList from './List/AttractionsList';
import logo from '../logo.svg';
import TravelMap from './TravelMap';
import SearchBar from './List/SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AttractionsList />
         <TravelMap /><br />
        {/* search bar need to be in header */}
      </div>
    );
  }
}

export default App;
