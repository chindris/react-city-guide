import React from 'react';
import SearchBar from '../../containers/Header/SearchBar';
import RatingFilter from '../../containers/Filter/RatingFilter';

const Header = () => (
  <div>
    <SearchBar />
    <RatingFilter />
  </div>
);

export default Header;