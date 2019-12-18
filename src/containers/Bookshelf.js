import React from "react";
import Book from "../components/Book";

const Bookshelf = (props) => {

  let renderBooks = () => {
    return props.books.map((book, index) => <Book key={`${book.name} - ${index}`} book={book} handleClick={props.removeBook}/>)
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
