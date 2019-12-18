import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const renderBooks = () => {
    return props.books.map(book => <Book book={book} onClick={props.removeBookFromBookShelf} key={book.personalID}/>)
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
