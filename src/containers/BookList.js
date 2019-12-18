import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {

  	
    return (
      <div className="book-list">
        <h1>Add your book</h1>
        <Form handleSubmit={this.props.handleSubmit} />
        <ul>{this.props.books.map(book => {
  	  return <Book key={book.id} handleClick={this.props.handleClick} book={book} />
  	})
}</ul>
      </div>
    );
  }
}

export default BookList;
