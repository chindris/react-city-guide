import {createSelector} from 'reselect';
import {getSearchedValue} from './search';

export const getTours = (state) => state.tours.list;
export const getSelectedTour = (state) => state.tours_selected;

export const getFilteredTours = createSelector(
  [getTours, getSearchedValue],
  (tours, search) => {
    return tours.filter((tour) => {
      if (tour.title.includes(search) || tour.description.includes(search)) {
        return true;
      }
      return false;
    });
  }
);

export const getTourById = (tours, id) => {
  for (var i = 0; i < tours.length; i++) {
    if (tours[i].id === id) {
      return tours[i];
    }
  }
  return null;
}