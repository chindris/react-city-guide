import React, {Component} from 'react';
import RatingWidget from '../../components/Forms/RatingWidget';
import CommentInput from '../../components/Forms/CommentInput';
import SubmitButton from '../../components/Forms/SubmitButton';
import {attractionsAddReview} from '../../actions/attractions';
import {connect} from 'react-redux';

class ReviewForm extends Component {

  state = {
    rating: 1,
    text: '',
  }

  onFormSubmit = (e) => {
    const {attractionId, dispatch} = this.props;
    const {rating, text} = this.state;
    dispatch(attractionsAddReview(attractionId, rating, text));
    this.setState({
      rating: 1,
      text: '',
    });

    e.preventDefault();
  }

  onRatingChange = (nextValue, prevValue, name) => {
    this.setState({
      rating: nextValue,
    });
  }

  onTextChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    const {attractionId} = this.props;
    return (
      <form onSubmit={this.onFormSubmit}>
        <RatingWidget name={`rating-new-review-${attractionId}`} onRatingChange={this.onRatingChange} value={this.state.rating}/>
        <CommentInput onTextChange={this.onTextChange} value={this.state.text}/>
        <SubmitButton text="Submit"/>
      </form>
    );
  }
}

export default connect()(ReviewForm);
