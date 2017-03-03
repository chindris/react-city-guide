import {TOURS_SELECTED_SET} from '../actions/tours_selected';

const tours_selected = (state = null, action) => {
  switch (action.type) {
    case TOURS_SELECTED_SET: {
      return action.id
    }
    default:
      return state;
  }
}

export default tours_selected;