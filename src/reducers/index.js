import {combineReducers} from 'redux';
import attractions_selected from './attractions_selected';
import attractions from './attractions';

export default combineReducers({
  attractions_selected,
  attractions,
})
