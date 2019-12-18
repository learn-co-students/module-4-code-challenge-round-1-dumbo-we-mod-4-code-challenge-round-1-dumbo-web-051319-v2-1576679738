import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
  	books: [],
  	shelf: []
  }

  componentDidMount() {

  	fetch('http://localhost:3005/books')
  	  .then(resp => resp.json())
  	  .then(data => {
  	  	this.setState({
          books: data
          })
  	  })
  }

  handleClick = (book) => {
  	  this.setState({
  		  shelf: [...this.state.shelf, book]
  	  })
  	
  }

  handleDeleteShelfClick = (bookObj) => {
  	const booksCopy = [...this.state.shelf]
  	const filteredBooks = booksCopy.filter(book => book.id !== bookObj.id)

  	this.setState({
  		shelf: filteredBooks
  	})
  }

  handleSubmit = (event, bookObj) => {
  	event.preventDefault()
      this.setState({
  		    books: [bookObj, ...this.state.books]
  	  })
  
  }
 
  render() {
    return (
    	<main>
	      <div className="book-container">
	        <BookList handleSubmit={this.handleSubmit} handleClick={this.handleClick} books={this.state.books} />
	        <Bookshelf handleDeleteShelfClick={this.handleDeleteShelfClick} books={this.state.shelf} />
	      </div>
	    </main>
    );
  }
}

export default App;
