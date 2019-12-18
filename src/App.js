import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from './components/Form'

class App extends Component {
  state={
    bookArray: [],
    shelvedBooks: []
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(r => r.json())
    .then((books) => {
      this.setState({
        bookArray: books
      })
    })
  }

  // addBookToShelf = (bookToAdd) => {
  //   this.setState({
  //     shelvedBooks: [...this.state.shelvedBooks, bookToAdd]
  //   })
  // }

  editBookShelf = (bookToEdit) => {
    if (this.state.shelvedBooks.includes(bookToEdit)) {
      let filteredBooks = this.state.shelvedBooks.filter(book => book !== bookToEdit)
      this.setState({
        shelvedBooks: filteredBooks
      })
    } else {
      this.setState({
        shelvedBooks: [...this.state.shelvedBooks, bookToEdit]
      })
    }
  }

  createNewBook = (newBook) => {
    fetch("http://localhost:3005/books", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify({
        title: newBook.title,
        author: newBook.author,
        img: newBook.img
      })
    })
    .then(r => r.json())
    .then((newBookObj) => {
      this.setState({
        bookArray: [...this.state.bookArray, newBookObj]
      })
    })
  }

  render() {
    return (
      <div className="book-container">
        <BookList bookArray={this.state.bookArray} editBook={this.editBookShelf} createNewBook={this.createNewBook} />
        <Bookshelf shelvedBooks={this.state.shelvedBooks} editBook={this.editBookShelf} />
      </div>
    );
  }
}

export default App;
