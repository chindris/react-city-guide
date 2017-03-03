export const ATTRACTIONS_ADD_REVIEW = 'ATTRACTIONS_ADD_REVIEW';
export const ATTRACTIONS_UPDATE_RATING = 'ATTRACTIONS_UPDATE_RATING';

export const attractionsAddReview = (attractionId, rating, text) => {
  return {
    type: ATTRACTIONS_ADD_REVIEW,
    attractionId,
    rating,
    text
  }
}

export const attractionsUpdateRating = (attractionId) => {
  return {
    type: ATTRACTIONS_UPDATE_RATING,
    attractionId,
  }
}
