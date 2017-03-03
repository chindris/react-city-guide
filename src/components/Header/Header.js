import React from 'react';
import SearchBar from '../../containers/Header/SearchBar';
import RatingFilter from '../../containers/Filter/RatingFilter';
import CategoryFilter from '../../containers/Filter/CategoryFilter';

const Header = (props) => (
  <div>
    <SearchBar category={props.category} />
    {
      (props.category === 'attractions' && <RatingFilter />) || null
    }
    <CategoryFilter />
  </div>
);

export default Header;