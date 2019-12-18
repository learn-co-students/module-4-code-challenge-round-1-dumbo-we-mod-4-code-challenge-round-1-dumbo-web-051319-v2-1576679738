import React from "react";

class Form extends React.Component {

constructor(){
  super();
  this.state= {
    title: "Enter book title here",
    author: "Enter author here",
    img: "Enter url for image here"

  }
}

addBook= (event) => {
  event.preventDefault();
 this.setState({
   [event.target.name]: event.target.name.value

 })
 
}


  render() {
    
    return (<div> <h2>Log a Book</h2>
    
  <form>
  <input type="text" name= "title" value= {this.props.title} onChange={() => this.addBook()} />
  <input type="text" name= "author" value= {this.props.author} onChange={() => this.addBook()}/>
  <input type="text" name= "img" value={this.props.img} onChange={() => this.addBook()}/>
  <input type="submit" name= "submit" value="submit" onClick={() => this.props.onSubmit()}/>
    </form>
    </div>
   
    )
  }
}

export default Form;
