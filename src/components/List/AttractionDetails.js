import React from 'react';
import ReviewsList from  './Reviews/ReviewsList';
import ReviewForm from  '../../containers/List/ReviewForm';

const AttractionDetails = ({attraction}) => (
  <div>
    <div>{attraction.description}</div>
    <div>Address: {attraction.address}</div>
    <ReviewsList reviews={attraction.reviews} />
    <ReviewForm attractionId={attraction.id}/>
  </div>
);

export default AttractionDetails;