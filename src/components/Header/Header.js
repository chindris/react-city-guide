import React from 'react';
import SearchBar from '../../containers/Header/SearchBar';
import RatingFilter from '../../containers/Filter/RatingFilter';
import CategoryFilter from '../../containers/Filter/CategoryFilter';

const Header = () => (
  <div>
    <SearchBar />
    <RatingFilter />
    <CategoryFilter />
  </div>
);

export default Header;