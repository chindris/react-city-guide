import React, {Component} from 'react';
import Attraction from '../../components/List/Attraction';
import {connect} from 'react-redux';
import {attractionsSelectedSet} from '../../actions/attractions_selected';
import styled from 'styled-components';
import {getFilteredAttractions} from '../../selectors/attractions';

class AttractionsList extends Component {
  setSelectedAttraction = (attractionId) => {
    const {dispatch} = this.props;
    dispatch(attractionsSelectedSet(attractionId));
  }

  render() {
    const {attractions, selectedAttraction} = this.props;
    return (
      <Wrapper>
        <ListContainer>
          {
            attractions.map((attraction) => (
              <List>
                <Attraction
                  key={attraction.id}
                  attraction={attraction}
                  onAttractionSeleced={this.setSelectedAttraction}
                  isSelected={attraction.id === selectedAttraction}
                />
              </List>
            ))
          }
        </ListContainer>
      </Wrapper>
    )
  }
};

const Wrapper = styled.div`
  float: left;
  width: 50%;
  display: inline-block;
`

const List = styled.li`
  padding: 10px;
  margin: 10px;
  overflow: auto;
  list-style: none;
  border-radius: 10px;
  background-color: #ffffff;
  &:hover {
    background: #eee;
    cursor: pointer;
  }
`;

const ListContainer = styled.ul`
  display: inline-block;
  padding: 0;
  z-index: 100;
  background-color: #f0f0f0;
  height: 100%;
  width: 100%;
`

const mapStateToProps = (state, ownProps) => {
  return {
    attractions: getFilteredAttractions(state),
    selectedAttraction: state.attractions_selected
  }
}

export default connect(mapStateToProps)(AttractionsList);
