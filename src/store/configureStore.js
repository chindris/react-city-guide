import {createStore} from 'redux';
import initialState from './attractions.model';
import dummyReducer from '../reducers/dummyReducer';

const store = createStore(dummyReducer, initialState);

export default store;
