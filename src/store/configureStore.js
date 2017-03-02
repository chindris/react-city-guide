import {createStore} from 'redux';
import initialState from './attractions.model';
import reducer from '../reducers/index';

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
