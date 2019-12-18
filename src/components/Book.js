import React from "react";

const Book = props => {
  const {book} = props.book
  return (
    <div>
      <h2>{props.book.title}</h2>
      <img
        src={props.book.img}
        alt={'something'}
        onClick={() => props.addToShelf(props.book)}
        >
      </img>

    </div>
  );
};

export default Book;
