import React, { Component } from "react";
import Book from "../components/Book";

const uuidv4 = require('uuid/v4')

export default class BookShelf extends Component {
  render() {
      //console.log(this.props)
      return (
          <div>
          <h1>Book Shelf</h1>
          <ul>{this.props.shelfBooks.map(book => <Book key ={uuidv4()} book = {book} handleClick = {this.props.handleClick}/>)}</ul>
              
          </div>
      )
  }
}



