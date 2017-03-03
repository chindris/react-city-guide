import {ATTRACTIONS_ADD_REVIEW} from '../actions/attractions';
import {ATTRACTIONS_UPDATE_RATING} from '../actions/attractions';

const attractions = (state = null, action) => {
  switch (action.type) {
    case ATTRACTIONS_ADD_REVIEW: {
      const nextReviewId = state.nextReviewId + 1;
      return {
        ...state,
        nextReviewId,
        list: state.list.map((attraction) => {
          if (attraction.id !== action.attractionId) {
            return attraction;
          }

          return {
            ...attraction,
            reviews: [...attraction.reviews, {
              id: nextReviewId,
              rating: action.rating,
              text: action.text,
            }]
          }
        })
      }
    }
    case ATTRACTIONS_UPDATE_RATING: {
      return {
        ...state,
        list: state.list.map((attraction) => {
          if (attraction.id !== action.attractionId) {
            return attraction;
          }

          const sumRating = attraction.reviews && attraction.reviews.length > 0 ? attraction.reviews.reduce((a, b) => {return {rating: a.rating + b.rating}}) : {rating: 0};
          const avgRating = sumRating.rating / attraction.reviews.length;
          return {
            ...attraction,
            rating: avgRating,
          }
        })
      }
    }
    default:
      return state;
  }
}

export default attractions;
