import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {



  render() {
    const renderBooks = this.props.allBooks.map((book) => {
      return <Book book={book} key={book.id} handleClick={this.props.addBookToBookShelf} />
    })
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form /*addBookToMainList={this.props.addBookToMainList}*/ addBookToMainListBackEnd={this.props.addBookToMainListBackEnd} />
        <ul>{renderBooks}</ul>
      </div>
    );
  }
}

export default BookList;
