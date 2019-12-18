import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  let renderBookShelf = () => {
    return props.bookShelf.map(book => 
      <Book id={book.id} book={book} handleClick={props.handleClick}/>
    )
  }


  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBookShelf()}</ul>
    </div>
  );
};

export default Bookshelf;
