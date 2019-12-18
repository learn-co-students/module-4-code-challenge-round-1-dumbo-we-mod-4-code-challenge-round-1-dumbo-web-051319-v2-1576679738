import React from "react";

class Form extends React.Component {

  state = {
    id: '',
    title: '',
    author: '',
    img: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Gender_Trouble%2C_first_edition.jpg'
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // const uuidv4 = require('uuid/v4')
    // const newID = uuidv4()
    // this.setState({id: newID})
    this.props.addNewBookToBooks(this.state)
  }
  
  render() {
    console.log(this.state)
    return <h1>{
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" placeholder={'Gender Trouble'} value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Author:
            <input type="text" name="author" placeholder={'Judith Butler'} value={this.state.author} onChange={this.handleChange} />
          </label>
          <label>
            Image:
            <input type="text" name="img" value={this.state.img} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      }</h1>;
  }
}

export default Form;



// { 
//   "id": 1, 
//   "title": "The Great Gatsby", 
//   "author": "F. Scott Fitzgerald", 
//   "img": "https://mppl.org/wp-content/uploads/0-214x300.jpg" 
// }