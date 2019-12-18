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
    fetch(`http://localhost:3005/books`)
    .then(r => r.json())
    .then((allBooks) => {
     this.setState({
       books: allBooks
     })
    })
  }

  addToShelf = (book) => {
    console.log('adding', book)
   let copyBooks = this.state.books
   copyBooks = []
   copyBooks.push(book)
    
    this.setState({
      bookShelf: copyBooks
    })
  }
  
  removeFromShelf = (book) => {
    console.log('removing')

  }


  render() {
    
    return (
      <div className="book-container">
        <BookList books={this.state.books} addToShelf={this.addToShelf}/>
        <Bookshelf books={this.state.bookShelf} removeFromShelf={this.removeFromShelf}/>
      </div>
    );
  }
}

export default App;
