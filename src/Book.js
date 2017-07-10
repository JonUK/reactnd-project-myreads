import React from 'react'
import './App.css'

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onMoveBook(this.props.book, event.target.value);
    }

    render() {
        let book = this.props.book;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                             style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={this.handleChange}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}