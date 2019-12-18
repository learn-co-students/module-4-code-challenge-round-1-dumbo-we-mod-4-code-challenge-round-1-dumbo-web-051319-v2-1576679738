import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    allBooks: [],
    myBookShelf: []
  }

  componentDidMount() {
    fetch('http://localhost:3005/books')
      .then((response) => response.json())
      .then((bookResponse) => {
        this.setState({
          allBooks: bookResponse
        })
      })
  }

  addBookToBookShelf = (bookObj) => {
    if (!this.state.myBookShelf.includes(bookObj)) {
      this.setState({
        myBookShelf: [...this.state.myBookShelf, bookObj]
      })

    }
  }


  removeBookFromBookShelf = (bookObj) => {
    // console.log(bookObj)
    this.setState({
      myBookShelf: this.state.myBookShelf.filter(book => book !== bookObj)
    })
  }

  // function works without persisting on backend => commented out the props down below where functions get called in the components below
  // addBookToMainList = (bookObj) => {
  //   this.setState({
  //     allBooks: [...this.state.allBooks, bookObj]
  //   })
  // }

  //Bonus function for backend
  addBookToMainListBackEnd = (bookObj) => {
    fetch('http://localhost:3005/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: bookObj.title,
        author: bookObj.author,
        img: bookObj.img,
      })
    }).then(response => response.json())
      .then((response) => {
        this.setState({
          allBooks: [...this.state.allBooks, response]
        })
      })

  }

  render() {
    console.log(this.state.allBooks)
    return (
      <div className="book-container">
        <BookList allBooks={this.state.allBooks} addBookToBookShelf={this.addBookToBookShelf} /*addBookToMainList={this.addBookToMainList} */ addBookToMainListBackEnd={this.addBookToMainListBackEnd} />
        <Bookshelf myBookShelf={this.state.myBookShelf} removeBookFromBookShelf={this.removeBookFromBookShelf} />
      </div>
    );
  }
}

export default App;
