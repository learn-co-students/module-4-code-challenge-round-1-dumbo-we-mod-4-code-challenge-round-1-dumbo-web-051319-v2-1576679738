import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooks = () => {
    return this.props.books.map(book => <Book key={book.id} book={book} handleClick={this.props.addToShelf}/>)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleSubmit={this.props.addFormBook}/>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
