import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from './actions/search';

class SearchBar extends Component {
  render() {
    const search = this.props.search;
    const value = this.props.value;

    return (
      <input
        type="text"
        className="form-control"
        placeholder="Search for attractions"
        value={value}
        onChange={(event) => search(event.target.value)} />
    )
  }
}

function mapStateToProps(state) {
  return {
    attractions: state.attractions;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}
//dispatch somewhere else

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
