import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelf: []
  }

  getBooks = () => {
    fetch(`http://localhost:3005/books`)
      .then(r => r.json())
      .then(booksArray => {
        this.setState({
          books: booksArray
        })
      })
  }

  componentDidMount(){
    this.getBooks()
  }

  handleClick = (book) => {
    let bookShelf = [...this.state.bookShelf, book]
    this.setState({
      bookShelf: bookShelf
    })
  }

  deleteBook = (book) => {
    let safeBooks = this.state.bookShelf.filter(obj => {
      return obj !== book
    })
    this.setState({
      bookShelf: safeBooks
    })
  }

  addBook = (book) => {
    let books = [...this.state.books, book]
    this.setState({
      books: books
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.handleClick} addBook={this.addBook}/>
        <Bookshelf bookShelf={this.state.bookShelf} handleClick={this.deleteBook}/>
      </div>
    );
  }
}

export default App;
