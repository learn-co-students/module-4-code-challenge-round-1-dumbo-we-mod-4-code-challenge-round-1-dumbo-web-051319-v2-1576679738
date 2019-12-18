import React from "react";

class Form extends React.Component {

  state={
    title: "",
    author: "",
    img: ""
  }


  render() {
    return (
    <div>
      <h1>{"Add Your Own Book"}</h1>
      <form onSubmit={(e) => this.props.handleSubmit(e, e.target)}>
        <label>
          BookTitle:
          <input type="text" name="title" onChange={(e) => this.setState({title : e.target.value})}/>
        </label>
        <label>
          Author:
          <input type="text" name="author" onChange={(e) => this.setState({author : e.target.value})} />
        </label>
        <label>
          ImgURL:
          <input type="text" name="img" onChange={(e) => this.setState({img : e.target.value})} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

export default Form;
