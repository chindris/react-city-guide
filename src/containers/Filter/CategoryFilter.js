import React, {Component} from 'react';
import {connect} from 'react-redux';
import ElementLabel from '../../components/Forms/ElementLabel';
import {filtersSet} from '../../actions/filters';

class CategoryFilter extends Component {

  onCategoryFilterChange = (e) => {
    const {dispatch} = this.props;
    dispatch(filtersSet('category', 'value', e.target.value));
  }
  
  render() {
    const { category } = this.props;
    return (
      <div>
        <ElementLabel text="Show" />
        <select value={category} onChange={this.onCategoryFilterChange}>
          <option value="attractions">Attractions</option>
          <option value="tours">Tours</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    category: (state.filters && state.filters.category.value) || 'attractions',
  }
}

export default connect(mapStateToProps)(CategoryFilter);