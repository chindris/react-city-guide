import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { search } from '../../actions/search';
import styled from 'styled-components';

class SearchBar extends Component {
  render() {
    const search = this.props.search;
    const value = this.props.value;

    return (
      <SearchBar
        type="text"
        className="search"
        placeholder="Search for attractions..."
        value={value}
        onChange={(event) => search(event.target.value)} />
    )
  }
}

const SearchBar = styled.input`
  width: 200px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  &:focus {
    width: 100%;
  }
`

function mapStateToProps(state) {
  return {
    attractions: state.attractions
  }
}

export default connect(mapStateToProps)(SearchBar);
