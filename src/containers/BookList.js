import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form
          newBook={this.props.newBook}
          onChangeTitle={this.props.onChangeTitle}
          onChangeAuthor={this.props.onChangeAuthor}
          onChangeImage={this.props.onChangeImage}/>
        <ul>{this.props.books.map((book) => <Book book={book} key={book.id} addToShelf={this.props.addToShelf}/>)}</ul>
      </div>
    );
  }
}

export default BookList;
