import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review = ({review}) => (
  <div>
    <div>Rating: <StarRatingComponent value={review.rating} name={`review-rating-${review.id}`} starCount={5} editing={false} /></div>
    <div>{review.text}</div>
  </div>
);

export default Review;