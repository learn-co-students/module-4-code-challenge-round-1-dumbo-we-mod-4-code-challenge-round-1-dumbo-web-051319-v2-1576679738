import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form createNewBook={this.props.createNewBook} />
        <form>
          Sort by:
          <div>
            <label>
              <input type="radio" checked={this.props.author} onChange={this.props.sortBooks} />
              Author
            </label>
            <label>
              <input type="radio" checked={!this.props.author} onChange={this.props.sortBooks} />
              Title
            </label>
          </div>
        </form>
        <ul>
          {this.props.bookArray.map(book => <Book key={book.id} book={book} editBook={this.props.editBook} />)}
        </ul>
      </div>
    );
  }
}

export default BookList;
