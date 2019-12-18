import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createNewBook={this.props.createNewBook} />
        <ul>
          {this.props.bookArray.map(book => <Book key={book.id} book={book} editBook={this.props.editBook} />)}
        </ul>
      </div>
    );
  }
}

export default BookList;
