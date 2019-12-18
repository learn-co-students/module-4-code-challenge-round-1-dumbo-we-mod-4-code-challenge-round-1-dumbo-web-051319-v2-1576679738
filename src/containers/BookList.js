import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";
const uuidv4 = require('uuid/v4')

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleOnSubmit = {this.props.handleOnSubmit} />
          <ul>
          {this.props.books.map(book => <Book key = {uuidv4()} book = {book} handleClick = {this.props.handleClick}/>)}
          </ul>
      </div>
    );
  }
}

export default BookList;
