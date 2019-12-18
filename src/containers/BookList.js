import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {


  listTheBooks= () => {
    
  return this.props.books.map(book => {
    return <div>
    <p>{book.title}</p>
  <img src={book.img} />
  </div>
  
  })
}

  render() {
    
   
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form onSubmit={this.props.onSubmit}/>
        {this.listTheBooks()}
      </div>
    );
  }
}

export default BookList;
