import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    const renderedBooks = this.props.books.map(book => <Book book={book} key={book.id} addBook={this.props.addBook} /> )
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form handleInputChange={this.props.handleInputChange} 
          title={this.props.title} author={this.props.author} img={this.props.img} addNewBook={this.props.addNewBook} />
        
        <ul>{renderedBooks}</ul>
      </div>
    );
  }
}

export default BookList;
