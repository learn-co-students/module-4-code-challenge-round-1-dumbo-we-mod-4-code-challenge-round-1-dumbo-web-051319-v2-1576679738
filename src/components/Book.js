import React from "react";

const Book = props => {
  // console.log(props)
  const img = props.book.img
  return (
    <div onClick={ () => props.onClick(props.book) }>
      <h2>{props.book.title}</h2>
      {<img src={img}
      alt={props.book.title}
      />}
    </div>
  );
};

export default Book;
