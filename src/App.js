/*
This file displays a div with a search bar and submit button in a form. When the search 
button is clicked a fetch is made asynchroously to the API endpoint from algolia with the searchbar text
interpolated into the url. The promise is made and the response is saved in the state.
The advantage of saving the response in the state is that if I needed to sort the data etc.
later on, it would be much faster to manipulate the state than to make another fetch call to reorganize the 
results.

The SearchResults component is reading from the state and ready for results that it can populate the 
screen with, nothing appears until the state has results to render.

If this were a more complex application I would use this file as a landing page and for routing
and use another file/container to serve the prupose that this file is currently serving.*/

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery, saveQuery } from './actions/query';
import { storeResults } from './actions/results';
import SearchResults from './components/SearchResults';


function App() {
  const currentQuery = useSelector(state => state.currentQuery);
  const searchHistory = useSelector(state => state.searchHistory);
  const dispatch = useDispatch();

  const fetchNews = async (e) => {
    e.preventDefault();
    /*saving results before fetching in case a connection error occurs
    user might still want to see their query as part of the history*/
    dispatch(saveQuery(currentQuery));
    const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${currentQuery}`);
    const results = await response.json();
    dispatch(storeResults(results.hits));
    
    /*The commented-out below code will clear the text box after submission.
    I couldn't decide if it was more annoying to manually clear previous text or to have the previous search query disappear. So I left the option.
    The in-between option I thought of implementing was to have the textbox clear onFocus*/
    
    // dispatch(updateQuery(""));
  }

  const displaySearchForm = () => {
    return (
      <div className="searchbar-div">
        <div>  
          <form onSubmit={fetchNews}>
            <label>
            <h4>Find the latest Hacker News: </h4>
            <input className="searchbar-input-box"
                   type="text" 
                   placeholder="Search"
                   value={currentQuery}
                   name="searchbar"
                   autoComplete="on"
                   onChange={(e) => dispatch(updateQuery(e.target.value))}
            />
            </label>
            <input className="btn-primary" type="submit" value="Search" />
          </form>
        </div>
        <div>
        </div>
      </div>
    );
  }

  const displaySearchHistory = () => {
    return searchHistory.map((query) => {
      return (
        <div className="search-history-div">
          <h4>Search History</h4>
          <p>{query}</p>
        </div>
      );
    });
  }

  return (
    <>
      {displaySearchHistory()}
      {displaySearchForm()}
      <SearchResults />
    </>
  );
}

export default App;
