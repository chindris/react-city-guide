import React from 'react';
import ElementLabel from './ElementLabel';
import styled from 'styled-components';

const CommentInput = (props) => (
  <div>
    {/* <ElementLabel text="Your review" /> */}
    <TextField
      rows={5} {...props}
      placeholder="Write your review..."
      onChange={props.onTextChange}/>
  </div>
);

const TextField = styled.textarea`
  width: 90%;
  padding: 10px;
  margin: 10px 0 10px 0;
  border: solid 1px #dcdcdc;
  transition: box-shadow 0.3s, border 0.3s;
  &:focus {
    border: solid 1px #707070;
    box-shadow: 0 0 5px 1px #969696;
  }
`;

export default CommentInput;
