import React from "react";
class Form extends React.Component {

  state = {
    title: "",
    author: "",
    img: ""
  }

  handleOnChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  
  render() {
    return(
      <form onSubmit={(evt) => this.props.onSubmit(evt, this.state)}>
        <input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.handleOnChange}/>
        <input type="text" placeholder="author" name="author" value={this.state.author} onChange={this.handleOnChange}/>
        <input type="text" placeholder="img" name="img" value={this.state.img} onChange={this.handleOnChange} />
        <input type="submit" value="Submit" />
      </form>
    ) 
  }
}

export default Form;
