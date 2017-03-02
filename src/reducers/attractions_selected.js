import {ATTRACTIONS_SELECTED_SET} from '../actions/attractions_selected';

const attractions_selected = (state = null, action) => {
  switch (action.type) {
    case ATTRACTIONS_SELECTED_SET: {
      return action.id
    }
    default:
      return state;
  }
}

export default attractions_selected;