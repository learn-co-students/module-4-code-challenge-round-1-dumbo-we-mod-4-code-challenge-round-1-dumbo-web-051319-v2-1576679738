import React from "react";

class Form extends React.Component {

  state={
    title: '',
    author: '',
    img: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createBook({
      title: this.state.title,
      author: this.state.author,
      img: this.state.img
    })
    
  }
  
  



  render() {
    // console.log(this.props.createBook)
    return (
      <form onSubmit={(event)=>this.handleSubmit(event)}>
        <label>Title</label>
        <input name="title" value={this.state.title} onChange={this.handleChange} type="text" placeholder="Title of book" /><br/>
        <label>Author</label> 
        <input name="author" value={this.state.author} onChange={this.handleChange} type="text" placeholder="Book author" /><br/>
        <label>Image</label>
        <input name="img" value={this.state.img} onChange={this.handleChange} type="text" placeholder="image" /><br/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default Form;
