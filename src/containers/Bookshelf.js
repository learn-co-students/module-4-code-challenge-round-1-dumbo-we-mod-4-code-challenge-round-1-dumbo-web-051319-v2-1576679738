import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  // console.log(props.books.map(book=> <Book books={book} key={book.id}/>))
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{props.books.map(book=> <Book books={book} key={book.id} handleRemove={props.handleRemove}/>)}</ul>
    </div>
  );
};

export default Bookshelf;
