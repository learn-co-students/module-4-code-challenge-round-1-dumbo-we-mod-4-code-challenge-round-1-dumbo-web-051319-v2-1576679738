import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state={
    books: [],
    shelfBooks: []
  }

  whichBooks = () => {
    let bookArray= [...this.state.books]
    return bookArray
  }

  addFormBook = (e, info) => {
    e.preventDefault()

    let newBookInfo = {
      title: info.title.value,
      author: info.author.value,
      img: info.img.value
    }

    fetch(`http://localhost:3005/books`, {
      method:'POST',
     headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
     },
     body: JSON.stringify(newBookInfo)
    })
    .then(resp => resp.json())
    .then(json_resp => 
      this.setState((prevState) => {
        return {
          books: [json_resp, ...prevState.books]
        }
      }
      ))
  }

  addToShelf = (bookObj) => {
    this.setState((prevState) => {
      return {
        shelfBooks : [...prevState.shelfBooks, bookObj]
      }
    }
    )
  }

  removeBook = (bookObj) => {
    let newShelfBooks = [...this.state.shelfBooks]
    let bookIndex = newShelfBooks.indexOf(bookObj)
    newShelfBooks.splice(bookIndex, 1)

    this.setState({
      shelfBooks: newShelfBooks
    })
  }



  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(resp => resp.json())
    .then(bookArray => this.setState({
      books : bookArray
    })) 
  }

  render() {
    return (
      <div className="book-container">
        <BookList books={this.whichBooks()} addToShelf={this.addToShelf} addFormBook={this.addFormBook}/>
        <Bookshelf books={this.state.shelfBooks} removeBook={this.removeBook}/>
      </div>
    );
  }
}

export default App;
