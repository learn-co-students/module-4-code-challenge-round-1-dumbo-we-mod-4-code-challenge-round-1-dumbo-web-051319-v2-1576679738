import React from "react";

const Book = props => {

  console.log(props)
  return (
    <div onClick = {(book) => props.handleClick(props.book)}>
      <h2>{props.book.title}</h2>
       {/* <img src = {props.book.img}> </img> */}

       <img src={props.book.img}
        />
    </div>
  );
};

export default Book;
