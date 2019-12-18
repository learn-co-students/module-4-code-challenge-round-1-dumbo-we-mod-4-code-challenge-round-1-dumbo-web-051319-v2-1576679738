import React from "react";

class Form extends React.Component {
  render() {
    const {author, title, image} = this.props.newBook

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.props.newBook.title} onChange={this.props.onChangeTitle} />
        </label>
        <label>
          Author:
          <input type="text" value={this.props.newBook.author} onChange={this.props.onChangeAuthor} />
        </label>
        <label>
          Image:
          <input type="text" value={this.props.newBook.img} onChange={this.props.onChangeImage} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      )
  }
}

export default Form;
