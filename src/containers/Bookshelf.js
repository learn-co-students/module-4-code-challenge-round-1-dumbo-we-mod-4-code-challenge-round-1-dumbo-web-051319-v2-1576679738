import React, { Component } from "react";
import Book from "../components/Book";

export default class BookShelf extends Component {
  render() {
      //console.log(this.props)
      return (
          <div>
          <h1>Book Shelf</h1>
          <ul>{this.props.shelfBooks.map(book => <Book key ={book.id} book = {book} handleClick = {this.props.handleClick}/>)}</ul>
              
          </div>
      )
  }
}



