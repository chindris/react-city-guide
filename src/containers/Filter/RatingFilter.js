import React, {Component} from 'react';
import {connect} from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import {filtersSet, filtersRemove} from '../../actions/filters';

const withRatingStars = (Component, starsNr) => (props) => {
  return (
    <label>
      <input type="checkbox" value={starsNr} onChange={props.onRatingFilterChange} checked={props.selected}/>
      <Component value={starsNr} starCount={starsNr} {...props} />
    </label>
)};

const OneStar = withRatingStars(StarRatingComponent, 1);
const TwoStar = withRatingStars(StarRatingComponent, 2);
const ThreeStar = withRatingStars(StarRatingComponent, 3);
const FourStar = withRatingStars(StarRatingComponent, 4);
const FiveStar = withRatingStars(StarRatingComponent, 5);

class RatingFilter extends Component {

  onRatingFilterChange = (e) => {
    const {dispatch, rating} = this.props;
    console.log(rating);
    if (!!rating[e.target.value]) {
      dispatch(filtersRemove('rating', e.target.value));
    }
    else {
      dispatch(filtersSet('rating', e.target.value, 1));
    }
  }
  
  render() {
    const { rating } = this.props;
    return (
      <div>
        <OneStar name="one" onRatingFilterChange={this.onRatingFilterChange} selected={!!rating[1]} />
        <TwoStar name="two" onRatingFilterChange={this.onRatingFilterChange} selected={!!rating[2]} />
        <ThreeStar name="three" onRatingFilterChange={this.onRatingFilterChange} selected={!!rating[3]} />
        <FourStar name="four" onRatingFilterChange={this.onRatingFilterChange} selected={!!rating[4]} />
        <FiveStar name="five" onRatingFilterChange={this.onRatingFilterChange} selected={!!rating[5]} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rating: (state.filters && state.filters.rating) || {},
  }
}

export default connect(mapStateToProps)(RatingFilter);