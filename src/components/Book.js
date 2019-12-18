import React from "react";

const Book = (props) => {
  console.log(props)
  let imgURL= props.oneBook.img
  return (
    <div onClick={props.addBookToShelf}>
      <h2>{props.oneBook.title}</h2>
      <img src= {imgURL} alt={props.oneBook.title} ></img>  
    </div>
  );
};

export default Book;
