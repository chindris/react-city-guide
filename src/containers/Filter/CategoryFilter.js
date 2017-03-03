import React, {Component} from 'react';
import {connect} from 'react-redux';
import ElementLabel from '../../components/Forms/ElementLabel';
import {filtersSet} from '../../actions/filters';
import styled from 'styled-components';

class CategoryFilter extends Component {

  onCategoryFilterChange = (e) => {
    const {dispatch} = this.props;
    dispatch(filtersSet('category', 'value', e.target.value));
  }

  render() {
    const { category } = this.props;
    return (
      <div>
        <DropDown value={category} onChange={this.onCategoryFilterChange}>
          <option value="attractions">Attractions</option>
          <option value="tours">Tours</option>
        </DropDown>
      </div>
    );
  }
}

const DropDown = styled.select`
  -webkit-appearance: button;
  -webkit-border-radius: 2px;
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  -webkit-padding-end: 20px;
  -webkit-padding-start: 2px;
  -webkit-user-select: none;
  background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
  background-position: 97% center;
  background-repeat: no-repeat;
  border: 1px solid #AAA;
  color: #555;
  font-size: inherit;
  margin: 20px;
  overflow: hidden;
  padding: 5px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
`

const mapStateToProps = (state, ownProps) => {
  return {
    category: (state.filters && state.filters.category.value) || 'attractions',
  }
}

export default connect(mapStateToProps)(CategoryFilter);
