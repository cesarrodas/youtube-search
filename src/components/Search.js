import './Search.css';
import searchIcon from '../assets/search_icon.svg';

const SearchField = () => {
  return (
    <div className="userInput">
      <img className="search-icon-inner" src={searchIcon} />
      <input />
      <button><img className="search-icon" src={searchIcon} /></button>
    </div>
  )
}

export default SearchField;