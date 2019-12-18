import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    myBooks: [],
    title: "",
    author: "", 
    img: "",
  }

  componentDidMount() {
    fetch("http://localhost:3005/books")
    .then(r => r.json())
    .then(books => this.setState({books: books}))
  }
  
  addBook = (value) => {
    if (!this.state.myBooks.includes(value))
    this.setState({myBooks: [...this.state.myBooks, value]})
  }

  removeBook = (value) => this.setState({myBooks: this.state.myBooks.filter(book => book.id !== value.id)})

  handleInputChange = (event) => {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addNewBook = (value) => this.setState({books: [...this.state.books, value]})

  render() {
    const {books, myBooks, title, author, img}=this.state
    console.log(img)

    return (
      <div className="book-container">
        <BookList books={books} addBook={this.addBook} handleInputChange={this.handleInputChange} 
          title={title} author={author} img={img} addNewBook={this.addNewBook} />

        <Bookshelf books={myBooks} removeBook = {this.removeBook} />
      </div>
    );
  }
}

export default App;
