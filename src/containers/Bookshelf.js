import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{/*render list of books here*/
      props.books.map((book) => {
        return < Book book={ book } 
        handleClick={props.removeFromShelf} 
        key={book.id} 
        id={book.id}/>
      }
      )
      }</ul>
    </div>
  );
};

export default Bookshelf;
