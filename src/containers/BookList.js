import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const books = this.props.books
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createBook={this.props.createBook} />
        <ul>{books.map(book=> <Book books={book} key={book.id} addBookToBookshelf={this.props.addBookToBookshelf} />)}</ul>
      </div>
    );
  }
}

export default BookList;
