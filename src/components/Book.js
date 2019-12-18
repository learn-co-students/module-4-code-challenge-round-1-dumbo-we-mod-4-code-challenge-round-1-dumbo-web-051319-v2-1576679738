import React from "react";

const Book = props => {

let {author, title, img} = props.book

  return (
    <div
    onClick={()=> props.handleClick(props.book)}
    >
      <h2>{title}</h2>
      <h4>{author}</h4>
      <img src= {img}alt= "booko"></img>
    </div>
  );
};

export default Book;
