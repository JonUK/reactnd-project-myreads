import React from 'react';
import '../containers/App.css';
import PropTypes from 'prop-types';

export const Book = props => {
  let handleChange = event => {
    props.onMoveBook(props.book, event.target.value);
  };

  let book = props.book;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={event => handleChange(event)}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {book.title}
        </div>
        <div className="book-authors">
          {book.authors}
        </div>
      </div>
    </li>
  );
};

Book.prototype = {
  key: PropTypes.string,
  book: PropTypes.object,
  onMoveBook: PropTypes.func,
};
