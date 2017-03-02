import React from 'react';
import AttractionDetails from './AttractionDetails';
import StarRatingComponent from 'react-star-rating-component';

const Attraction = ({attraction, isSelected, onAttractionSeleced}) => (
  <div onClick={() => onAttractionSeleced(attraction.id)}>
    <div>{attraction.title}</div>
    <div>Rating: <StarRatingComponent value={attraction.rating} name={`attraction-rating-${attraction.id}`} starCount={5} editing={false} /></div>
    {
      (isSelected && <AttractionDetails attraction={attraction} />) || null
    }
  </div>
);

export default Attraction;
