import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

 sendPropsToBook = () => {
   return this.props.books.map(book => <Book bookname={book.title} bookimage={book.img} key={book.id} handleChange={this.props.handleChange} />)
 }
 



  render() {

    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.sendPropsToBook()}</ul>
      </div>
    );
  }
}

export default BookList;
