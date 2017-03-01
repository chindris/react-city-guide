import {createStore} from 'redux';
import dummyReducer from '../reducers/dummyReducer';


const store = createStore(dummyReducer);

export default store;