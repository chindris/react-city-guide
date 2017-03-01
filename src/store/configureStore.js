import {createStore} from 'redux';
import initialState from './attractions.model';

const dummyReducer = (state, action) => state;
const store = createStore(dummyReducer, initialState);

export default store;
