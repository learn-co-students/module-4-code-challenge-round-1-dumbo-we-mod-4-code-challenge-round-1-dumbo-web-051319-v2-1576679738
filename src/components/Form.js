import React from "react";
import uuid from 'uuid'

class Form extends React.Component {

  state = {
    title: '',
    imgUrl: '',
    author: ''
  }


  handleNameChange = (event) => {
    this.setState({ title: event.target.value });
  }
  handleImgChange = (event) => {
    this.setState({ imgUrl: event.target.value });
  }

  handleAuthorChange = (event) => {
    this.setState({ author: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //transfer control to create book
    this.createBook()
  }


  createBook = () =>{

    let newBook = {
      id: uuid.v4(),
      title: this.state.title,
      author: this.state.author,
      img: this.state.imgUrl  
    }
this.props.getNewBook(newBook)


  }
  render() {
    // console.log(this.state.name)
    // console.log(this.state.imgUrl)
    // console.log(this.state.author)
    return (

      <div>
        <h1> Create A New Book</h1>

      <form onSubmit={this.handleSubmit}>
        <label>
          Book Title:
          <input type="text" value={this.state.title} onChange={this.handleNameChange} />
        </label> <br />
          <label>
            Book Author:
          <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
          </label> <br />
        <label>
          Book Image URL:
          <input type="text" value={this.state.imgURL} onChange={this.handleImgChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      </div>


    )
    
  }
}

export default Form;
