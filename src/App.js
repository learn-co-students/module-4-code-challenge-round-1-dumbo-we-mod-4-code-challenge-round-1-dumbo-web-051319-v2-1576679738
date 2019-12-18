import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelfBooks:[]
  }

  componentDidMount = () => {
    fetch(`http://localhost:3005/books`)
    .then(r => r.json())
    .then((booksArr) => {
      this.setState({
        books: booksArr
      })
    }
    )
  }

  addToShelf = (book) => {
    // console.log(book)
    
    this.setState({
      shelfBooks: [book,...this.state.shelfBooks]
    })
  }
  
  removeFromShelf = (bookObj) => {
    let copiedBooks = [...this.state.shelfBooks]
    let index = copiedBooks.indexOf(bookObj)
   copiedBooks.splice(index,1)
   this.setState({
      shelfBooks: copiedBooks
    })
  }
  
  
  render() {
    return (
      <div className="book-container">
        <BookList 
        books={this.state.books} 
        addToShelf={this.addToShelf}/>
        <Bookshelf 
        books={this.state.shelfBooks} 
        removeFromShelf={this.removeFromShelf} />
      </div>
    );
  }
}

export default App;
