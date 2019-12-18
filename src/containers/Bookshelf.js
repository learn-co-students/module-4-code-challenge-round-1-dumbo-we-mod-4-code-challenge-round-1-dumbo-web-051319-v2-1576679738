import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  let renderBooks = () => {
    return props.books.map(book => {
      return <Book book ={book} key= {book.id} handleClick={props.handleClick} />
    })
  }



  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBooks()}</ul>
    </div>
  );
};

export default Bookshelf;
