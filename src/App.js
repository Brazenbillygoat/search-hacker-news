
import './App.css';
// import { useSelector, useDispatch } from 'react-redux';

function App() {


  const fetchNews = async (searchQuery) => {
    const response = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${searchQuery}`);
    console.log(response)
    const results = await response.json();
    console.log(results);

  }





  return (
    <div className="App">
      <form>
        <label>
        <h4>Find the latest Hacker News: </h4>
        <input className="searchbar-input-box"
               type="text" 
               placeholder="Search" 
        />

        </label>


        <input className="btn-primary" type="submit" onClick={() => fetchNews()} />
      </form>
    </div>
  );
}

export default App;
