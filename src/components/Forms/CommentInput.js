import React from 'react';
import ElementLabel from './ElementLabel';

const CommentInput = (props) => (
  <div>
    <ElementLabel text="Your review" />
    <textarea rows={5} {...props} onChange={props.onTextChange}/>
  </div>
);

export default CommentInput;
