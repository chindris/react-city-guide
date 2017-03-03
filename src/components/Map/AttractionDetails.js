import React, {Component} from 'react';
import {Reviews} from './reviews';

export class AttractionDetails extends Component {


  render() {
    const { address, description, reviews, title, image}= this.props;
    console.log("JMOZGAWA: this",this);

    return (
        <div>
          <image src={image}/>
          <h2>{title}<Reviews ratings={
            reviews.map(review => review.rating)
          }/></h2>
          <h3>{address}</h3>
          <p>{description}</p>
          <button onClick={() => {
          }}>Details
          </button>

        </div>
    );
  }
}

export default AttractionDetails;
