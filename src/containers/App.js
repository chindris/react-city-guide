import React, { Component } from 'react';
import AttractionsList from './List/AttractionsList';
import logo from '../logo.svg';
import TravelMap from './TravelMap';
import styled from 'styled-components';
import SearchBar from './List/SearchBar';

class App extends Component {
  render() {
    return (
      <MainContainer>
        <SearchBar />
        <AttractionsList />
        <TravelMap />
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  width: 100%;
`

export default App;
