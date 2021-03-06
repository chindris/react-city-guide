import {combineReducers} from 'redux';
import attractions_selected from './attractions_selected';
import tours_selected from './tours_selected';
import attractions from './attractions';
import search from './search';
import filters from './filters';

export default combineReducers({
  attractions_selected,
  attractions,
  search,
  filters,
  tours: (state = '') => { return state},
  tours_selected,
})
