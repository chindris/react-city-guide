import React from 'react';
import Attraction from './Attraction';
import {connect} from 'react-redux';

const AttractionsList = ({attractions}) => (
  <div>
    {
      attractions.map((attraction) => (
        <Attraction key={attraction.id} attraction={attraction} />
      ))
    }
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    attractions: state.attractions
  }
}

export default connect(mapStateToProps)(AttractionsList);
