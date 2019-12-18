import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    allTheBooks: [],
    bookShelfArray: []
  }



  fetchAllBooks = () => {

    fetch(`http://localhost:3005/books`)
    .then(resp => resp.json())
    .then((allBooks) => {
      this.setState({
        allTheBooks: allBooks
      })
    })

  }

  componentDidMount(){
    this.fetchAllBooks()
  }


  handleClick = (book) => {
    this.setState({
      bookShelfArray: [...this.state.bookShelfArray, book]
    })
  }


  render() {
    
    return (
      <div className="book-container">

        <BookList 
          allTheBooks={this.state.allTheBooks} 
          handleClick={this.handleClick}
        />

        <Bookshelf 
          bookShelfArray={this.state.bookShelfArray}
          handleClick={this.handleClick}
        />

      </div>
    );
  }
}

export default App;
