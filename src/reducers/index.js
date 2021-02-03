import queryReducer from './queryReducer.js';
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
  currentQuery: queryReducer
});

export default allReducers;