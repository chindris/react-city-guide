import {createSelector} from 'reselect';

export const getAttractions = (state) => state.attractions.list;
export const getSearchedValue = (state) => state.search;
export const getRatingFilter = (state) => state.filters && state.filters.rating ? state.filters.rating : {};

export const getFilteredByRatingAttractions = createSelector(
  [getAttractions, getRatingFilter],
  (attractions, ratingFilter) => {
    if (Object.keys(ratingFilter).length === 0) {
      return attractions;
    }
    return attractions.filter((attraction) => {
      if (!!ratingFilter[attraction.rating]) {
        return true;
      }
      return false;
    });
  }
);

export const getFilteredAttractions = createSelector(
  [getFilteredByRatingAttractions, getSearchedValue],
  (attractions, search) => {
    return attractions.filter((attraction) => {
      if (attraction.title.includes(search) || attraction.description.includes(search)) {
        return true;
      }
      return false;
    });
  }
);
