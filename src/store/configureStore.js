import {createStore} from 'redux';
import initialState from './attractions.model';
import reducer from '../reducers/index';

const store = createStore(reducer, initialState);

export default store;
