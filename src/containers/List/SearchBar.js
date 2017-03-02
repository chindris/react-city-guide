import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { searchText } from '../../actions/search';

class SearchBar extends Component {
  onSearchChanged = (e) => {
    const {dispatch} = this.props;
    dispatch(searchText(e.target.value));
  }

  render() {
    const {search} = this.props;
    return (
      <SearchBox
        type="text"
        placeholder="Search for attractions"
        value={search}
        onChange={this.onSearchChanged} />
    )
  }
}

const SearchBox = styled.input`
  width: 200px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  &:focus {
    width: 100%;
  }
`

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(SearchBar);
