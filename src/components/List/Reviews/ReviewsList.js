import React from 'react';
import Review from './Review';
import styled from 'styled-components';

const ReviewsList = ({reviews}) => (
  <Reviews>
    {
      (!reviews.length && <div>There are no reviews at the moment.</div>) || null
    }
    {
      (reviews.length &&
        <List>
          {reviews.map((review) => (
            <li key={review.id}><Review review={review} /></li>
          ))}
        </List>
      ) || null
    }
  </Reviews>
);

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Reviews = styled.div`
  padding: 20px 0;
  list-style: none;
`;

export default ReviewsList;
