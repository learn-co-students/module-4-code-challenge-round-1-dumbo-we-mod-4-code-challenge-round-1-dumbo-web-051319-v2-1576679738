import React from "react";

const Book = props => {
  const onClick = () => {
    props.handleClick(props.book)
  }

  return (
    <div onClick={onClick}>
      <h2>{props.book.title}</h2>
      <img src={props.book.img} alt=""></img>
    </div>
  );
};

export default Book;
