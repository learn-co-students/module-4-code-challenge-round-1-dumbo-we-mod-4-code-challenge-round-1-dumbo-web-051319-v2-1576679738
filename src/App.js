import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    shelfBooks:[],
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
  
  addNewBook = (evt,title,author,img) => {
    // evt.preventDefault()
    // console.log(evt)
    console.log(title,author,img)
    const book = {
      title,
      author,
      img
    }

    this.setState({
      books: [book , ...this.state.books]
    })
  }
  

//   { 
//     "id": 1, 
//     "title": "The Great Gatsby", 
//     "author": "F. Scott Fitzgerald", 
//     "img": "https://mppl.org/wp-content/uploads/0-214x300.jpg" 
//  }
  
  render() {
    return (
      <div className="book-container">
        <BookList 
        books={this.state.books} 
        addToShelf={this.addToShelf} 
        addNewBook={this.addNewBook}/>

        <Bookshelf 
        books={this.state.shelfBooks} 
        removeFromShelf={this.removeFromShelf} />
      </div>
    );
  }
}

export default App;
