import React from "react";

class Form extends React.Component {
  state ={
    title: "",
    author: "",
    img: ""
  }

  handleChange = (evt) => {
    //console.log(evt.target.name, evt.target.value)
    this.setState({
      [evt.target.name] : evt.target.value

    })
    

  }

 
 
  render() {
   // console.log(this.state)
   
    return (
      <div>
        <h1>Add Book to List</h1>
        <form onSubmit ={(evt)=>this.props.handleOnSubmit(evt, this.state)}>
        <input type="text" name="title"  placeholder = "title" value= {this.state.title} onChange ={(evt) => this.handleChange(evt)}></input>
        <input type="text" name="author" placeholder = "author" value={this.state.author} onChange ={(evt) => this.handleChange(evt)}></input>
        <input type="text" name="img" placeholder = "img_url" value= {this.state.img}onChange ={(evt) => this.handleChange(evt)}></input>
        <input type="submit" value="Submit"></input>
        
        </form>
    
  
     </div>
    )
    
    // <h1>{/*create form*/}</h1>;
  }
}

export default Form;
