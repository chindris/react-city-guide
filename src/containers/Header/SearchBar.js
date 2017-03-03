import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { searchText } from '../../actions/search';
import CategoryFilter from '../../containers/Filter/CategoryFilter';

class SearchBar extends Component {
  onSearchChanged = (e) => {
    const {dispatch} = this.props;
    dispatch(searchText(e.target.value));
  }

  render() {
    const {search, category} = this.props;
    const placeholderText = category === 'tours' ? 'Search for tours...' : 'Search for attractions...';
    return (
      <Wrapper>
        <SearchBox
          type="text"
          placeholder={placeholderText}
          value={search}
          onChange={this.onSearchChanged} />
        <FilterWrapper>
          <CategoryFilter />
        </FilterWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`

const SearchBox = styled.input`
  margin: 10px auto;
  width: 30%;
  padding: 15px;
  border-radius: 5px;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`

const FilterWrapper = styled.div`
  display: inline-block;
`

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(SearchBar);
