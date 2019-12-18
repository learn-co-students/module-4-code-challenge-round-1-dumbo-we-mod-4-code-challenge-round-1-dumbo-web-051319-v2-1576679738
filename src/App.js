import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API = `http://localhost:3005/books`
class App extends Component {

  state={
    books: [],
    bookShelf: []
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then((booksArr) => {
        this.setState({
          books: booksArr
        })
      })
  }
  addBookToBookshelf = (book) => {
    // console.log(book)
    if(!this.state.bookShelf.includes(book)){
      this.setState({
        bookShelf: [...this.state.bookShelf, book]
      })
    }
  }
  handleRemove = (book) => {
    this.setState({
      bookShelf: this.state.bookShelf.filter(books => books.id !== book.id)
    })
  }

  createBook = (book) => {
    // console.log(book)
    this.setState({
      books: [book, ...this.state.books]
    })
  }
  

  
  
  
  render() {
    // console.log(this.state.books)
    // console.log(this.state.bookshelf)
    return (
      <div className="book-container">
        <BookList 
        books={this.state.books}
        addBookToBookshelf={this.addBookToBookshelf}
        createBook={this.createBook}
        />
        <Bookshelf 
        books={this.state.bookShelf}
        handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
