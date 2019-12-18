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
    console.log('removing', book)
    let newShelf = this.state.bookShelf.pop(book)
    this.setState({
      bookShelf: newShelf
    })

  }


  render() {
    
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleClick={this.addToShelf}/>
        <Bookshelf books={this.state.bookShelf} handleClick={this.removeFromShelf}/>
      </div>
    );
  }
}

export default App;
