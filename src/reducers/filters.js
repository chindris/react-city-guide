import {FILTERS_SET} from '../actions/filters';
import {FILTERS_REMOVE} from '../actions/filters';

const filters = (state = null, action) => {
  switch (action.type) {
    case FILTERS_SET: {
      // @todo: this looks a bit hacky...
      const currentFilter = state && state[action.filterId] ? state[action.filterId] : {};
      return {
        ...state,
        [action.filterId]: {
          ...currentFilter,
          [action.filterKey]: action.filterValue
        }
      }
    }
    case FILTERS_REMOVE: {
      const currentFilter = state && state[action.filterId] ? state[action.filterId] : {};
      delete currentFilter[action.filterKey];
      return {
        ...state,
        [action.filterId]: {
          ...currentFilter,
        }
      }
    }
    default:
      return state;
  }
}

export default filters;
