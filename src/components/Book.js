import React from "react";

const Book = props => {


  // console.log(props)
  return (
    
    <div onClick={() =>{props.handleChange(props)}}>
      <h2>{props.bookname}</h2>
      {<div><img src={props.bookimage} alt=""/></div>}
    </div>
  );
};

export default Book;
