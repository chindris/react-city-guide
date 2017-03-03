import React from 'react';
import styled from 'styled-components';

const Tour = ({tour, onTourSelected, isSelected}) => (
  <Item onClick={() => onTourSelected(tour.id)}>
    <Image src={tour.image} />
    <div>
      <Title>{tour.title}</Title>
      <Summary>{tour.description}</Summary>
    </div>
  </Item>
)

const Item = styled.div`
  margin: 5px;
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
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export default Tour;
