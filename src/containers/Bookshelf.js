import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const renderBookList = () => {
    return props.books.map(book => (
      <Book
        key={book.id}
        book={book}
        removeBookFromShelf={props.removeBookFromShelf}
      />
    ));
  };
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBookList()}</ul>
    </div>
  );
};

export default Bookshelf;
