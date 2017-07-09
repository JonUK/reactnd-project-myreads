import React from 'react'
import Book from './Book'
import './App.css'

export const SearchResult = (props) => {
    const bookList = props.books.map((book, i) => {
        return (
            <Book
                key={i}
                title={book.title}
                authors={book.authors}
                style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                book={book}
                value="none"
                onMoveBook={props.onMoveBook}
            />
        )
    });

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {bookList}
            </ol>
        </div>
    )
};