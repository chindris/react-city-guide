import React from 'react';
import ReviewsList from  './Reviews/ReviewsList';
import ReviewForm from  '../../containers/List/ReviewForm';
import styled from 'styled-components';

const AttractionDetails = ({attraction}) => (
  <Details>
    <Description>{attraction.description}</Description>
    <Address>Address: {attraction.address}</Address>
    <ReviewsList reviews={attraction.reviews} />
    <ReviewForm attractionId={attraction.id}/>
  </Details>
);

const Details = styled.div`
  border-top: solid 2px #f0f0f0;
  padding-top: 10px;
  &:hover {
    border-top: solid 2px #ffffff;
  }
`
const Description = styled.div`
  padding-bottom: 10px;
`
const Address = styled.div`
  border-top: solid 2px #f0f0f0;
  padding-top: 10px;
  &:hover {
    border-top: solid 2px #ffffff;
  }
`
export default AttractionDetails;
