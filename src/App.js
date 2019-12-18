import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
// import { throws } from "assert";

class App extends Component {
  state = {
    books: [],
    selectedBooks: []
  }

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(r => r.json())
    .then((booksObj) => {
      this.setState({
        books: booksObj
      })
    })
  }

  handleSelectedBook = (selectedBook) => {
    if (!this.state.selectedBooks.includes(selectedBook)){
      this.setState({
        selectedBooks: [...this.state.selectedBooks, selectedBook]
      })
    }
  }

  handleRemoveBook = (bookToRemove) => {
    let filtered = this.state.selectedBooks.filter(book => book !== bookToRemove)
    this.setState({
      selectedBooks: filtered
    })
  }

  handleSubmit = (evt, newBook) => {
    evt.preventDefault()
    fetch("http://localhost:3005/books", {
      method:'POST',
      headers: { 
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        title: newBook.title,
        author: newBook.author,
        img: newBook.img
      })
    })
    .then(r => r.json())
    .then(newBook => {
      this.setState({
        books: [newBook, ...this.state.books]
      })
    })
  }
  
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} onClick={this.handleSelectedBook} onSubmit={this.handleSubmit}/>
        <Bookshelf selectedBooks={this.state.selectedBooks} onClick={this.handleRemoveBook}/>
      </div>
    );
  }
}

export default App;
