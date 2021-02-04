import queryReducer from './queryReducer.js';
import saveQuery from './searchHistoryReducer';
import storeResults from './searchResultsReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
  currentQuery: queryReducer,
  searchHistory: saveQuery,
  storedResults: storeResults
});

export default allReducers;