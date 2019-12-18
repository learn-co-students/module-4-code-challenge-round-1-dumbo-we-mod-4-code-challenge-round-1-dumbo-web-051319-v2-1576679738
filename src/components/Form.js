import React from "react";

class Form extends React.Component {
  
  onChange = (event) => {
    this.props.handleInputChange(event)
  }

  onSubmit = () => {
    fetch("http://localhost:3005/books", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        title: this.props.title,
        author: this.props.author,
        img: this.props.img
      })
    })
    .then(r => r.json())
    .then(book => this.props.addNewBook(book))
  }
  
  render() {

    return (
      <form onSubmit={this.onSubmit} >
        <label htmlFor="title">
          Title:
          <input type="text" name="title" onChange={this.onChange} value={this.props.title} />
        </label>
        <label htmlFor="author">
          Author:
          <input type="text" name="author" onChange={this.onChange} value={this.props.author} />
        </label>
        <label htmlFor="img">
          ImageURL:
          <input type="text" name="img" onChange={this.onChange} value={this.props.img}/>
        </label>
        <button type="submit" >Submit New Book</button>
      </form>
    );
  }
}

export default Form;
