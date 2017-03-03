import React from 'react';
import SearchBar from '../../containers/Header/SearchBar';
import RatingFilter from '../../containers/Filter/RatingFilter';

const Header = (props) => (
  <div>
    <div>
      <SearchBar category={props.category} />
    </div>
    {
      (props.category === 'attractions' && <RatingFilter />) || null
    }
  </div>
);

export default Header;
