import React from "react";

class Form extends React.Component {

  state = {
    title: null,
    author: null,
    img: null,
    id: Math.floor(Math.random() * (92) + 9)
  }

  handleChange = (event) => {
   this.setState({
     [event.target.name]: event.target.value 
   })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBook({
      title: this.state.title, 
      author: this.state.author,
      img: this.state.img,
      id: this.state.id 
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" placeholder="enter book title" name="title" onChange={this.handleChange}/>
        <label htmlFor="author">Author:</label>
        <input type="text" placeholder="enter book author" name="author" onChange={this.handleChange}/>
        <label htmlFor="img">Image:</label>
        <input type="text" placeholder="enter book image" name="img" onChange={this.handleChange}/>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;
