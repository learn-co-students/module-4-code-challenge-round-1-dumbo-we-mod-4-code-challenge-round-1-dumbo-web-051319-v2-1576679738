import React from "react";



const Book = (props) => {


  return (
    <div onClick={() => {props.handleClick(props.book)}} >
      <h2>{props.bookTitle}</h2>
      <img src={props.bookImg}></img>
    </div>
  );
};

export default Book;
