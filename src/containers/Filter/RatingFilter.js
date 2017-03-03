import React, {Component} from 'react';
import {connect} from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import {filtersSet, filtersRemove} from '../../actions/filters';
import styled from 'styled-components';

const withRatingStars = (Component, starsNr) => (props) => {
  return (
    <label>
      <input type="checkbox" value={starsNr} onChange={props.onRatingFilterChange} checked={props.selected}/>
      <Component value={starsNr} starCount={starsNr} {...props} editing={false}/>
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
    (!!rating[e.target.value]) ?
      dispatch(filtersRemove('rating', e.target.value)) :
      dispatch(filtersSet('rating', e.target.value, 1));
  }

  render() {
    const { rating } = this.props;
    return (
      <div>
        <Wrapper>
          <OneStar name="one" onRatingFilterChange={this.onRatingFilterChange} selected={!!rating[1]} />
        </Wrapper>
        <Wrapper>
          <TwoStar name="two" onRatingFilterChange={this.onRatingFilterChange} selected={!!rating[2]} />
        </Wrapper>
        <Wrapper>
          <ThreeStar name="three" onRatingFilterChange={this.onRatingFilterChange} selected={!!rating[3]} />
        </Wrapper>
        <Wrapper>
          <FourStar name="four" onRatingFilterChange={this.onRatingFilterChange} selected={!!rating[4]} />
        </Wrapper>
        <Wrapper>
          <FiveStar name="five" onRatingFilterChange={this.onRatingFilterChange} selected={!!rating[5]} />
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  display: inline;
  padding-right: 5%;
`

const mapStateToProps = (state, ownProps) => {
  return {
    rating: (state.filters && state.filters.rating) || {},
  }
}

export default connect(mapStateToProps)(RatingFilter);
