import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  renderBookList = () => {
    return this.props.books.map(book => (
      <Book
        key={book.id}
        book={book}
        addBookToShelf={this.props.addBookToShelf}
      />
    ));
  };
  render() {
    console.log(this.props.newBook);
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form
          newBook={this.props.newBook}
          inputTitle={this.props.inputTitle}
          inputAuthor={this.props.inputAuthor}
          inputImage={this.props.inputImage}
          handleSubmitForm={this.props.handleSubmitForm}
        />
        <ul>{this.renderBookList()}</ul>
      </div>
    );
  }
}

export default BookList;
