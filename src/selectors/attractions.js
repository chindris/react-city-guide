import {createSelector} from 'reselect';

export const getAttractions = (state) => state.attractions.list;
export const getSearchedValue = (state) => state.search;

export const getFilteredAttractions = createSelector(
  [getAttractions, getSearchedValue],
  (attractions, search) => {
    return attractions.filter((attraction) => {
      if (attraction.title.includes(search) || attraction.description.includes(search)) {
        return true;
      }
      return false;
    });
  }
);
