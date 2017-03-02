export const ATTRACTIONS_ADD_REVIEW = 'ATTRACTIONS_ADD_REVIEW';

export const attractionsAddReview = (attractionId, rating, text) => {
  return {
    type: ATTRACTIONS_ADD_REVIEW,
    attractionId,
    rating,
    text
  }
}
