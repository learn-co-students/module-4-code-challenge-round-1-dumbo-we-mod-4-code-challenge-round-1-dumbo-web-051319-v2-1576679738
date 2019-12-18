import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";



class BookList extends Component {


  mapOverBooks = () => {
    
    return this.props.allTheBooks.map((book) => 
    <li><Book 
          key={book.id} 
          id={book.id} 
          book={book}
          bookTitle={book.title} 
          bookAuthor={book.author} 
          bookImg={book.img} 
          handleClick={this.props.handleClick}
          /> 
    </li>
    )
  }



  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form />
        <ul>{this.mapOverBooks()}</ul>
      </div>
    );
  }
}

export default BookList;
