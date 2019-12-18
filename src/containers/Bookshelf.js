
import React, { Component } from 'react'
import Book from "../components/Book";

export class Bookshelf extends Component {



  
  render() {
    
    return (
      <div>
        <h1>Book Shelf</h1>
    <ul>{this.props.books.map(book => <Book book={book} key={book.id} addToShelf={this.props.addToShelf} removeFromShelf={this.props.removeFromShelf}/>)}
</ul>
      </div>
    )
  }
}

export default Bookshelf

// {this.props.books.map(book => <Book book={book} key={book.id}/>)}
