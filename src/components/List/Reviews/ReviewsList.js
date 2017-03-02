import React from 'react';
import Review from './Review';

const ReviewsList = ({reviews}) => (
  <div>
    {
      (!reviews.length && <div>There are no reviews at the moment.</div>) || null
    }
    {
      (reviews.length &&
        <ul>
          {reviews.map((review) => (
            <li key={review.id}><Review review={review} /></li>
          ))}
        </ul> 
      ) || null
    }
  </div>
);

export default ReviewsList;
