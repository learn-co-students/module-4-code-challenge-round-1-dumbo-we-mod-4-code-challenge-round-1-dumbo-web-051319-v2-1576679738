import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.editBook(props.book)} className="ui card" >
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt="" />
      <p>{props.book.author}</p>
    </div>
  );
};

export default Book;
