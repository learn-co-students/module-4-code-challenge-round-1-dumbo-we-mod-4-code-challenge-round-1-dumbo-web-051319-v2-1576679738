import React from "react";

class Form extends React.Component {

state = {
  currentBook: {}
}

handleChange = (event) => {
  this.setState({
    currentBook: {...this.state.currentBook, [event.target.name]: event.target.value}
  })
}



  render() {
    return (
    
    <div>
    <h1>Add Book</h1>
    <input name= "title" placeholder= "title" onChange = {this.handleChange} value= {this.state.currentBook.title}></input>
    <input name= "author" placeholder= "author" onChange = {this.handleChange} value= {this.state.currentBook.author}></input>
    <input name= "img" placeholder= "image URL" onChange = {this.handleChange} value= {this.state.currentBook.img}></input>
    <input type= "submit" onClick= {() => this.props.addBook(this.state.currentBook)}/>
    </div>
    )
  }
}

export default Form;
