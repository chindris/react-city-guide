import React from 'react';

const Review = ({review}) => (
  <div>
    <div>Rating: {review.rating}</div>
    <div>{review.text}</div>
  </div>
);

export default Review;