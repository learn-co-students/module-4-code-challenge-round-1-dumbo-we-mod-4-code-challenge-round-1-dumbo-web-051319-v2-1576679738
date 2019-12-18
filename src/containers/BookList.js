import React, { Component } from "react";
import Book from "../components/Book";

class BookList extends Component {

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
       
        <ul>{this.props.allBooks.map(book => <Book addBook={this.props.addBook} key={book.id} book={book}/>)}</ul>
      </div>
    );
  }
}

export default BookList;
