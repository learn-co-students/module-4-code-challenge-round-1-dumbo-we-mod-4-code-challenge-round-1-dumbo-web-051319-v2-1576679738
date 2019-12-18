import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

constructor(){
  super();

  this.state= {
    books: [],
    selectedBooks: []
  }
}

componentDidMount= () => {

fetch("http://localhost:3005/books")
.then(r => r.json())
.then(bookArray => {
  this.setState({
    books: bookArray,
    
  })
})
}

onSubmit= (event) => {
  event.preventDefault();

  this.setState({
    [event.target.name]: event.target.name.value
  })

}

selectBook= () => {
  this.setState({
    selectedBooks:[]
    // I would need to use a spread operator here to add books to the selected books list
    // then I would need to pass that array down to Bookshelf to render them to the bookshelf
  })

}

unselectBook= (props) => {
  this.setState({
    selectedBooks: []

    // Here I would need to get an argument back from the Bookshelf to let me know what book to
    // remove from the selectedBooks array
  })
}



  render() {
   
    return (
      <div className="book-container">
        <BookList books={this.state.books} onSubmit={this.onSubmit}/>
        <Bookshelf books={this.state.books} selectedBooks={this.state.selectedBooks} unselectBook={this.unselectBook}/>
      </div>
    );
  }
}

export default App;
