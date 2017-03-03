import React, { Component } from 'react';
import AttractionsList from './List/AttractionsList';
import logo from '../logo.svg';
import TravelMap from './TravelMap';
import Header from '../components/Header/Header';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Header />
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
