import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';

export class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {rating: 1};
  }


  render() {
    const sumRating = this.props.ratings && this.props.ratings.length > 0 ? this.props.ratings.reduce((a, b) => a + b) : 0;
    const avgRating = sumRating / this.props.ratings.length;
    return (
      <StarRatingComponent
        name={"rate1"} /* name of the radio input, it is required */
        value={avgRating} /* number of selected icon (`0` - none, `1` - first) */
        starCount={5} /* number of icons in rating, default `5` */
        editing={false}
      />
    );
  }
}

export default Reviews;
