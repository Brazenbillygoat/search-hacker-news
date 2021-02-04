
import { useSelector } from 'react-redux';


export default function SearchResults() {
  const storedResults = useSelector(state => state.storedResults);

  const checkTitleExists = (currentResult) => {
    if (currentResult.story_title === null && currentResult.title === null) {
      return currentResult.comment_text.substring(0,50) + "...";
    } else if (currentResult.title === null) {
      return currentResult.story_title;
    } else {
      return currentResult.title;
    }
  }

  return storedResults.map((result) => {
    /*Because of my use of .length() in line 26 I am checking that a comment actually exists.
    I could handle this in many ways similar to how I used my checkTitleExists() function 
    but I thought for our purposes here this would be the best way to keep the code neater.*/
    if (result.comment_text !== null) {
      return (
        <div key={result.objectID}>
          <a href={result.story_url} target="blank"><h4 className="story-title">{checkTitleExists(result)}</h4></a>
          <p className="story-comment">{result.comment_text.length > 150 ? result.comment_text.substring(0,150) + "..." : result.comment_text}</p>
          <p className="story-author">Author: {result.author}</p>
          <hr className="story-separator"></hr>
        </div>
      );
    };
  });
}