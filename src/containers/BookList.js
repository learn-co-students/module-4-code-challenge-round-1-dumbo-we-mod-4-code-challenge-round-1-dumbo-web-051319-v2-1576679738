import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  
  render() {
    // console.log(this.props)
    let listBooks = this.props.books.map(book => <Book index={book.id} oneBook={book} addBookToShelf={this.props.addBookToShelf} addedBook={this.props.addedBook}/>)
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
      <ul>{listBooks}</ul>
        
      </div>
    );
  }
}

export default BookList;
