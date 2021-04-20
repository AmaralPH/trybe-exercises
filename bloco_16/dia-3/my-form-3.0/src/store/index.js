import { createStore, combineReducers } from 'redux';
import basicInfoReducer from '../reducers/basicInfoReducer';

const rootReducer = combineReducers({
  basicInfoReducer,
})

const store = createStore(rootReducer);

export default store;
