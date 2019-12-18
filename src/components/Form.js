import React from "react";

class Form extends React.Component {

  state = {
  	title: '',
  	author: '',
  	img: ''
  }

  handleAddForm = (event) => {
  	event.preventDefault()

  	this.setState({
  		[event.target.name]: event.target.value
  	})
  }

  render() {
    return (
      <div>
    	<h3>Add new book!</h3>
    	<form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
        Title:
		  	<input onChange={this.handleAddForm} type="text" name="title" placeholder="Please put title"/> <br/>
        Author:
		  	<input onChange={this.handleAddForm} type="text" name="author" placeholder = "Please put author"/><br/>
        Image: 
		  	<input onChange={this.handleAddForm} type="text" name="img" placeholder="Put image"/><br/>
	  	<input type="submit" />
	  </form>
      </div>
    );
  }
}

export default Form;
