import React from "react";

class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: "",
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    // this is the main function to add to the DOM => this.props.addBookToMainList(this.state)

    // or

    // bonus function for persisting to the backend:
    this.props.addBookToMainListBackEnd(this.state)
    this.setState({
      title: "",
      author: "",
      img: ""
    })
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          title:
    <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
        </label>
        <label>
          author:
    <input type="text" name="author" onChange={this.onChange} value={this.state.author} />
        </label>
        <label>
          img:
    <input type="text" name="img" onChange={this.onChange} value={this.state.img} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
