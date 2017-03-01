import React from 'react';

const Attraction = ({attraction}) => (
  <div>
    <div>{attraction.title}</div>
    <div>{attraction.description}</div>
  </div>
);

export default Attraction;
