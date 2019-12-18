import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    allBooks: [],
    myBookShelf: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then((response) => response.json())
      .then((bookResponse) => {
        this.setState({
          allBooks: bookResponse
        })
      })
  }

  addBookToBookShelf = (bookObj) => {
    if (!this.state.myBookShelf.includes(bookObj)) {
      this.setState({
        myBookShelf: [...this.state.myBookShelf, bookObj]
      })

    }
  }


  removeBookFromBookShelf = (bookObj) => {
    // console.log(bookObj)
    this.setState({
      myBookShelf: this.state.myBookShelf.filter(book => book !== bookObj)
    })
  }



  render() {
    console.log(this.state.allBooks)
    return (
      <div className="book-container">
        <BookList allBooks={this.state.allBooks} addBookToBookShelf={this.addBookToBookShelf} />
        <Bookshelf myBookShelf={this.state.myBookShelf} removeBookFromBookShelf={this.removeBookFromBookShelf} />
      </div>
    );
  }
}

export default App;
