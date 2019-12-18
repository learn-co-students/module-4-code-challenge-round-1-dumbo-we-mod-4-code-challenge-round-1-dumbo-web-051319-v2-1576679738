import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state ={
    books: [],
    oneBook: [],
    addedBook: []
  }

  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(resp => resp.json())
    .then(bookArr => {
      this.setState({
        books: bookArr
      })
    })
  }

  addBookToShelf = (book) =>{
    // console.log("hey")
    this.setState({
      addedBook: [...book]
    })
  
  }
 
  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.books} 
        oneBook={this.state.oneBook}
        addBookToShelf={this.addBookToShelf}
        addedBook={this.state.addedBook}/>
        <Bookshelf books={this.state.books}
        addBookToShelf={this.addBookToShelf}
        addedBook={this.state.addedBook}/>
      </div>
    );
  }
}

export default App;
