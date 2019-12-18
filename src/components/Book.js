import React from "react";

const Book = props => {
  // console.log(props.addBookToBookshelf)
  return (
    // <div onClick={()=> props.addBookToBookshelf? props.addBookToBookshelf(props.books) : console.log('yo')}>
    <div onClick={()=> props.addBookToBookshelf ? props.addBookToBookshelf(props.books) : props.handleRemove(props.books)}>
      <h2>{props.books.title}</h2>
      <img src={props.books.img}/>
    </div>
  );
};

export default Book;
