import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {
  
  console.log(props.selectedBooks)

  const renderSelectedBooks= () => {
    return "something"
    // return props.selectedBooks.map(book => {
    //   return <img src= {book.img} />
    // })
  }



  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>Render selected books here  <li onclick={() => this.props.unselectBook(props)}> {renderSelectedBooks()} </li></ul>
     
    </div>
  );
};

export default Bookshelf;
