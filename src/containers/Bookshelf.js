import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  const uuidv4 = require('uuid/v4')
  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>
        {props.shelvedBooks.map(book => <Book key={uuidv4()} book={book} editBook={props.editBook} />)}
      </ul>
    </div>
  );
};

export default Bookshelf;
