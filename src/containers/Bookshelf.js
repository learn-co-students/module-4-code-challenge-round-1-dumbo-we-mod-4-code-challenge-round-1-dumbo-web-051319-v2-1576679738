import React from "react";
import Book from "../components/Book";
// import { v4 } from 'uuid';

const Bookshelf = props => {
  let allBooks = props && props.books.length > 0 ?
    props.books.map(book=>
      <li><Book book={book} key={book.id} handleClick={props.handleClick}/></li>):
      <span></span>
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{allBooks}</ul>
    </div>
  );
};

export default Bookshelf;
