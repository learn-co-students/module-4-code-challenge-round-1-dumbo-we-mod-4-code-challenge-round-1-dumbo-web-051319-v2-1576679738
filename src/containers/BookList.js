import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooks = () => {
    return this.props.books.map(book => <Book book={book} onClick={this.props.addBookToShelf} key={book.id}/>)
  }
  

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addNewBookToBooks={this.props.addNewBookToBooks}/>
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
