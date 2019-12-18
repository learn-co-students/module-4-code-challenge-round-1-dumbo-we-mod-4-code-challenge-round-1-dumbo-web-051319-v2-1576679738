
import React, { Component } from 'react'
import Book from "../components/Book";

export class Bookshelf extends Component {



  
  render() {
    
    return (
      <div>
        {console.log(this.props.books)}
        <h1>Book Shelf</h1>
    <ul>{this.props.books.map(book => <Book book={book} key={book.id} handleClick={() => this.props.handleClick}/>)}
</ul>
      </div>
    )
  }
}

export default Bookshelf

// {this.props.books.map(book => <Book book={book} key={book.id}/>)}
