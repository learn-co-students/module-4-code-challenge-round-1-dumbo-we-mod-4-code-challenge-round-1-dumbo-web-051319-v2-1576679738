import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state={
    books: [],
    bookList: []
  }

  componentDidMount(){
    fetch(`http://localhost:3005/books`)
    .then(resp => resp.json())
    .then(booksObj => this.setState({
      books: booksObj
    }))
  }

  handleChange = (bookObj) =>{
     this.setState({
       bookList: bookObj
      
     })
   }
   

  render() {
  
    
    return (
      <div className="book-container">
        <BookList books={this.state.books} handleChange={this.handleChange}/>
        <Bookshelf booksToAdd={this.handleChange} bookList={this.state.bookList}/>
      </div>
    );
  }
}

export default App;
