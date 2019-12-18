import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state={
    books: [],
    displayBooks: [],
    bookShelf: []
  }

  fetchAllBooks = () => {
    fetch(`http://localhost:3005/books`)
    .then(resp => resp.json())
    .then(bookArr => this.setState({
      books: bookArr,
      displayBooks: bookArr
    }))
  }
  
  addBook=(bookObj) => {
    this.setState({
      bookShelf: [...this.state.bookShelf, bookObj]
    })
  }

  removeBook=(bookObj) => {
    this.setState({
      bookShelf: this.state.bookShelf.filter(book=>
      book.id !== bookObj.id)
    })
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit =(event) => {
    event.preventDefault()
    let bookInfo={
      title: event.target.title.value,
      author: event.target.author.value,
      img: event.target.img.value
    }
    fetch(`http://localhost:3005/books`, {
      method:'POST',
     headers: { 
         'Content-type': 'application/json',
         'accept': 'application/json'
     },
     body: JSON.stringify({
      title: bookInfo.title,
      author: bookInfo.author,
      img: bookInfo.img
      })
    })
    .then(resp => resp.json())
    .then(newBook => {return this.setState((prevState) => { return { 
      displayBooks: {...prevState.displayBooks, newBook}
     }})
    

    
    })
    
  }
  
    
    

  
  
  
  

  componentDidMount() {
    this.fetchAllBooks()
  }
  

  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.displayBooks}
        handleClick= {this.addBook}
        onChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
        <Bookshelf books={this.state.bookShelf}
        handleClick={this.removeBook}/>
      </div>
    );
  }
}

export default App;
