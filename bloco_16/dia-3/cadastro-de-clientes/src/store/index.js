import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';
import newClientReducer from '../reducers/newClientReducer';


const rootReducer = combineReducers({
  authReducer,
  newClientReducer,
});

const store = createStore(rootReducer);

export default store;
