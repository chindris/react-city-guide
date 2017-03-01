import React from 'react';

const AttractionDetails = ({attraction}) => (
  <div>
    <div>{attraction.description}</div>
    <div>{attraction.address}</div>
  </div>
);

export default AttractionDetails;