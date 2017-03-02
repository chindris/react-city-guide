import React from 'react';
import AttractionDetails from './AttractionDetails';
import styled from 'styled-components';

const Attraction = ({attraction, isSelected, onAttractionSeleced}) => (
  <Item onClick={() => onAttractionSeleced(attraction.id)}>
    <Image src={attraction.image} />
    <div>
      <Title>{attraction.title}</Title>
      <Rating>{attraction.rating}</Rating>
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

const Rating = styled.div`
`;

const Title = styled.h3`
  font: bold 20px Helvetica, Verdana, sans-serif;
`;
const Image = styled.img`
  float: left;
  height: px;
  width: 100px;
  margin-right: 10px;
`;

const Summary = styled.p`
  text-overflow: ellipsis;
`
export default Attraction;
