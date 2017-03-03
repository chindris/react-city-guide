import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';

const Review = ({review}) => (
  <Wrapper>
    <div>
      <StarRatingComponent
        value={review.rating}
        name={`review-rating-${review.id}`}
        starCount={5}
        editing={false} />
    </div>
    <div>{review.text}</div>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
`;

export default Review;
