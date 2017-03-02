import React from 'react';
import styled from 'styled-components';

const SubmitButton = ({text}) => (
  <Button type="submit" value={text}>Submit</Button>
);

const Button = styled.button`
  border: none;
  padding: 8px 15px 8px 15px;
  background: #FF8500;
  color: #fff;
  box-shadow: 1px 1px 4px #DADADA;
  -moz-box-shadow: 1px 1px 4px #DADADA;
  -webkit-box-shadow: 1px 1px 4px #DADADA;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  &:hover {
    background: #EA7B00;
    color: #fff;
  }
`


export default SubmitButton;
