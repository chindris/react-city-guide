import {ATTRACTIONS_ADD_REVIEW} from '../actions/attractions';

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
    default:
      return state;
  }
}

export default attractions;