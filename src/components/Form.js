import React from "react";

class Form extends React.Component {

  state = {
    title: '',
    author: '',
    image: ''
  }

  handleChange = (event) => {
    event.preventDefault()

    this.setState({
     [event.target.name]: event.target.value
    })
  }


  render() {
    console.log(this.state)
    return (
      <form onSubmit={(event) => this.props.submitBook(event, this.state)}>
        <label> Title:  </label>
          <textarea value={this.state.title} onChange={(event) => this.handleChange(event)} name="title" />

          <label> Author: </label>
          <textarea value={this.state.author} onChange={(event) => this.handleChange(event)} name="author" />

          <label>  Image:  </label>
          <textarea value={this.state.image} onChange={(event) => this.handleChange(event)} name="image" />

      
        <input type="submit" value="Submit" />
      </form>
    );

    }
}

export default Form;
