import {combineReducers} from 'redux';
import attractions_selected from './attractions_selected';

export default combineReducers({
  attractions_selected,
  attractions: (state={}) => state,
})
