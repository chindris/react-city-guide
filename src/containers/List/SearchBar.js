import React, { Component } from 'react';
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
      <input
        type="text"
        placeholder="Search for attractions"
        value={search}
        onChange={this.onSearchChanged} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(SearchBar);
