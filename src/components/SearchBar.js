import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBar = props =>
  (<div className="search-books-bar">
    <Link className="close-search" to="/">
      Close
    </Link>
    <div className="search-books-input-wrapper">
      <input
        value={props.term}
        type="text"
        placeholder="Search by title or author"
        onChange={event => props.onInputChange(event.target.value)}
      />
    </div>
  </div>);

SearchBar.prototype = {
  onSearch: PropTypes.func,
  term: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default SearchBar;
