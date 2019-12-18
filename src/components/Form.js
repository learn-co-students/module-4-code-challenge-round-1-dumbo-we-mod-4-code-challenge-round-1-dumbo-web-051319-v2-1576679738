import React from "react";

class Form extends React.Component {
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmitForm}>
        <h1>New Book Form</h1>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={this.props.title}
            onChange={e => {
              this.props.inputTitle(e);
            }}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={this.props.author}
            onChange={e => {
              this.props.inputAuthor(e);
            }}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={this.props.img}
            onChange={e => {
              this.props.inputImage(e);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
