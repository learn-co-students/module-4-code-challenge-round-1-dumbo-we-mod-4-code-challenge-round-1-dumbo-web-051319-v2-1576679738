import React from "react";
import Book from "../components/Book";




const Bookshelf = props => {

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.myBookShelf.map((book) => {
        return <Book book={book} key={book.id} handleClick={props.removeBookFromBookShelf} />
      })}</ul>
    </div>
  );
};

export default Bookshelf;
