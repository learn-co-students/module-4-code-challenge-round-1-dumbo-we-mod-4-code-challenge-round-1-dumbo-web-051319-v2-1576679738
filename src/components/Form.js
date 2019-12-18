import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    newBook:{
      title: '',
      author: '',
      img: '',
    }
    }

  }

 
  
  render() {
    return <form onSubmit={this.props.handleSubmit}>
      <label>
        Title:
        <input 
        type="text" 
        name="title" 
        value={this.state.text}
        onChange={this.props.onChange}/>
      </label>
       <label>
        Author:
        <input 
        type="text" 
        name="author" 
        value={this.state.text}
        onChange={this.props.onChange}/>
      </label>
       <label>
        Img:
        <input 
        type="text" 
        name="img" 
        value={this.state.text}
        onChange={this.props.onChange}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  }
}

export default Form;
