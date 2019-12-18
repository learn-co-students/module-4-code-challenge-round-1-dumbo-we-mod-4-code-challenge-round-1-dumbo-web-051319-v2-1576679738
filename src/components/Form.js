import React from "react";

class Form extends React.Component {

  state = {
    name: '',
    imgUrl: '',
    author: ''
  }


  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }
  handleImgChange = (event) => {
    this.setState({ imgUrl: event.target.value });
  }

  handleAuthorChange = (event) => {
    this.setState({ author: event.target.value });
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.name + this.state.imgUrl);
    event.preventDefault();
    //transfer control to create book
  }


  createBook = (name, imgUrl) =>{


  }
  render() {
    console.log(this.state.name)
    console.log(this.state.imgUrl)
    console.log(this.state.author)
    return (

      <div>
        <h1> Add A New Book</h1>

      <form onSubmit={this.handleSubmit}>
        <label>
          Book Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
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
