import React, { Component } from 'react';
import AttractionsList from './List/AttractionsList';
import ToursList from './List/ToursList';
import logo from '../logo.svg';
import TravelMap from './TravelMap';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    const {category} = this.props;
    return (
      <MainContainer>
        <Header />
        {
          (category === 'attractions' && <AttractionsList />) || null
        }
        {
          (category === 'tours' && <ToursList />) || null
        }
        <TravelMap />
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  width: 100%;
`

const mapStateToProps = (state, ownProps) => {
  return {
    category: (state.filters && state.filters.category.value) || 'attractions',
  }
}

export default connect(mapStateToProps)(App);
