import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookShelf: [],
    newBook: {}
  }

  componentDidMount() {
    fetch(`http://localhost:3005/books`)
      .then(r => r.json())
      .then(books => this.setState({books: books}))
      .catch(err => console.log(err))
  }

  addBookToBookShelf = (book) => {
    const newlyOwnedBook = {...book}
    const uuidv4 = require('uuid/v4')
    newlyOwnedBook.personalID = uuidv4()
    this.setState({bookShelf: [newlyOwnedBook, ...this.state.bookShelf]})
  }

  removeBookFromBookShelf = (bookToRemove => {
    this.setState({bookShelf: this.state.bookShelf.filter(book => book.personalID !== bookToRemove.personalID)})
  })

  addNewBookToBooks = (newBook) => {
    // event.preventDefault()
    const newlyCreatedBook = {...newBook}
    const uuidv4 = require('uuid/v4')
    newlyCreatedBook.id = uuidv4()
    this.setState({books: [newlyCreatedBook, ...this.state.books]})
  }

  render() {
    // console.log(this.state)
    return (
      <div className="book-container">
        <BookList 
          books={this.state.books}
          addBookToShelf={this.addBookToBookShelf}
          addNewBookToBooks={this.addNewBookToBooks}
        />
        <Bookshelf 
          books={this.state.bookShelf}
          removeBookFromBookShelf={this.removeBookFromBookShelf}
        />
      </div>
    );
  }
}

export default App;
