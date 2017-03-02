import React from 'react';
import ElementLabel from './ElementLabel';

const RatingWidget = (props) => (
  <div>
    <ElementLabel text="Your rating"/>
    <select {...props} onChange={props.onRatingChange}>
      {/* @todo: make this variable, this could be sent via props. */}
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
  </div>
);

export default RatingWidget;
