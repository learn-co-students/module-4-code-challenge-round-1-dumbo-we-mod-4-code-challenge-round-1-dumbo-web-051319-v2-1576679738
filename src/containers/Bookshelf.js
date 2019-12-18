import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.bookShelf.map(book => <Book key={book.id} addBook={props.removeBook} book={book}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
