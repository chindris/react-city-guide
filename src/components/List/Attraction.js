import React from 'react';
import AttractionDetails from './AttractionDetails';

const Attraction = ({attraction, isSelected, onAttractionSeleced}) => (
  <div onClick={() => onAttractionSeleced(attraction.id)}>
    <div>{attraction.title}</div>
    <div>{attraction.rating}</div>
    {
      (isSelected && <AttractionDetails attraction={attraction} />) || null
    }
  </div>
);

export default Attraction;
