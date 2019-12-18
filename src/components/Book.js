import React from "react";

const Book = props => {
  return (
    <div
      onClick={() => {
        props.addBookToShelf
          ? props.addBookToShelf(props.book)
          : props.removeBookFromShelf(props.book);
      }}
    >
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt="book cover"></img>
    </div>
  );
};

export default Book;
