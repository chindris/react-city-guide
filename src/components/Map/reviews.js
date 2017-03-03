import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Reviews = ({rating, name}) => (
  <StarRatingComponent
    name={name} /* name of the radio input, it is required */
    value={rating} /* number of selected icon (`0` - none, `1` - first) */
    starCount={5} /* number of icons in rating, default `5` */
    editing={false}
  />
);

export default Reviews;
