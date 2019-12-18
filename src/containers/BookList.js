import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
	render() {
		return (
			<div className="book-list">
				<h1>Book List</h1>
				<Form
					handleChange={this.props.handleChange}
					newBook={this.props.newBook}
					handleSubmit={this.props.handleSubmit}
				/>
				<ul>
					{this.props.books.map(book => (
						<li key={book.id} style={{ listStyle: "none" }}>
							<Book
								book={book}
								onClick={this.props.onClick}
								displayStatus={this.props.displayStatus}
							/>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default BookList;
