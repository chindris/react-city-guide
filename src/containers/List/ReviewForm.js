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

  onRatingChange = (e) => {
    this.setState({
      rating: e.target.value,
    });
  }

  onTextChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <RatingWidget onRatingChange={this.onRatingChange} value={this.state.rating}/>
        <CommentInput onTextChange={this.onTextChange} value={this.state.text}/>
        <SubmitButton text="Submit"/>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect()(ReviewForm);
