import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = {
    books: [],
    bookshelf: [],
    filterTerm: "All"
  }

componentDidMount(){
  fetch(`http://localhost:3005/books`)
  .then(resp => resp.json())
  .then(json_resp => 
    this.setState({
     books: json_resp
    }) )
}

setFilterTerm = (term) => {
    this.setState({
      filterTerm: term
    })
}

whichBooksToRender = () => {
  let copiedBooks = [...this.state.books]
  if (this.state.filterTerm === "boring") 
  {copiedBooks = this.state.books.filter(book => book.review === "boring")}
  else if (this.state.filterTerm === "wonderful") 
  {copiedBooks = this.state.books.filter(book => book.review === "wonderful")}
  else {return copiedBooks}

  return copiedBooks
}

addBookToShelf = (book) => {
   if (!this.state.bookshelf.includes(book))
   {this.setState({
    bookshelf: [...this.state.bookshelf, book]
   })
   }
}

submitBook = (event, newBook) => {
  event.preventDefault()

 this.setState({
  books: [...this.state.books, newBook]
 })

}

removeBookFromShelf = (bookObj) => {
  const newShelf = this.state.bookshelf.filter(book => book.id !== bookObj.id)
  this.setState({
    bookshelf: newShelf
  })

}
     
  
  render() {
      {console.log(this.state)}
    return (
      <div className="book-container">
        <BookList books = {this.whichBooksToRender()}  handleClick = {this.addBookToShelf} submitBook = {this.submitBook}  setFilterTerm = {this.setFilterTerm}/>
        <Bookshelf books= {this.state.bookshelf}  handleClick = {this.removeBookFromShelf}/>
      </div>
    );
  }
}

export default App;
