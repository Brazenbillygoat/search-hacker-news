import queryReducer from './queryReducer.js';
import storeResults from './searchResultsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
  currentQuery: queryReducer,
  storedResults: storeResults
});

export default allReducers;