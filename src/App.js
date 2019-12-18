import React, { Component } from "react";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";
const URL = `http://localhost:3005/books`

class App extends Component {

state = {
  allBooks: [],
  displayBooks: [],
  bookShelf: []
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
 if(!bookObj.shelved){
  let updatedObj = {...bookObj, shelved: true, id: bookObj.id+Math.random()*100}
  let copyShelved = [...this.state.bookShelf]
  this.setState({
    bookShelf: [...copyShelved, updatedObj],
  },
  )
 } else {
   let removedFromShelf = this.state.bookShelf.filter(book=> bookObj.name !== book.name)
   this.setState({bookShelf: removedFromShelf}
    
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
