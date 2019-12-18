import React from "react";

const Book = props => {

  return (
    <div className="book-card" onClick={props.handleClick ? () => props.handleClick(props.book) : () => props.handleDeleteShelfClick(props.book)}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} /> 
    </div>
  );
};

export default Book;