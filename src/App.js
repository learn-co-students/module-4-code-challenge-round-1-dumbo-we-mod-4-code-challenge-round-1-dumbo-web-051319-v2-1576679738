import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelf: []
  }

  componentDidMount() {
    fetch(`http://localhost:3005/books`)
      .then(r => r.json())
      .then((booksArr) => {
        this.setState({
          books: booksArr
        })
      }
    )
  }

  addToShelf = (bookObj) => {
    this.setState({
      shelf: [...this.state.shelf, bookObj]
    })
  }

  removeFromShelf = (bookObj) => {
      this.setState({
        shelf: this.state.shelf.filter(book => book.id !== bookObj.id)
      })

  }

  addNewBook = (evt, bookObj) => {
    // console.log(evt, bookObj)
    evt.preventDefault()
    this.setState({
      books: [...this.state.books, bookObj]
    })
  }


  render() {
    // console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList books={this.state.books} onClick={this.addToShelf} handleSubmit={this.addNewBook}/>
        <Bookshelf books={this.state.shelf} onClick={this.removeFromShelf}/>
      </div>
    );
  }
}

export default App;
