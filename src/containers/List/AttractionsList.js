import React, {Component} from 'react';
import Attraction from '../../components/List/Attraction';
import {connect} from 'react-redux';
import {attractionsSelectedSet} from '../../actions/attractions_selected';
import {getFilteredAttractions} from './selectors/attractions';

class AttractionsList extends Component {
  setSelectedAttraction = (attractionId) => {
    const {dispatch} = this.props;
    dispatch(attractionsSelectedSet(attractionId));
  }


  render() {
    const {attractions, selectedAttraction} = this.props;
    return (
      <div>
        {
          attractions.map((attraction) => (
            <Attraction
              key={attraction.id}
              attraction={attraction}
              onAttractionSeleced={this.setSelectedAttraction}
              isSelected={attraction.id === selectedAttraction}
            />
          ))
        }
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    attractions: getFilteredAttractions(state),
    selectedAttraction: state.attractions_selected
  }
}

export default connect(mapStateToProps)(AttractionsList);
