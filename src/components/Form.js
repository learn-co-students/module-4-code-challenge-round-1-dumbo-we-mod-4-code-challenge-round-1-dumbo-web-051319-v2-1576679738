import React from "react";

class Form extends React.Component {
  render() {
    return <h1>{/*create form*/
      <form 
      // onClick={(evt)=> this.props.addNewBook(evt.target)}
      onSubmit={(evt)=> this.props.addNewBook(evt.preventDefault(),evt.target["title"].value, evt.target["Author"].value, evt.target["img"].value)}
     
      >
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <br/>
        <label>
          Author:
          <input type="text" name="Author" />
        </label>
        <br/>
        <label>
          imageUrl:
          <input type="text" name="img" />
        </label>
        <input type="submit" ></input>
     {/* <button type="button" >Add Book</button> */}
</form>
    }</h1>;
  }
}

// value={{
//   title: evt.target["title"].value,
//   author: evt.target["author"].value,
//   image: evt.target["img"].value
// }}
export default Form;
