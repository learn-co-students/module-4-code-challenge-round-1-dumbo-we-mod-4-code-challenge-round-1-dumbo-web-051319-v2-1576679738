import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    this.props.books.map(book => (
      book
    ))
    
    
    
    return (
      <div className="book-list">
        <h1>Book List</h1>
        
        <Form />
        <ul>{/*render list of books here*/}</ul>
        <Book books={this.props.books}/>
      </div>
    );
  }
}

export default BookList;
