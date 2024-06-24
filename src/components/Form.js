import React from "react";

class Form extends React.Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit}>
					{/* title */}
					<input
						type="text"
						placeholder="title"
						name="title"
						// id={this.props.}
						value={this.props.newBook.title}
						onChange={this.props.handleChange}
					/>
					{/* author */}
					<input
						type="text"
						placeholder="author"
						name="author"
						value={this.props.newBook.author}
						onChange={this.props.handleChange}
					/>

					{/* img */}
					<input
						type="text"
						placeholder="img"
						name="img"
						value={this.props.newBook.img}
						onChange={this.props.handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;
