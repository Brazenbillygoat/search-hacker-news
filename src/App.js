
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery, saveQuery } from './actions/query';
import { storeResults } from './actions/results';
import SearchResults from './components/SearchResults';


function App() {
  const currentQuery = useSelector(state => state.currentQuery);
  const dispatch = useDispatch();

  const fetchNews = async (e) => {
    e.preventDefault();
    //saving results before fetching in case a connection error occurs
    //user might still want to see their query as part of the history
    dispatch(saveQuery(currentQuery));
    const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${currentQuery}`);
    const results = await response.json();
    dispatch(storeResults(results.hits));
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
                   autocomplete="on"
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

  // const displaySearchResults = () => {

  // }




  return (
    <>
      {displaySearchForm()}
      <SearchResults />
    </>
  );
}

export default App;
