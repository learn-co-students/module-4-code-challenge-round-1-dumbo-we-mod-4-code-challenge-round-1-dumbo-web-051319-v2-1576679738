import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form 
        addNewBook={this.props.addNewBook}/>
        
        <ul>{/*render list of books here*/
        this.props.books.map((book)=>{
         return  < Book 
         book={ book } 
         handleClick={this.props.addToShelf} 
         key={book.id} 
         id={book.id} 
         />
        })
        }</ul>
      </div>
    );
  }
}

export default BookList;
