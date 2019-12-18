import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import axios from 'axios'
import Form from './components/Form'

class App extends Component {

  state = {
    allBooks: [],
    bookShelf: []
  }

componentDidMount() {
  axios.get(`http://localhost:3005/books`)
  .then(r => {
    this.setState({allBooks: r.data})
    console.log(r.data[0])
  })
}

addToBookShelf = (book) => {
  if(!this.state.bookShelf.includes(book)){
    this.setState({bookShelf: [...this.state.bookShelf, book]})
  }
}

removeBookFromShelf = (book) => {
  let newBooksOnShelf = this.state.bookShelf.filter(bookToRemove => {
    return bookToRemove.id !== book.id
  })
this.setState({bookShelf: newBooksOnShelf})
}


  render() {
    // console.log(this.state.bookShelf)
    return (
      <div className="book-container">
        <Form />
        <BookList allBooks={this.state.allBooks} addBook={this.addToBookShelf}/>
        <Bookshelf bookShelf={this.state.bookShelf} removeBook={this.removeBookFromShelf}/>
      </div>
    );
  }
}

export default App;
