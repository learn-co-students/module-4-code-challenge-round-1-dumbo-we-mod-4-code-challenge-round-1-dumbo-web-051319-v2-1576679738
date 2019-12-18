import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    let allBooks = this.props && this.props.books.length > 0 ?
    this.props.books.map(book=>
      <li><Book book={book} key={book.id} handleClick={this.props.handleClick}/></li>):
      <span></span>
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form onChange={this.props.onChange}
        handleSubmit={this.props.handleSubmit}/>

        <ul>{allBooks}</ul>
      </div>
    );
  }
}

export default BookList;
