import React from 'react';
import ElementLabel from './ElementLabel';
import StarRatingComponent from 'react-star-rating-component';

const RatingWidget = (props) => (
  <div>
    <div><ElementLabel text="Your rating" /></div>
    {/* @todo: make this variable, this could be sent via props. */}
    <StarRatingComponent value={props.value} name={props.name} starCount={5} onStarClick={props.onRatingChange} />
  </div>
);

export default RatingWidget;
