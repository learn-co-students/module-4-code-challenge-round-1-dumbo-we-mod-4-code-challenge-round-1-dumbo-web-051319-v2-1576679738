import React from "react";

class Form extends React.Component {
  state={
    newTitle: "",
    newAuthor: "",
    newImg: ""
  }

  handleTitleChange = (event) => {
    this.setState({
      newTitle: event.target.value 
    })
  }
  
  handleAuthorChange = (event) => {
    this.setState({
      newAuthor: event.target.value
    })
  }

  handleImgChange = (event) => {
    this.setState({
      newImg: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newBookObj = {
      title: this.state.newTitle,
      author: this.state.newAuthor,
      img: this.state.newImg
    }
    this.props.createNewBook(newBookObj)
    this.setState({
      newTitle: "",
      newAuthor: "",
      newImg: ""
    })
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit} >
      <label>Title: 
        <input type="text" name="title" value={this.state.newTitle} onChange={this.handleTitleChange} />
      </label>
      <label>Author: 
        <input type="text" name="author" value={this.state.newAuthor} onChange={this.handleAuthorChange} />
      </label>
      <label>Cover Image: 
        <input type="text" name="img" value={this.state.newImg} onChange={this.handleImgChange} />
      </label>
      <input type="submit" value="Submit!" />
    </form>
    )
  }
}

export default Form;
