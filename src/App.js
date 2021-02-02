import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {








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


        <input className="btn-primary" type="submit" />
      </form>
    </div>
  );
}

export default App;
