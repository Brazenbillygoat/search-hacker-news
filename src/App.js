
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery } from './actions/query';

function App() {
  const currentQuery = useSelector(state => state.currentQuery);
  const dispatch = useDispatch();

  const fetchNews = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${currentQuery}`);
    console.log(response)
    const results = await response.json();
    console.log(results);

  }

  const displaySearchForm = () => {
    return (
      <div className="App">

        <form onSubmit={fetchNews}>
          <label>
          <h4>Find the latest Hacker News: </h4>
          <input className="searchbar-input-box"
                type="text" 
                placeholder="Search"
                value={currentQuery}
                onChange={(e) => dispatch(updateQuery(e.target.value))}
          />
          </label>
          <input className="btn-primary" type="submit" value="Search" />
        </form>

      </div>
    );
  }





  return (
    <>
      {displaySearchForm()}
    </>
    // {/* <div className="App">
    //   <form onSubmit={fetchNews}>
    //     <label>
    //     <h4>Find the latest Hacker News: </h4>
    //     <input className="searchbar-input-box"
    //            type="text" 
    //            placeholder="Search"
    //            value={currentQuery}
    //            onChange={(e) => dispatch(updateQuery(e.target.value))}
    //     />

    //     </label>


    //     <input className="btn-primary" type="submit" value="Search" />
    //   </form>
    // </div> */}
  );
}

export default App;
