import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state = {
    books: [],
    shelf: [],
    newbook: {}
  };

  componentDidMount() {
    const url = "http://localhost:3005/books";
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({ books: data }))
      .catch(error => {
        console.error(error);
      });
  }

  addBookToShelf = book => {
    const bookExist = this.state.shelf.includes(book);
    if (!bookExist) {
      this.setState(prevState => {
        return {
          shelf: [...prevState.shelf, book]
        };
      });
    }
  };
  removeBookFromShelf = book => {
    const bookRemove = this.state.shelf.filter(b => b !== book);
    this.setState({
      shelf: bookRemove
    });
  };
  inputTitle = event => {
    const newTitle = event.target.value;
    this.setState(prevState => {
      return {
        newBook: { ...prevState.newBook, title: newTitle }
      };
    });
  };
  inputAuthor = event => {
    const newAuthor = event.target.value;
    this.setState(prevState => {
      return {
        newBook: { ...prevState.newBook, author: newAuthor }
      };
    });
  };
  inputImage = event => {
    const newImage = event.target.value;
    this.setState(prevState => {
      return {
        newBook: { ...prevState.newBook, image: newImage }
      };
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        books: [this.state.newBook, ...prevState.books]
      };
    });
    this.setState({ title: "", author: "", image: "" });
  };

  render() {
    console.log(this.state.newbook);
    return (
      <div className="book-container">
        <BookList
          books={this.state.books}
          addBookToShelf={this.addBookToShelf}
          newBook={this.state.newBook}
          inputTitle={this.inputTitle}
          inputAuthor={this.inputAuthor}
          inputImage={this.inputImage}
          handleSubmitForm={this.handleSubmitForm}
        />
        <Bookshelf
          books={this.state.shelf}
          removeBookFromShelf={this.removeBookFromShelf}
        />
      </div>
    );
  }
}

export default App;
