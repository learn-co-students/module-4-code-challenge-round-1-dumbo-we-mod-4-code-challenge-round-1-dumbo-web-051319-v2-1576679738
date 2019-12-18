import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const renderedBooks = props.books.map(book => <Book book={book} key={book.id} removeBook={props.removeBook} /> )
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderedBooks}</ul>
    </div>
  );
};

export default Bookshelf;
