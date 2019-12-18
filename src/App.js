import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
const URL = `http://localhost:3005/books`

class App extends Component {

state = {
  allBooks: [],
  displayBooks: [],
  bookShelf: [],
  shelvedIds: []
}

getAllBooks = () => {
  fetch(URL)
  .then(resp => resp.json())
  .then(booksArr => {
    this.setState({
      allBooks: booksArr,
      displayBooks: booksArr
    })
  })
}


addBook = (bookObj) => {
  fetch(URL, {
    method:'POST',
   headers: { 
       'Content-type': 'application/json',
       'accept': 'application/json'
   },
   body: JSON.stringify({
  title: bookObj.title,
  author: bookObj.author,
  img: bookObj.img
    })
  })
  .then(resp => resp.json())
  .then(addedBook => {
    let allBooks = [...this.state.allBooks]
    let displayBooks = [...this.state.displayBooks]
    this.setState({
      allBooks: [...allBooks, addedBook],
      displayBooks: [...displayBooks, addedBook]
    })
  })
}


handleClick = (bookObj) => {
 if(!this.state.bookShelf.includes(bookObj) && !this.state.shelvedIds.includes(bookObj.id)){
  let updatedShelved = [...this.state.bookShelf, bookObj]
  let updatedIds = [...this.state.shelvedIds, bookObj.id]
  this.setState({ bookShelf: updatedShelved, shelvedIds: updatedIds})
 } else {
   let removedFromShelf = this.state.bookShelf.filter(book=> bookObj.id !== book.id)
   let removedFromIds = this.state.shelvedIds.filter(id=> bookObj.id !== id)
   this.setState({bookShelf: removedFromShelf, shelvedIds: removedFromIds}
    )
 }
}


componentDidMount(){
  this.getAllBooks()
}


  render() {
    return (
      <div className="book-container">
        <BookList books={this.state.displayBooks} handleClick={this.handleClick} addBook={this.addBook} />
        <Bookshelf books= {this.state.bookShelf} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
