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

  componentDidMount(){
    fetch("http://localhost:3005/books")
    .then(r => r.json())
    .then((booksArray) => {
      //console.log(booksArray)
      this.setState({
        books: booksArray
      })
    })
  }
  addBookToShelf =(bookObj) =>{
    //console.log(bookObj)
    if (!this.state.bookShelf.includes(bookObj)){
      this.setState({
        bookShelf: [bookObj, ...this.state.bookShelf]
     })
    }
  }

  removeFromShelf = (bookObj) => {
   // console.log("hi")
    const newBookShelf = this.state.bookShelf.filter(book => book.id !== bookObj.id)
    this.setState({
      bookShelf: newBookShelf
    })
  }

  handleOnSubmit = (evt, newBookObj) => {
    evt.preventDefault()
    //console.log(evt.target, newBookObj)
    this.setState({
      books:[newBookObj, ...this.state.books]
    })
  }

  render() {
    //console.log(this.state)
    return (
      <div className="book-container">
        <BookList books ={this.state.books} handleClick = {this.addBookToShelf} handleOnSubmit = {this.handleOnSubmit}/>
        <Bookshelf shelfBooks = {this.state.bookShelf} handleClick = {this.removeFromShelf}/>
      </div>
    );
  }
}

export default App;
