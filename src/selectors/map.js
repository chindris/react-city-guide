import {createSelector} from 'reselect';
import {getFilteredAttractions, getAttractions, getAttractionById} from './attractions';
import {getSelectedTour, getTourById, getTours} from './tours';

const getCategoryFilter = (state) => state.filters.category.value;

export const getAttractionsForMap = createSelector(
  [getCategoryFilter, getFilteredAttractions, getAttractions, getTours, getSelectedTour],
  (categoryFilter, filteredAttractions, attractions, tours, selectedTour) => {
    if (categoryFilter === 'tours') {
      const tour = getTourById(tours, selectedTour);
      if (!!tour) {
        return tour.attractions.map(attractionId => {
          return getAttractionById(attractions, attractionId)
        })
      }
    }
    return filteredAttractions;
  }
);
