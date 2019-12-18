import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
import Form from './components/Form.js'

class App extends Component {

  state = {
    books: [],
    shelf: [],
    newBook: {author:'', title:'', img:''}
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
    .then(res => res.json())
    .then(bookList => {
      this.setState({
        books: bookList
      })
    })
  }


  addToShelf = (book) => {
    this.setState({
      shelf: [...this.state.shelf, book]
    })
  }



  onChangeTitle = (event) => {
    const evt = event.target.value
    this.setState({ newBook: { ...this.state.newBook, title: evt} })
  }


  onChangeAuthor = (event) => {
    const evt = event.target.value
    this.setState({ newBook: { ...this.state.newBook, author: evt} })
  }


  onChangeImage = (event) => {
    const evt = event.target.value
    this.setState({ newBook: { ...this.state.newBook, img: evt} })
  }


  handleFormSubmit = () => {
    this.setState({
      books: [...this.state.books, this.state.newBook]
    })
  }



  render() {
    console.log(this.state.newBook)
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          addToShelf={this.addToShelf}
          newBook={this.state.newBook}
          onChangeTitle={this.onChangeTitle}
          onChangeAuthor={this.onChangeAuthor}
          onChangeImage={this.onChangeImage}/>
        <Bookshelf shelf={this.state.shelf}/>
      </div>
    );
  }
}

export default App;
