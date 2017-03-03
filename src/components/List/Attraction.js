import React from 'react';
import AttractionDetails from './AttractionDetails';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

const Attraction = ({attraction, isSelected, onAttractionSeleced}) => (
  <Item onClick={() => onAttractionSeleced(attraction.id)}>
    <Image src={attraction.image} />
    <div>
      <Title>{attraction.title}</Title>
      <StarRatingComponent
        value={attraction.rating}
        name={`attraction-rating-${attraction.id}`}
        starCount={5}
        editing={false} />
      <Summary>{attraction.description}</Summary>
    </div>
    {
      (isSelected && <AttractionDetails attraction={attraction} />) || null
    }
  </Item>
);

const Item = styled.div`
  margin: 5px;
`;

const Title = styled.h3`
  font: bold 20px Helvetica, Verdana, sans-serif;
`;
const Image = styled.img`
  float: left;
  height: 100px;
  width: 100px;
  margin-right: 10px;
`;

const Summary = styled.p`
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export default Attraction;
