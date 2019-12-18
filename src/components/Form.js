import React from "react";

class Form extends React.Component {


  state = {
    title: " ",
    author: " ",
    img: " "
  }



  handleInputChange = (evt) => {
    const value = evt.target.value;
    const name = evt.target.name;


    this.setState({
      [name]: value
    })

  }




  render() {
    return <h1>{
      <form onSubmit={(evt) => this.props.handleSubmit(evt, this.state)}>
        <label> Title: </label><input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}></input>
        <label> Author: </label><input type="text" name="author" value={this.state.author} onChange={this.handleInputChange}></input>
        <label> Image: </label><input type="text" name="img" value={this.state.img} onChange={this.handleInputChange} ></input>
        <button type="submit" value="submit">submit</button>
      </form>
    }</h1>;
  }
}

export default Form;
