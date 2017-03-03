import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Tour from '../../components/List/Tour';

class ToursList extends Component {

  render() {
    const {tours} = this.props;
    return (
      <div>
        <ListContainer>
          {
            tours.map((tour) => (
              <List key={tour.id}>
                <Tour
                  tour={tour}
                />
              </List>
            ))
          }
        </ListContainer>
      </div>
    )
  }
};

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
  width: 50%;
  float: left;
  padding: 0;
  z-index: 100;
  background-color: #f0f0f0;
`

const mapStateToProps = (state, ownProps) => {
  return {
    tours: state.tours.list,
  }
}

export default connect(mapStateToProps)(ToursList);
