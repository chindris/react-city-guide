import {SEARCH_TEXT} from '../actions/search';

const search = (state = '', action) => {
  switch(action.type) {
    case SEARCH_TEXT:
      return action.value;
    default:
      return state;
  }
}

export default search;