import {createSelector} from 'reselect';
import {getSearchedValue} from './search';

export const getAttractions = (state) => state.attractions.list;
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

export const getAttractionById = (attractions, id) => {
  for (var i = 0; i < attractions.length; i++) {
    if (attractions[i].id === id) {
      return attractions[i];
    }
  }
  return null;
}